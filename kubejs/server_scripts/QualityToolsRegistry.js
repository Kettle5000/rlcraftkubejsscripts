// priority: 1000

/**
 * MATERIALS List
 *
 * Defines the materials used for the reforging process. Each material entry specifies the item tag, 
 * the required inventory item, and a display name for use in the reforging station.
 *
 * @type {Array<Object>}
 * @property {string} tag - The tag identifying compatible items (e.g., 'forge:armor/gold').
 * @property {string} indexItem - The required item ID for reforging (e.g., 'gold_ingot').
 * @property {string} name - The display name of the material (e.g., 'Gold Ingot').
 *
 * How to Add a Material:
 * ----------------------
 * Add an object to the list with the following properties:
 * - `tag`: The tag corresponding to the item category (e.g., 'forge:armor/silver').
 * - `indexItem`: The item players need to have for reforging (e.g., 'silver_ingot').
 * - `name`: The user-friendly name of the material.
 *
 * Example:
 * { tag: 'forge:armor/silver', indexItem: 'silver_ingot', name: 'Silver Ingot' }
 */
global.MATERIALS = [
    // Armor
    { tag: 'forge:armor/gold', indexItem: 'gold_ingot', name: 'Gold Ingot' },
    { tag: 'forge:armor/iron', indexItem: 'iron_ingot', name: 'Iron Ingot' },
    { tag: 'forge:armor/diamond', indexItem: 'diamond', name: 'Diamond' },
    { tag: 'forge:armor/chain', indexItem: 'minecraft:iron_ingot', name: 'Forged Mesh' },
    { tag: 'forge:armor/frost', indexItem: 'packed_ice', name: 'Packed Ice' },
    { tag: 'forge:armor/netherite', indexItem: 'netherite_scrap', name: 'Netherite Scrap' },
    { tag: 'forge:armor/copper', indexItem: 'minecraft:copper_ingot', name: 'Copper Ingot' },
    { tag: 'forge:armor/steel', indexItem: 'magistuarmory:steel_ingot', name: 'Steel Ingot' },
    { tag: 'forge:armor/neptunium', indexItem: 'aquaculture:neptunium_ingot', name: 'Neptunium Ingot' },
    { tag: 'forge:armor/phantom_membrane', indexItem: 'minecraft:phantom_membrane', name: 'Phantom Membrane' },
    { tag: 'forge:armor/leather', indexItem: 'minecraft:leather', name: 'Leather' },
    { tag: 'forge:armor/bone', indexItem: 'minecraft:bone', name: 'Bone' },
    { tag: 'forge:armor/scute', indexItem: 'minecraft:scute', name: 'Scute' },
    { tag: 'forge:armor/bronze', indexItem: 'mekanism:ingot_bronze', name: 'Bronze Ingot' },

    // Tools
    { tag: "forge:tools/diamond", indexItem: "minecraft:diamond", name: "Diamond" },
    { tag: "forge:tools/iron", indexItem: "minecraft:iron_ingot", name: "Iron Ingot" },
    { tag: "forge:tools/gold", indexItem: "minecraft:gold_ingot", name: "Gold Ingot" },
    { tag: "forge:tools/wooden", indexItem: "minecraft:stick", name: "Stick" },
    { tag: "forge:tools/stone", indexItem: "minecraft:stone", name: "Stone" },
    { tag: "forge:tools/netherite", indexItem: "minecraft:netherite_scrap", name: "Netherite Scrap" },
    { tag: "forge:tools/silver", indexItem: "ice_and_fire:silver_ingot", name: "Silver Ingot" },
    { tag: "forge:tools/steel", indexItem: "magistuarmory:steel_ingot", name: "Steel Ingot" },
    { tag: "forge:tools/neptunium", indexItem: "aquaculture:neptunium_ingot", name: "Neptunium Ingot" },
    { tag: "forge:tools/nether_star", indexItem: "forge:nether_stars", name: "Nether Star" },
    { tag: "forge:tools/bone", indexItem: "minecraft:bone", name: "Bone" },
    { tag: "forge:tools/flint", indexItem: "minecraft:flint", name: "Flint" },
    { tag: "forge:tools/bronze", indexItem: "#forge:ingots/bronze", name: "Bronze Ingot" },
    { tag: "forge:tools/copper", indexItem: "minecraft:copper_ingot", name: "Copper Ingot" },

    // Curios
    { tag: 'kubejs:trinkets_leather', indexItem: 'minecraft:leather', name: 'Leather' },
    { tag: 'kubejs:trinkets_iron', indexItem: 'minecraft:iron_ingot', name: 'Iron Ingot' },
    { tag: 'kubejs:trinkets_gold', indexItem: 'minecraft:gold_ingot', name: 'Gold Ingot' },
    { tag: 'kubejs:trinkets_diamond', indexItem: '#forge:gems/diamond', name: 'Diamond' },
    { tag: 'kubejs:trinkets_netherite', indexItem: 'minecraft:netherite_scrap', name: 'Netherite Scrap' },
    { tag: 'kubejs:trinkets_glowing_ingot', indexItem: 'kubejs:glowing_ingot', name: 'Glowing Ingot' },
    { tag: 'kubejs:trinkets_spectral_silt', indexItem: 'kubejs:spectral_silt', name: 'Spectral Silt' },
    { tag: 'kubejs:trinkets_unspecified', indexItem: 'minecraft:nether_star', name: 'Nether Star' },
];
/**
 * Global default attribute list for reforging logic.
 *
 * This object contains default attributes grouped into sections (Armor, Tools, Curios). Each attribute
 * specifies its name, applicable slots, display color, and weight for selection. This global list is used
 * to generate a configuration JSON file (`QualityTools.json`) if it is missing in the `config` directory.
 * 
 * - **Armor**: Attributes applicable to helmets, chestplates, leggings, and boots.
 * - **Tools**: Attributes applicable to tools such as pickaxes, shovels, and axes.
 * - **Curios**: Attributes applicable to trinkets or accessory items.
 *
 * If the JSON file already exists, this list is ignored, and the attributes from the JSON file are loaded 
 * into `global.ATTRIBUTE_LIST`.
 *
 * Structure of each attribute:
 * - `name`: The attribute's name (e.g., "Arcane").
 * - `slot`: The applicable equipment slots (e.g., ["helmet", "chestplate"]).
 * - `color`: Display color for the attribute (e.g., "blue").
 * - `weight`: The relative chance of this attribute being selected.
 *
 * Example:
 * ```json
 * {
 *   "Armor": [
 *     {
 *       "id": "Arcane",
 *       "slot": ["helmet", "chestplate", "leggings", "boots"],
 *       "color": "blue",
 *       "weight": 10
 *     }
 *   ],
 *   "Tools": [],
 *   "Curios": []
 * }
 * ```
 */
