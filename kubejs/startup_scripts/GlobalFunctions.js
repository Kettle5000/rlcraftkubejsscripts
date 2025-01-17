/** Curios/Armor Default Attributes */
let curiosAttributes = [];
let armorAttributes = [];
let ATTRIBUTE_JSON_PATH = "config/QualityTools.json";
let suffixMap = {
    helmet: "h",
    chestplate: "c",
    leggings: "l",
    boots: "b"
};
let equipmentMap = {
    HEAD: "helmet",
    CHEST: "chestplate",
    LEGS: "leggings",
    FEET: "boots"
};

/**
 * Capitalize the first letter of a string.
 *
 * @param {string} str 
 * @returns {string}
 */
global.capitalize = (str) => {
    return str.toString().slice(0, 1).toUpperCase() + str.toString().slice(1);
}
function initializePersistentData(player, key, defaultValue) {
    if (!player.persistentData.contains(key) || player.persistentData.getString(key) === "") {
        player.persistentData.putString(key, JSON.stringify(defaultValue));
    }
}
function parsePersistentData(player, key) {
    try {
        let jsonString = player.persistentData.getString(key);
        return jsonString ? JSON.parse(jsonString) : {};
    } catch (error) {
        console.error(`[ERROR] Failed to parse persistent data for key '${key}': ` + error);
        return {};
    }
}
/**
 * 
 * @param {Internal.PlayerEvent$BreakSpeed} event 
 */
global.break = event => {
    try {
        let { entity, originalSpeed } = event;
        let attributeSpeed = entity.getAttributeTotalValue("qualitytools:break_speed")
        let nSpeed = originalSpeed * (1 + (attributeSpeed * 10));
        event.setNewSpeed(nSpeed);
        // console.log(`[DEBUG] Break speed: ${nSpeed}/${event.newSpeed} (Original: ${originalSpeed}, Attribute: ${attributeSpeed})`);
    } catch (error) {
        console.error(`[ERROR in break]: ${error}`);
    }
};

/**
 * 
 * @param {Internal.Player} entity 
 * @returns 
 */
global.tick = entity => {
    /* if (entity.age % 20 !== 0) return;
    try {
    } catch (error) {
        console.log(error);
    } */
};

let MobEffects = Java.loadClass("net.minecraft.world.effect.MobEffects")
/**
 * Adjusts the player's jump power based on custom attributes and effects.
 * @param {Internal.Player} entity The player entity.
 * @returns {number} The total jump boost factor.
 */
global.setBlockJumpFactor = entity => {
    try {
        let effectJumpBoost = entity.hasEffect(MobEffects.JUMP)
            ? 0.1 * (entity.getEffect(MobEffects.JUMP).getAmplifier() + 1.0)
            : 0.0;
        let jumpPowerAttribute = entity.getAttributeTotalValue("qualitytools:jump_power")
        let attributeJumpBoost = (jumpPowerAttribute / 0.5) * 0.08;
        return effectJumpBoost + attributeJumpBoost;
    } catch (error) {
        console.error(`[ERROR in setBlockJumpFactor]:` + error);
        let fallbackJumpBoost = entity.hasEffect(MobEffects.JUMP)
            ? 0.1 * (entity.getEffect(MobEffects.JUMP).getAmplifier() + 1.0)
            : 0.0;
        return fallbackJumpBoost;
    }
};

function processModifiersToPersistentData(attribute, equipement, suffix, to, from, modifiersMap, modifierType, attributeField) {
    let attributeKey = `${global.capitalize(attribute.id.toLowerCase())}${suffix}`;
    let baseModifierKey = `${attribute.id.toLowerCase()}_${modifierType}`;
    let equipmentModifierKey = `${baseModifierKey}_${equipement}`;
    if (to && global.getAttributeValue(to, attributeKey) && attribute[attributeField]) {
        if (!modifiersMap[equipmentModifierKey]) {
            modifiersMap[equipmentModifierKey] = {
                damage_types: attribute[attributeField].damage_types,
                modifier: { value: 0, operation: attribute[attributeField].modifier.operation },
            };
        }
        modifiersMap[equipmentModifierKey].modifier.value += attribute[attributeField].modifier.value;
    }
    if (from && global.getAttributeValue(from, attributeKey) && attribute[attributeField]) {
        if (modifiersMap[equipmentModifierKey]) {
            modifiersMap[equipmentModifierKey].modifier.value -= attribute[attributeField].modifier.value;
            if (modifiersMap[equipmentModifierKey].modifier.value <= 0) {
                delete modifiersMap[equipmentModifierKey];
            }
        }
    }
}
/**
 * Processes modifiers for Curios items.
 * 
 * @param {object} attribute - The attribute configuration.
 * @param {number} count - The count of matching Curios items.
 * @param {object} modifiersMap - The map to store modifiers.
 * @param {string} modifierType - The type of modifier ("taken" or "dealt").
 * @param {string} attributeField - The field in the attribute configuration for modifiers.
 */
