BlockEvents.placed(event => {
    let { block, level } = event;
    let /**@type {Internal.ServerPlayer} */ player = event.player
    if (!player) return;
    let { x, y, z } = block;
    let dim = player.level.dimension;
    if (block.hasTag('waystones:waystone')) {
        let optionalPos = findWaystoneRespawnPosition(level, new BlockPos(x, y, z));
        if (optionalPos) {
            player.persistentData.SettingWaystoneSpawn = 1
            player.setRespawnPosition(player.level.dimensionKey, new BlockPos(optionalPos.x, optionalPos.y, optionalPos.z), 0, true, false);
            player.persistentData.put("kubejs_waystone_spawn", {
                x: optionalPos.x,
                y: optionalPos.y,
                z: optionalPos.z,
                wx: x,
                wy: y,
                wz: z,
                dimension: dim.toString()
            });
        }
    }
});
BlockEvents.rightClicked(event => {
    let { block, level } = event;
    let /**@type {Internal.ServerPlayer} */ player = event.player
    if (!player) return;
    let { x, y, z } = block;
    let dim = player.level.dimension;
    if (block.hasTag('waystones:waystone')) {
        let optionalPos = findWaystoneRespawnPosition(level, new BlockPos(x, y, z));
        if (optionalPos) {
            player.persistentData.SettingWaystoneSpawn = 1
            player.setRespawnPosition(player.level.dimensionKey, new BlockPos(optionalPos.x, optionalPos.y, optionalPos.z), 0, true, false);
            player.persistentData.put("kubejs_waystone_spawn", {
                x: optionalPos.x,
                y: optionalPos.y,
                z: optionalPos.z,
                wx: x,
                wy: y,
                wz: z,
                dimension: dim.toString()
            });
        }
    }
})

PlayerEvents.respawned(event => global.checkSpawnpoint(event.player, true));
PlayerEvents.loggedIn(event => global.checkSpawnpoint(event.player, false));
EntityEvents.death(event => global.checkSpawnpoint(event.player, false));


/**
 * 
 * @param {Internal.Player} player 
 * @param {boolean} manualTeleport
 * @returns 
 */
global.checkSpawnpoint = (player, manualTeleport) => {
    if (!player) return
    let spawnData = player.persistentData.get("kubejs_waystone_spawn");
    let server = player.server
    if (!player.isPlayer()) return
    if (spawnData) {
        let { x, y, z, dimension, wx, wy, wz } = spawnData;
        let block
        let dimkey
        server.getAllLevels().forEach(l => {
            if (l.dimension == dimension) {
                block = l.getBlock(wx, wy, wz)
                dimkey = l.dimensionKey
            }
        })
        if (block && block.hasTag('waystones:waystone')) {
            if (manualTeleport)
                player.teleportTo(dimension, x, y, z, 0, 0)
            return
        }
        player.setRespawnPosition(null, null, 0, false, false);
    }
}

/**
 * Find a safe spawnpoint block in a certain radius around the interacted waystone
 * @param {Internal.ServerLevel} level 
 * @param {*} pos 
 * @returns 
 */
function findWaystoneRespawnPosition(level, pos) {
    let radius = 2;
    for (let dx = -radius; dx <= radius; dx++) {
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dz = -radius; dz <= radius; dz++) {
                let checkPos = pos.offset(dx, dy, dz);
                let blockBelow = level.getBlock(checkPos);
                let blockAbove = level.getBlock(checkPos.above());
                if (blockBelow.blockState.isSolid() && blockAbove.blockState.isAir()) {
                    return {
                        x: checkPos.x,
                        y: checkPos.y + 1.0,
                        z: checkPos.z
                    };
                }
            }
        }
    }
    return null;
}