global.ATTRIBUTE_LIST = {
    Armor: [
        { id: "Normal", slot: ["helmet", "chestplate", "leggings", "boots"], color: "white", weight: 30 },
        {
            displayname: "Arcane",
            id: "Arcane",
            slot: ["helmet", "chestplate", "leggings", "boots"],
            color: "blue",
            weight: 10,
            modify_damage_taken: {
                damage_types: [
                    "magic",
                    "indirectMagic",
                    "indirectMagic.item",
                    "sonic_boom",
                    "sonic_boom.player",
                    "sonic_boom.item",
                    "thorns",
                    "thorns.item",
                    "witherSkull"
                ],
                modifier: {
                    operation: "multiply_base",
                    value: -0.04
                }
            },
            tooltipEnabled: true,
            tooltips: [
                {
                    tooltip: [
                        [
                            {
                                text: "+1 Magic Shielding",
                                color: "blue"
                            }
                        ]
                    ]
                }
            ]
        },
        { id: "Crumbling", slot: ["helmet", "chestplate", "leggings", "boots"], color: "dark_red", weight: 8 },
        { id: "Dented", slot: ["helmet", "chestplate", "leggings", "boots"], color: "dark_gray", weight: 10 },
        { id: "Heavy", slot: ["helmet", "chestplate", "leggings", "boots"], color: "red", weight: 10 },
        { id: "Masterful", slot: ["helmet", "chestplate", "leggings", "boots"], color: "light_purple", weight: 5 },
        { id: "Protective", slot: ["helmet", "chestplate", "leggings", "boots"], color: "blue", weight: 10 },
        { id: "Lucky", slot: ["helmet"], color: "blue", weight: 10 },
        { id: "Solid", slot: ["chestplate"], color: "blue", weight: 10 },
        { id: "Cumbersome", slot: ["chestplate"], color: "dark_gray", weight: 10 },
        { id: "Springy", slot: ["leggings"], color: "blue", weight: 10 },
        { id: "Speedy", slot: ["boots"], color: "blue", weight: 10 },
        { id: "Tall", slot: ["boots"], color: "blue", weight: 10 },
        { id: "Thick", slot: ["helmet", "chestplate", "leggings", "boots"], color: "yellow", weight: 10 },
        { id: "Tough", slot: ["helmet", "chestplate", "leggings", "boots"], color: "blue", weight: 10 },
    ],
    Tools: [
        { id: "Worthless", color: "dark_red", weight: 10 },
        { id: "Broken", color: "gray", weight: 10 },
        { id: "Bulky", color: "gray", weight: 10 },
        { id: "Rusted", color: "red", weight: 10 },
        { id: "Clumsy", color: "red", weight: 10 },
        { id: "Chipped", color: "red", weight: 10 },
        { id: "Short", color: "red", weight: 10 },
        { id: "Broad", color: "yellow", weight: 10 },
        { id: "Thin", color: "yellow", weight: 10 },
        { id: "Pokey", color: "yellow", weight: 10 },
        { id: "Vicious", color: "yellow", weight: 10 },
        { id: "Long", color: "blue", weight: 10 },
        { id: "Sharp", color: "blue", weight: 10 },
        { id: "Keen", color: "blue", weight: 10 },
        { id: "Elegant", color: "aqua", weight: 10 },
        { id: "Sweeping", color: "aqua", weight: 10 },
        { id: "Legendary", color: "light_purple", weight: 5 },
    ],
    Curios: [
        { id: "Horrible", color: "dark_gray", weight: 10 },
        { id: "Clunky", color: "blue", weight: 10 },
        { id: "Unlucky", color: "blue", weight: 10 },
        { id: "Lucky", color: "blue", weight: 10 },
        { id: "Healthy", color: "blue", weight: 10 },
        { id: "Armored", color: "blue", weight: 10 },
        { id: "Speedy", color: "blue", weight: 10 },
        { id: "Springy", color: "blue", weight: 10 },
        { id: "Prospecting", color: "blue", weight: 10 },
        { id: "Flailing", color: "blue", weight: 10 },
        { id: "Shielding", color: "blue", weight: 10 },
        { id: "Focusing", color: "blue", weight: 10 },
        { id: "Aiming", color: "blue", weight: 10 },
        { id: "Strengthening", color: "blue", weight: 10 },
        { id: "Graceful", color: "aqua", weight: 10 },
        { id: "Athletic", color: "aqua", weight: 10 },
        { id: "Punishing", color: "light_purple", weight: 5 },
        { id: "Arcane", color: "light_purple", weight: 5 },
        { id: "Undying", color: "light_purple", weight: 5 },
    ],
};