function processCurioModifiers(attribute, count, modifiersMap, modifierType, attributeField) {
    let baseModifierKey = `${attribute.id.toLowerCase()}_${modifierType}`;

    if (count > 0 && attribute[attributeField]) {
        if (!modifiersMap[baseModifierKey]) {
            modifiersMap[baseModifierKey] = {
                damage_types: attribute[attributeField].damage_types,
                modifier: { value: 0, operation: attribute[attributeField].modifier.operation },
            };
        }
        modifiersMap[baseModifierKey].modifier.value += attribute[attributeField].modifier.value * count;
    } else if (modifiersMap[baseModifierKey]) {
        delete modifiersMap[baseModifierKey];
    }
}


function cleanupInvalidPlayerAttributes(playerAttributesMap, armorAttributes, player) {
    let validAttributesMap = {};
    armorAttributes.forEach(attribute => {
        let attrName = attribute.id.toLowerCase();
        (attribute.attributes || []).forEach(attr => {
            let identifier = `${attrName}_${attr.identifier}_${attr.attribute}_${attr.operation}`;
            validAttributesMap[identifier] = {
                attribute: attr.attribute,
                operation: attr.operation,
            };
        });
    });
    Object.keys(playerAttributesMap).forEach(identifier => {
        let attributeData = playerAttributesMap[identifier];
        let validData = validAttributesMap[identifier];

        if (!attributeData) {
            return;
        }
        if (!validData) {
            player.removeAttribute(attributeData.attribute, identifier);
            delete playerAttributesMap[identifier];
            return;
        }
        if (
            attributeData.attribute !== validData.attribute ||
            attributeData.operation !== validData.operation
        ) {
            player.removeAttribute(attributeData.attribute, identifier);
            delete playerAttributesMap[identifier];
        }
    });
    Object.keys(playerAttributesMap).forEach(identifier => {
        if (!validAttributesMap[identifier]) {
            player.removeAttribute(playerAttributesMap[identifier].attribute, identifier);
            delete playerAttributesMap[identifier];
        }
    });
}


function cleanupInvalidModifiers(modifiersMap, modifierType, equipement) {
    let baseKeys = Array.from(new Set(Object.keys(modifiersMap).map(key => key.split('_')[0] + `_${modifierType}`)));
    baseKeys.forEach(baseKey => {
        let isValid = armorAttributes.some(attribute => {
            let attributeField = modifierType === "taken" ? "modify_damage_taken" : "modify_damage_dealt";
            return (
                baseKey === `${attribute.id.toLowerCase()}_${modifierType}` &&
                attribute[attributeField] &&
                attribute[attributeField].damage_types
            );
        });
        if (!isValid) {
            Object.keys(modifiersMap).forEach(key => {
                if (key.startsWith(baseKey)) {
                    delete modifiersMap[key];
                }
            });
        }
    });

}
function processDamageModifiers(event, modifiersMap) {
    let { source, amount } = event;
    let finalAmount = amount;
    let groupedModifiers = {};
    Object.entries(modifiersMap).forEach(([key, modifier]) => {
        let baseKey = key.split('_')[0] + '_dealt';
        if (!groupedModifiers[baseKey]) {
            groupedModifiers[baseKey] = { damage_types: modifier.damage_types, value: 0, operation: modifier.modifier.operation };
        }
        groupedModifiers[baseKey].value += modifier.modifier.value;
    });
    Object.values(groupedModifiers).forEach((modifier, index) => {
        let appliesToAllDamageTypes = !modifier.damage_types || !Array.isArray(modifier.damage_types);
        if (appliesToAllDamageTypes || modifier.damage_types.includes(source.getType())) {
            if (modifier.operation === "multiply_base") {
                let multipliedValue = amount * modifier.value;
                finalAmount += multipliedValue;
            } else if (modifier.operation === "addition") {
                finalAmount += modifier.value;
            }
        }
    });
    event.setAmount(finalAmount);
}


