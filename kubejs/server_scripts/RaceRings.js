let RINGS = [
    {
        id: 'kubejs:dragon_ring',
        key: 'hasdragonring',
        maxMultiplier: 0.25,
        attribute: '-123924,5550,155221,-3120',
        origin: 'genesis:arcanite',
        tags: { add: [], remove: ['lightningdragon', 'oceandragon'] }
    },
    {
        id: 'kubejs:ring_of_faeles',
        key: 'hasfaelesring',
        maxMultiplier: -0.2,
        attribute: '-123924,5551,155221,-3120',
        origin: 'whiskers:elytratwo',
        tags: { add: [], remove: ['lightningdragon', 'oceandragon'] }
    },
    {
        id: 'kubejs:fairy_ring',
        key: 'hasfairyring',
        maxMultiplier: -0.75,
        attribute: '-123924,5552,155221,-3120',
        origin: 'fae:fae',
        tags: { add: [], remove: ['lightningdragon', 'oceandragon'] }
    },
    {
        id: 'kubejs:lightning_dragon_ring',
        key: 'haslightningdragonring',
        maxMultiplier: 0.25,
        attribute: '-123924,5553,155221,-3120',
        origin: 'genesis:lightningdragon',
        tags: { add: ['lightningdragon'], remove: ['oceandragon'] }
    },
    {
        id: 'kubejs:ocean_dragon_ring',
        key: 'hasoceandragonring',
        maxMultiplier: 0.25,
        attribute: '-123924,5554,155221,-3120',
        origin: 'genesis:oceandragon',
        tags: { add: ['oceandragon'], remove: ['lightningdragon'] }
    },
    {
        id: 'kubejs:titan_ring',
        key: 'hastitanring',
        maxMultiplier: 1.0,
        attribute: '-123924,5555,155221,-3120',
        origin: 'titan:titan',
        tags: { add: [], remove: ['lightningdragon', 'oceandragon'] }
    }
];
function calculateMaxHealth(maxHealth, multiplier) {
    return (maxHealth * multiplier).toFixed(0);
}
function processRings(player, curios, maxHealth, persistentData, server) {
    let hasAnyRing = false;

    RINGS.forEach(ring => {
        let hasRing = curios.includes(ring.id);
        let isRingActive = persistentData[ring.key] === 1;

        if (hasRing && !isRingActive) {
            // Add ring effects
            persistentData[ring.key] = 1;
            hasAnyRing = true;
            player.modifyAttribute(
                'minecraft:generic.max_health',
                ring.attribute,
                calculateMaxHealth(maxHealth, ring.maxMultiplier),
                "addition"
            );
            server.runCommandSilent(
                `execute as ${player.username} run origin set @s origins:origin ${ring.origin}`
            );
            ring.tags.add.forEach(tag =>
                server.runCommandSilent(
                    `execute as ${player.username} run tag @s add ${tag}`
                )
            );
            ring.tags.remove.forEach(tag =>
                server.runCommandSilent(
                    `execute as ${player.username} run tag @s remove ${tag}`
                )
            );
        } else if (!hasRing && isRingActive) {
            persistentData[ring.key] = 0;
            player.removeAttribute(
                'minecraft:generic.max_health',
                ring.attribute
            );
        }
        if (hasRing) {
            hasAnyRing = true;
        }
    });
    if (!hasAnyRing) {
        server.runCommandSilent(`execute as ${player.username} run origin set @s origins:origin origins:human`);
        server.runCommandSilent(`execute as ${player.username} run tag @s remove lightningdragon`);
        server.runCommandSilent(`execute as ${player.username} run tag @s remove oceandragon`);
    }
    if (player.health > player.maxHealth) {
        player.setHealth(player.maxHealth);
    }
}


PlayerEvents.tick(event => {
    let { player, server, entity: { persistentData } } = event;
    if (player.age % 20 !== 0) return;

    let curios = player.nbt.ForgeCaps['curios:inventory'].toString();
    let maxHealth = player.getMaxHealth();

    processRings(player, curios, maxHealth, persistentData, server);
    // Handle Elf Ring Grass Block Regeneration
    if (curios.includes("kubejs:elf_ring")) {
        let aabb = player.boundingBox.inflate(1);
        let nearbyGrass = player.level.getBlockStates(aabb).anyMatch(state => state == Blocks.GRASS_BLOCK.defaultBlockState());
        if (nearbyGrass && Math.random() > 0.3) {
            player.heal(1);
        }
    }
});
/**Elf race ring forest fall damage cancelled here instead of startup event for client sync */
EntityEvents.hurt(event => {
    let { entity, source } = event;
    let entityCurios = entity.nbt.ForgeCaps['curios:inventory'].toString();
    if (entityCurios.includes("kubejs:elf_ring") && source.getType() === 'fall' && entity.block.biomeId === "minecraft:forest") {
        event.cancel();
    }
});
/**Processing ring when the player logs in to avoid any syncing issues */
PlayerEvents.loggedIn(event => {
    let { player, server, entity: { persistentData } } = event;
    let curios = player.nbt.ForgeCaps['curios:inventory'].toString();
    let maxHealth = player.getMaxHealth();
    processRings(player, curios, maxHealth, persistentData, server, true);
});