let ATTRIBUTE_JSON_PATH = "config/QualityTools.json";
let data = {};
/**
 * 
 * @param {Internal.AddReloadListenerEvent} event 
 */
global.reloadServer = event => {
    try {
        loadOrGenerateAttributes();
    } catch (error) {
        console.log(error)
    }
}
/**
 * Load or generate attributes and update `data` and `global.ATTRIBUTE_LIST`.
 */
function loadOrGenerateAttributes() {
    let data = JsonIO.read(ATTRIBUTE_JSON_PATH);
    if (!data || Object.keys(data).length === 0) {
        console.log("No valid JSON data found. Generating default attributes...");
        let attributeObject = {
            Armor: [],
            Tools: [],
            Curios: [],
        };
        Object.keys(global.ATTRIBUTE_LIST).forEach(section => {
            if (Array.isArray(global.ATTRIBUTE_LIST[section])) {
                global.ATTRIBUTE_LIST[section].forEach(attr => {
                    attributeObject[section].push(attr);
                });
            }
        });

        JsonIO.write(ATTRIBUTE_JSON_PATH, attributeObject);
        global.ATTRIBUTE_LIST = attributeObject;
        return;
    }
    let attributeObject = {
        Armor: [],
        Tools: [],
        Curios: [],
    };
    Object.keys(data).forEach(section => {
        if (Array.isArray(data[section])) {
            data[section].forEach(attr => {
                attributeObject[section].push(attr);
            });
        }
    });

    global.ATTRIBUTE_LIST = attributeObject;
}