/**
 * Applies damage dealt modifiers to the event.
 * 
 * @param {Internal.LivingHurtEvent} event 
 * @param {Player} player 
 */
global.applyDamageDealtModifiers = (event, player) => {
    try {
        let damageDealtModifiersMap = {};
        if (player.persistentData.contains("PlayerDamageDealtModifiers")) {
            let equipmentModifiers = JSON.parse(player.persistentData.getString("PlayerDamageDealtModifiers"));
            Object.assign(damageDealtModifiersMap, equipmentModifiers);
        }
        if (player.persistentData.contains("CuriosDamageDealtModifiers")) {
            let curiosModifiers = JSON.parse(player.persistentData.getString("CuriosDamageDealtModifiers"));
            Object.assign(damageDealtModifiersMap, curiosModifiers);
        }
        processDamageModifiers(event, damageDealtModifiersMap);
    } catch (error) {
        console.error(`[ERROR in applyDamageDealtModifiers]: ` + error);
    }
};

/**
 * Applies damage received modifiers to the event.
 * 
 * @param {Internal.LivingHurtEvent} event 
 */
global.applyDamageModifiers = event => {
    try {
        let { entity } = event;
        let damageModifiersMap = {};
        if (entity.persistentData.contains("PlayerDamageModifiers")) {
            let equipmentModifiers = JSON.parse(entity.persistentData.getString("PlayerDamageModifiers"));
            Object.assign(damageModifiersMap, equipmentModifiers);
        }
        if (entity.persistentData.contains("CuriosDamageModifiers")) {
            let curiosModifiers = JSON.parse(entity.persistentData.getString("CuriosDamageModifiers"));
            Object.assign(damageModifiersMap, curiosModifiers);
        }
        processDamageModifiers(event, damageModifiersMap);
    } catch (error) {
        console.error(`[ERROR in applyDamageModifiers]: ` + error);
    }
};
/**
 * 
 * @param {Internal.LivingHurtEvent} event 
 * @returns 
 */
global.livingHurt = event => {
    let { entity, source } = event;
    global.elfLogic(event);
    if (entity.isPlayer()) {
        global.applyDamageModifiers(event);
    }
    if (source.actual && source.actual.isPlayer()) {
        global.applyDamageDealtModifiers(event, source.actual);
    }
};

global.elfLogic = event => {
    let { entity, source, amount } = event;
    let attacker = source.actual;
    let entityCurios = entity.nbt.ForgeCaps['curios:inventory'].toString();
    let attackerCurios = attacker ? attacker.nbt.ForgeCaps['curios:inventory'].toString() : "";
    if (attacker && (attacker.hasEffect("kubejs:true_shot") || attackerCurios.includes("kubejs:elf_ring")) && source.getType() === "arrow") {
        event.setAmount(amount + 8);
    }
    if (entityCurios.includes("kubejs:elf_ring") && ["inFire", "onFire", "lava"].includes(source.getType())) {
        event.setAmount(amount + (amount * 0.5));
    }
}


/**
 * Get the NBT boolean of the item stack.
 * 
 * @param {Internal.ItemStack} itemstack 
 * @param {string} attribute 
 * @returns {boolean} True if the attribute exists in the item's NBT; otherwise, false.
 */
global.getAttributeValue = (itemstack, attribute) => {
    if (!itemstack) {
        return false;
    }
    if (!itemstack.nbt) {
        return false;
    }
    let hasAttribute = itemstack.nbt.getBoolean(attribute);
    return hasAttribute;
};


/*
  slotAttributes[slot].forEach(attribute => {
            let baseAttribute = attribute.replace(/h$|c$|l$|b$/, "");
            let equippedValue = global.getAttributeValue(event.to, global.capitalize(attribute));
            if (equippedValue) {
                global.grantPower(event.entity, `qualitytools: qualitytools / equippedarmor / ${ equipement }/${baseAttribute}`)
    }
        });
slotAttributes[slot].forEach(attribute => {
    let baseAttribute = attribute.replace(/h$|c$|l$|b$/, "");
    let removedValue = global.getAttributeValue(event.from, global.capitalize(attribute));
    if (removedValue) {
        global.revokePower(event.entity, `qualitytools:qualitytools/equippedarmor/${equipement}/${baseAttribute}`)
    }
});
 */
/**
 * Prevent equipping multiple race rings simultaneously
 * @param {Internal.CurioEquipEvent} event 
 */
global.curiosprevent = event => {
    let { stack, entity } = event;
    let raceRings = [
        'kubejs:dragon_ring',
        'kubejs:ring_of_faeles',
        'kubejs:fairy_ring',
        'kubejs:lightning_dragon_ring',
        'kubejs:ocean_dragon_ring',
        'kubejs:titan_ring',
        'kubejs:elf_ring',
    ];
    try {
        let curios = entity.nbt.ForgeCaps['curios:inventory'];
        if (raceRings.includes(stack.id)) {
            for (let ring of raceRings) {
                if (curios.toString().contains(ring)) {
                    event.setResult("deny");
                    return;
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};




/**
 * 
 * @param {Internal.Player} entity 
 */
global.gravescroll = (entity) => {
    let pData = entity.persistentData;
    if (pData.deathreset !== 1) return;
    pData.deathreset = 0;
    let scrollItem = ['main_hand', 'off_hand']
        .map(hand => entity.getHeldItem(hand))
        .find(item => item.id === 'kubejs:grave_scroll');
    if (!scrollItem) return;
    let dimension = pData.deathdimension;
    if (dimension) {
        entity.teleportTo(dimension, pData.deathx, pData.deathy, pData.deathz, entity.yaw, entity.pitch)
        if (!entity.isCreative()) {
            scrollItem.count--;
        }
    }
};

/**
 * 
 * @param {Internal.Player} entity 
 */
global.recall = entity => {
    try {
        let player = entity;
        if (player.level.clientSide) return
        let respawnPos = player.getRespawnPosition()
        let dim = player.getRespawnDimension().location();
        let recallItem = ['main_hand', 'off_hand']
            .map(hand => entity.getHeldItem(hand))
            .find(item => item.id === 'kubejs:recall_potion');
        if (!recallItem) return;
        if (respawnPos != null) {
            player.teleportTo(dim, respawnPos.x, respawnPos.y, respawnPos.z, player.yaw, player.pitch)
            player.level.server.runCommandSilent(`execute as ${player.username} run playsound minecraft:teleport ambient @s ${player.x} ${player.y} ${player.z} 1 1`);
            if (!player.isCreative()) {
                recallItem.count--;
            }
        }
    } catch (error) {
        console.log(error);
    }
};
/**
 * 
 * @param {Internal.Player} entity 
 * @returns 
 */
global.wine = entity => {
    entity.activeEffects.forEach(effect => {
        if (effect.amplifier < 2) {
            let nbt = effect.save({});
            nbt.Amplifier = NBT.b(nbt.Amplifier + 1);
            let newInstance = effect.load(nbt);
            entity.forceAddEffect(newInstance, entity);
        }
    });
    let wineItem = ['main_hand', 'off_hand']
        .map(hand => entity.getHeldItem(hand))
        .find(item => item.id === 'kubejs:wildberry_wine');
    if (!wineItem) return;
    if (!entity.isCreative()) {
        wineItem.count--;
        entity.give('glass_bottle');
    }
};



/**
 * Grant powers for the specified ability and revoke all levels above the count.
 *
 * @param {Internal.Player} player 
 * @param {string} ability 
 * @param {number} level 
 */
global.grantPowers = (player, ability, level) => {
    for (let i = 1; i <= 7; i++) {
        global.revokePower(player, `qualitytools:qualitytools/${ability}/${ability}${i}`)
    }
    if (level > 0 && level <= 7) {
        global.grantPower(player, `qualitytools:qualitytools/${ability}/${ability}${level}`)
    }
}

let CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi");


/**
 * 
 * @param {Internal.Player} player 
 */
global.reloadAttributes = player => {
    try {
        if (!player.isPlayer()) return
        initializePersistentData(player, "PlayerAttributes", {});
        initializePersistentData(player, "PlayerDamageModifiers", {});
        initializePersistentData(player, "PlayerDamageDealtModifiers", {});

        let playerAttributesMap = parsePersistentData(player, "PlayerAttributes");
        let playerDamageModifiersMap = parsePersistentData(player, "PlayerDamageModifiers");
        let playerDamageDealtModifiersMap = parsePersistentData(player, "PlayerDamageDealtModifiers");

        Object.keys(playerAttributesMap).forEach(uniqueKey => {
            let attributeData = playerAttributesMap[uniqueKey];
            player.removeAttribute(attributeData.attribute, uniqueKey);
        });
        playerAttributesMap = {};
        playerDamageModifiersMap = {};
        playerDamageDealtModifiersMap = {};

        Object.keys(equipmentMap).forEach(slotKey => {
            let equipement = equipmentMap[slotKey];
            let item = player.getEquipment(slotKey);

            if (!item || !item.nbt) return;

            armorAttributes.forEach(attribute => {
                let attrName = attribute.id.toLowerCase();
                if (!attribute.slot || !attribute.attributes) return;
                if (!attribute.slot.contains(equipement)) return;

                let suffix = suffixMap[equipement];

                processModifiersToPersistentData(
                    attribute,
                    equipement,
                    suffix,
                    item,
                    null,
                    playerDamageModifiersMap,
                    "taken",
                    "modify_damage_taken"
                );
                processModifiersToPersistentData(
                    attribute,
                    equipement,
                    suffix,
                    item,
                    null,
                    playerDamageDealtModifiersMap,
                    "dealt",
                    "modify_damage_dealt"
                );

                attribute.attributes.forEach(attr => {
                    let uniqueKey = `${attrName}_${attr.identifier}_${attr.attribute}_${attr.operation}`;
                    if (!playerAttributesMap[uniqueKey]) {
                        playerAttributesMap[uniqueKey] = {
                            identifier: attr.identifier,
                            attribute: attr.attribute,
                            value: 0,
                            operation: attr.operation,
                        };
                    }

                    if (global.getAttributeValue(item, `${global.capitalize(attribute.id.toLowerCase())}${suffix}`)) {
                        playerAttributesMap[uniqueKey].value += attr.value;
                        player.modifyAttribute(
                            attr.attribute,
                            uniqueKey,
                            playerAttributesMap[uniqueKey].value,
                            attr.operation
                        );
                    }
                });
            });
        });

        /* cleanupInvalidModifiers(playerDamageModifiersMap, "taken", null);
        cleanupInvalidModifiers(playerDamageDealtModifiersMap, "dealt", null);
        cleanupInvalidPlayerAttributes(playerAttributesMap, armorAttributes, player);
 */
        player.persistentData.putString("PlayerAttributes", JSON.stringify(playerAttributesMap));
        player.persistentData.putString("PlayerDamageModifiers", JSON.stringify(playerDamageModifiersMap));
        player.persistentData.putString("PlayerDamageDealtModifiers", JSON.stringify(playerDamageDealtModifiersMap));

    } catch (error) {
        console.error(`[ERROR in reloadAttributes]: ${error}`);
    }
};



/**
 * 
 * @param {Internal.AddReloadListenerEvent} event 
 */
global.reload = () => {
    try {
        console.log("Reloading QualityTools attributes...");
        curiosAttributes = []
        armorAttributes = []
        let data = JsonIO.read(ATTRIBUTE_JSON_PATH);
        if (data && data.Curios) {
            data.Curios
                .forEach(attr => {
                    curiosAttributes.push(attr)
                });
        }
        if (data && data.Armor) {
            data.Armor
                .forEach(attr => {
                    armorAttributes.push(attr)
                });
        }
        Utils.server.sendData("clientReload")
        Utils.server.getPlayers().forEach(player => {
            global.reloadAttributes(player)
            global.updateCuriosPowers(player)
        })
    } catch (error) {
        console.log(error)
    }
}
global.reload()

/**
 * Updates the Curios-based powers for the given entity.
 * @param {Internal.LivingEntity} entity 
 */
global.updateCuriosPowers = entity => {
    try {
        initializePersistentData(entity, "CuriosAttributes", {});
        initializePersistentData(entity, "CuriosDamageModifiers", {});
        initializePersistentData(entity, "CuriosDamageDealtModifiers", {});

        let curiosAttributesMap = parsePersistentData(entity, "CuriosAttributes");
        let curiosDamageModifiersMap = parsePersistentData(entity, "CuriosDamageModifiers");
        let curiosDamageDealtModifiersMap = parsePersistentData(entity, "CuriosDamageDealtModifiers");

        Object.keys(curiosAttributesMap).forEach(uniqueKey => {
            let attributeData = curiosAttributesMap[uniqueKey];
            entity.removeAttribute(attributeData.attribute, uniqueKey);
        });
        curiosAttributesMap = {};
        curiosDamageModifiersMap = {};
        curiosDamageDealtModifiersMap = {};
        curiosAttributes.forEach(a => {
            let attrName = a.id.toLowerCase();
            let count = global.getCurioAttributeCount(entity, attrName);
            if (count > 0) {
                if (!a.attributes) {
                    return;
                }
                processCurioModifiers(a, count, curiosDamageModifiersMap, "taken", "modify_damage_taken");
                processCurioModifiers(a, count, curiosDamageDealtModifiersMap, "dealt", "modify_damage_dealt");

                a.attributes.forEach(attr => {
                    let uniqueKey = `${attrName}_${attr.identifier}_${attr.attribute}_${attr.operation}_Curios`;
                    if (!curiosAttributesMap[uniqueKey]) {
                        curiosAttributesMap[uniqueKey] = {
                            identifier: attr.identifier,
                            attribute: attr.attribute,
                            value: 0,
                            operation: attr.operation,
                        };
                    }

                    curiosAttributesMap[uniqueKey].value += attr.value * count;
                    entity.modifyAttribute(
                        attr.attribute,
                        uniqueKey,
                        curiosAttributesMap[uniqueKey].value,
                        attr.operation
                    );
                });
            }
        });
        entity.persistentData.putString("CuriosAttributes", JSON.stringify(curiosAttributesMap));
        entity.persistentData.putString("CuriosDamageModifiers", JSON.stringify(curiosDamageModifiersMap));
        entity.persistentData.putString("CuriosDamageDealtModifiers", JSON.stringify(curiosDamageDealtModifiersMap));
    } catch (error) {
        console.error(error);
    }
};




/**
 * Count items in Curios inventory that have the specified attribute.
 *
 * @param {Internal.LivingEntity} entity 
 * @param {string} attribute 
 * @returns {number}
 */
global.getCurioAttributeCount = (entity, attribute) => {
    try {
        let curiosHandler = CuriosApi.getCuriosInventory(entity).orElse(null);
        if (!curiosHandler) {
            return 0;
        }

        let count = 0;
        curiosHandler.equippedCurios.allItems.forEach(stack => {
            if (stack && stack.nbt && stack.nbt.getBoolean(global.capitalize(attribute))) {
                count++;
            }
        });
        return count;
    } catch (error) {
        console.log(`Error counting attribute '${attribute}' in Curios inventory: ${error}`);
        return 0;
    }
}

global.mobEffectsEvent = event => {
//Help i dont know how to slap the below scope here
};

MobEffectEvents.applicable((event) => {
    // Check if the entity is a player
    if (!event.entity.isPlayer()) return;

    const player = event.entity;

    // Define the list of mob effects to block
    const immuneEffects = [
        'minecraft:poison',
        'minecraft:wither',
        'minecraft:blindness',
        'minecraft:weakness',
        'minecraft:hunger'
    ];

    // Check if the effect being applied is in the immune list
    if (immuneEffects.includes(event.effect)) {
        // Check if the player has the "kubejs:cure" effect
        if (player.hasEffect('kubejs:cure')) {
            // Deny the effect from being applied
            event.setResult(EventResult.DENY);
        }
    }
});