let EQUIPMENT_TAGS = {
    'forge:helmets': 'helmet',
    'forge:chestplates': 'chestplate',
    'forge:boots': 'boots',
    'forge:leggings': 'leggings',
    'kubejs:tool_reforge': 'tool',
    'kubejs:trinkets': 'curios',
};

/** Reforge an unforged item when it enters the player's inventory */
PlayerEvents.tick(event => handleInventoryReforge(event.player));

/** Reforging Logic With Reforging Station */
BlockEvents.leftClicked(event => {
    let air = event.player.getMainHandItem().id == 'minecraft:air'
    let mainHandItem = event.player.getMainHandItem()
    if ((event.block.id != 'kubejs:reforging_station' ||
        !(
            mainHandItem.hasTag("forge:armors") ||
            mainHandItem.hasTag("kubejs:trinkets")
        )
        || air)) return;
    checkMaterials(event.player)
    reforge(event.player, event.item, event)
})
BlockEvents.rightClicked(event => {
    let air = event.player.getMainHandItem().id == 'minecraft:air'
    let mainHandItem = event.player.getMainHandItem()
    if ((event.block.id != 'kubejs:reforging_station' ||
        !(
            mainHandItem.hasTag("forge:armors") ||
            mainHandItem.hasTag("kubejs:tool_reforge") ||
            mainHandItem.hasTag("kubejs:trinkets")
        )
        || air ||
        event.hand != "main_hand" ||
        event.player.isCrouching())) return
    checkMaterials(event.player)
    reforge(event.player, event.item, event)
})

function reforge(player, item, event) {
    for (let material of global.MATERIALS) {
        let index = player.inventory.find(Ingredient.of(material.indexItem));
        if (item.hasTag(material.tag) && player.inventory.allItems.some(item => Ingredient.of(material.indexItem).test(item))) {
            if (player.persistentData.TimeStall !== 0) {
                if (event != null) {
                    player.sendData('cancelblockevent');
                    event.cancel();
                    break;
                }
            }
            player.inventory.extractItem(index, 1, false);
            attributereforge(player);
            displayreforge(player);
            player.persistentData.TimeStall = 7;
            if (event != null) {
                player.sendData('cancelblockevent');
                event.cancel();
            }
            break;

        }
    }
}
function attributereforge(player) {
    let item = player.getHeldItem('main_hand');
    player.server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.anvil.use block @s ${player.x} ${player.y} ${player.z} 0.5 0.5`);
    if (item.hasTag('forge:helmets')) {
        item.nbt.merge(generateRandomAttributeList(Math.random(), "helmet"));
    } else if (item.hasTag('forge:chestplates')) {
        item.nbt.merge(generateRandomAttributeList(Math.random(), "chestplate"));
    } else if (item.hasTag('forge:boots')) {
        item.nbt.merge(generateRandomAttributeList(Math.random(), "boots"));
    } else if (item.hasTag('forge:leggings')) {
        item.nbt.merge(generateRandomAttributeList(Math.random(), "leggings"));
    } else if (item.hasTag('kubejs:tool_reforge')) {
        item.nbt.merge(generateRandomAttributeList(Math.random(), "tool"));
    } else if (item.hasTag('kubejs:trinkets')) {
        item.nbt.merge(generateRandomAttributeList(Math.random(), "curios"));
    }
}
function displayreforge(player) {
    var item = player.getHeldItem('main_hand');
    if (!item || !item.nbt) return;

    var attributeMap = {};

    Object.keys(global.ATTRIBUTE_LIST).forEach(section => {
        global.ATTRIBUTE_LIST[section].forEach(attr => {
            var name = attr.id;
            var slots = attr.slot;
            var color = attr.color;

            if ((!slots || slots.length === 0) && (section === "Tools" || section === "Curios")) {
                attributeMap[name] = { type: name, color: color };
            } else {
                slots.forEach(function (slotKey) {
                    var suffixMap = {
                        helmet: "h",
                        chestplate: "c",
                        leggings: "l",
                        boots: "b",
                        tool: "tool",
                        curios: "curios"
                    };
                    var suffix = suffixMap[slotKey] || slotKey;
                    var key = !["helmet", "chestplate", "leggings", "boots"].includes(slotKey) ? name : name + suffix;
                    attributeMap[key] = { type: attr.displayname ? attr.displayname : name, color: color };
                });
            }
        });
    });

    var displayed = false;
    var isNormal = false;

    // Iterate over the item's NBT data
    Object.entries(item.nbt).forEach(function ([key, value]) {
        if (value === 1 && attributeMap[key]) {
            var { type, color } = attributeMap[key];
            actionbar(player.username, type, color, true, false);
            displayed = true;
            if (type === "Normal") {
                isNormal = true;
            }
        }
    });

    // Display default message if no attributes are displayed or the item is "Normal"
    if (!displayed || isNormal) {
        actionbar(player.username, "Your fingers fumble and you smash your thumb", "red", true, false);
    }
}


/**
 * Helper Function to create Actionbar Titles
 * @param {string} - username
 * @param {string} - text
 * @param {string} - color
 * @param {boolean} - bold
 * @param {boolean} - italic
 */
function actionbar(username, text, color, bold, italic) {
    Utils.server.runCommandSilent(
        `title ${username} actionbar ${JSON.stringify({
            text: text,
            bold: bold ?? false,
            italic: italic ?? false,
            color: color ?? "yellow",
        })}`
    );
}
function generateRandomAttributeList(random, equipmentType) {
    let filteredAttributes = [];

    if (equipmentType === "tool") {
        filteredAttributes = global.ATTRIBUTE_LIST.Tools;
    } else if (equipmentType === "curios") {
        filteredAttributes = global.ATTRIBUTE_LIST.Curios;
    } else if (["helmet", "chestplate", "leggings", "boots"].includes(equipmentType)) {
        filteredAttributes = global.ATTRIBUTE_LIST.Armor.filter(attr =>
            attr.slot && attr.slot.contains(equipmentType)
        );
    }

    if (!filteredAttributes || filteredAttributes.length === 0) {
        return "{}";
    }

    let selectedAttribute = getChanceFromRandomWeight(random, filteredAttributes);
    if (!selectedAttribute) {
        return "{}";
    }

    let attributes = filteredAttributes.map(attr => {
        let attrName =
            ["helmet", "chestplate", "leggings", "boots"].includes(equipmentType)
                ? `${attr.id}${attr.id !== "Normal" ? equipmentType.charAt(0) : ""}`
                : attr.id;
        return `${attrName}:${attr.id === selectedAttribute.id ? 1 : 0}b`;
    });

    let output = `{
        ${attributes.join(",")},
        Reforged:1b${["helmet", "chestplate", "leggings", "boots"].includes(equipmentType) ? "," + capitalize(equipmentType) + ":1b" : ""}
    }`;
    return output;
}



/**
 * Selects an attribute based on random weight.
 *
 * @param {number} random - A random value between 0 and 1.
 * @param {Array} attributes - Array of attributes with weights.
 * @returns {Object|null} - The selected attribute or null if no attribute is selected.
 */
function getChanceFromRandomWeight(random, attributes) {
    if (!attributes || attributes.length === 0) {
        return null;
    }

    let totalWeight = attributes.reduce((sum, attr) => sum + attr.weight, 0);
    let randomWeight = random * totalWeight;

    let cumulativeWeight = 0;
    for (let attr of attributes) {
        cumulativeWeight += attr.weight;
        if (randomWeight <= cumulativeWeight) {
            return attr;
        }
    }
    return null;
}



function handleInventoryReforge(player) {
    if (player.age % 20 !== 0) return;
    player.inventory.items.forEach(item => {
        if (!item) return;
        for (let [tag, equipementType] of Object.entries(EQUIPMENT_TAGS)) {
            if (item.hasTag(tag)) {

                let attributes = generateRandomAttributeList(Math.random(), equipementType);
                if (item.hasNBT() && !item.nbt?.Reforged) {
                    item.nbt.merge(attributes);
                } else if (!item.hasNBT()) {
                    item.nbt = `${attributes}`;
                }
                break;
            }
        }
    });
}

function checkMaterials(player) {
    let item = player.getHeldItem('main_hand');
    global.MATERIALS.forEach(material => {
        if (item.hasTag(material.tag) && !player.inventory.allItems.some(Ingredient.of(material.indexItem))) {
            displayActionBarMessageForReforging(player, material.id);
        }
    });
}

function displayActionBarMessageForReforging(player, itemName) {
    let messageStart = "To Reforge You Must Have ";
    let messageEnd = " In Your Inventory";
    player.displayClientMessage(
        Component.of(messageStart)
            .color(Color.DARK_GREEN)
            .append(
                Component.of(itemName)
                    .color(Color.GOLD)
                    .italic()
            )
            .append(
                Component.of(messageEnd)
                    .color(Color.DARK_GREEN)
            ),
        true
    );
}



/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} str
 * @returns {string}
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


EntityEvents.death(event => resetData(event.entity))
PlayerEvents.loggedIn(event => resetData(event.entity))
function resetData(entity) {
    if (!entity.isPlayer()) return
    entity.persistentData.putString("CuriosAttributes", JSON.stringify({}));
    entity.persistentData.putString("CuriosDamageModifiers", JSON.stringify({}));
    entity.persistentData.putString("CuriosDamageDealtModifiers", JSON.stringify({}));
    entity.persistentData.putString("PlayerAttributes", JSON.stringify({}));
    entity.persistentData.putString("PlayerDamageModifiers", JSON.stringify({}));
    entity.persistentData.putString("PlayerDamageDealtModifiers", JSON.stringify({}));
}
let l = false
if (l) {
    StartupEvents.registry('entity_type', event => {
        event.create('meteor', "entityjs:geckolib_projectile")
            .onHitBlock(context => global.onHitBlock(context))
    })
    /**
     * 
     * @param {Internal.ContextUtils$ProjectileBlockHitContext} context 
     */
    global.onHitBlock = context => {
        try {
            const { entity, result } = context;
            entity.block.popItem("kubejs:meteor_fragment")
            entity.remove("discarded")
        } catch (error) {
            console.log(error)

        }
    }
}
