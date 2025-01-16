// Simply increase xp drops from spawners
BlockEvents.broken(event => {
    let { block, player, server } = event
    let { x, y, z } = block
    if (block.id == 'minecraft:spawner') {
        let xp = block.createEntity("minecraft:experience_orb")
        xp.mergeNbt(`{Value:35,Age:0,Invulnerable:0b}`)
        xp.spawn()
    }
})



// Magic mirror teleport to player's spawnpoint/ grave scroll sending data to client 
ItemEvents.rightClicked(event => {
    let { player, server, item, item: { id }, player: { username } } = event
    if (id == 'kubejs:grave_scroll') {
        player.sendData('grave_scroll')
    }
    if (!player.getSpawnLocation()) return
    global.checkSpawnpoint(player, false)
    let { x, y, z } = player.getSpawnLocation()
    let dim = player.getRespawnDimension().location()
    if (id == 'magicmirror:magicmirror') {
        server.runCommandSilent(`execute in ${dim} run execute as ${player.username} run tp ${x} ${y} ${z}`)
        player.addItemCooldown('magicmirror:magicmirror', 25)
        player.sendData('magicmirror')
    }

})
/**Grave Scroll Logic */
EntityEvents.death((event) => {
    let { player } = event;
    if ((!player || !player.isPlayer())) return;
    let { x, y, z } = player;
    let pData = player.persistentData;
    pData.deathx = x.toFixed(0);
    pData.deathy = y.toFixed(0);
    pData.deathz = z.toFixed(0);
    pData.deathreset = 1;
    pData.deathdimension = player.level.dimension.toString();
});

/**Custom NoTreePunching flint shard logic */
BlockEvents.rightClicked(event => {
    if (event.hand == 'OFF_HAND') return
    let { player, block, server } = event
    let item = player.getHeldItem('main_hand')
    let air = player.getMainHandItem().id == 'minecraft:air'
    if (!block.hasTag('minecraft:titanbreakables')) { return }
    if (air) { return }
    if (item.count <= 0) return
    if (item.id == 'minecraft:flint') {
        player.sendData('knapping')
        player.swing()
        if (Math.random() >= 0.5) {
            item.count--
            block.popItemFromFace('2x kubejs:flint_shard', "up")
        }
    }
})


ItemEvents.rightClicked(event => {
    let { player, player: { mainHandItem, offHandItem } } = event;
    if (mainHandItem.id !== 'minecraft:air' && offHandItem.id !== 'minecraft:air' &&
        offHandItem.count > 0 && mainHandItem.count > 0 && mainHandItem.hasTag('kubejs:knives')) {
        let leatherCount;
        switch (offHandItem.id) {
            case 'minecraft:leather_boots':
                leatherCount = 1;
                break;
            case 'minecraft:leather_leggings':
                leatherCount = 3;
                break;
            case 'minecraft:leather_chestplate':
                leatherCount = 4;
                break;
            case 'minecraft:leather_helmet':
                leatherCount = 2;
                break;
            case 'minecraft:leather_horse_armor':
                leatherCount = 6;
                break;
            default:
                leatherCount = 0;
        }

        if (leatherCount > 0) {
            offHandItem.count--;
            player.give(`${leatherCount}x leather`);
            player.sendData('shear');
        }
    }
});

BlockEvents.broken(event => {
    let { player, block } = event
    if (!player.getHeldItem('main_hand').hasTag('kubejs:knives')) return
    if (block.id == 'minecraft:grass' || block.id == 'minecraft:tall_grass') {
        player.damageHeldItem('main_hand', 1)
    }
})
/**NoTreePunching Axe Right Click Handling */
BlockEvents.rightClicked(event => {
    let { player, block, server } = event;
    let mainHandItem = player.getHeldItem('main_hand');
    let pData = player.persistentData;
    if (pData.sawing !== 1 || !mainHandItem.hasTag('forge:tools/axes') || mainHandItem.count <= 0) {
        return;
    }
    let blockPlankMap = {
        'minecraft:stripped_oak_log': 'minecraft:oak_planks',
        'minecraft:stripped_spruce_log': 'minecraft:spruce_planks',
        'minecraft:stripped_birch_log': 'minecraft:birch_planks',
        'minecraft:stripped_jungle_log': 'minecraft:jungle_planks',
        'minecraft:stripped_acacia_log': 'minecraft:acacia_planks',
        'minecraft:stripped_dark_oak_log': 'minecraft:dark_oak_planks',
        'minecraft:stripped_mangrove_log': 'minecraft:mangrove_planks',
        'minecraft:stripped_crimson_stem': 'minecraft:crimson_planks',
        'minecraft:stripped_warped_stem': 'minecraft:warped_planks',
        'quark:stripped_blossom_log': 'quark:blossom_planks',
        'quark:stripped_azalea_log': 'quark:azalea_planks',
        'quark:stripped_ancient_log': 'quark:ancient_planks',
        'vinery:stripped_dark_cherry_log': 'vinery:dark_cherry_planks',
    };
    let blockId = block.id;
    let plankId = blockPlankMap[blockId];
    if (block.hasTag('minecraft:planks')) {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.hit block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1)
            block.popItemFromFace('2x minecraft:stick', "up")
        }
    }
    if (plankId) {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`);
        player.swing();
        if (Math.random() >= 0.5) {
            block.set('air');
            player.damageHeldItem('main_hand', 1);
            block.popItemFromFace(`2x ${plankId}`, 'up');
        }
    }
    server.schedule(140, () => {
        pData.sawing = 1;
    });
});

let Block = Java.loadClass('net.minecraft.world.level.block.Block')
/**Right clicking crops pops them onto the ground */
BlockEvents.rightClicked(event => {
    let { block, player, server, level } = event
    let { x, y, z } = block
    if (block.hasTag('minecraft:crops')) {
        let mcLevel = level
        let blockState = mcLevel.getBlockState(block.pos)
        let mcBlock = blockState.block
        let mcPlayer = player
        if (mcBlock.isMaxAge(blockState)) {
            let loot = Block.getDrops(blockState, mcLevel, block.pos, null, mcPlayer, mcPlayer.getMainHandItem())
            let seedYeeted = false
            for (let i in loot) {
                if (loot[i].id == mcBlock.getCloneItemStack(mcLevel, block.pos, blockState).id) {
                    loot[i].count--
                    seedYeeted = true
                    break
                }
            }
            loot.forEach(item => {
                Block.popResource(mcLevel, block.pos, item)
            })
            if (seedYeeted) {

                block.set(block.id, { age: '0' })
                server.runCommandSilent(`playsound minecraft:block.crop.break block @a ${block.x} ${block.y} ${block.z}`)
                server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup block @a ${block.x} ${block.y} ${block.z} 0.1 1`)
                player.addXP(2)
            } else { //if no seed was dropped for some odd reason
                mcLevel.destroyBlock(block.pos, true, null, 32)
            }
            player.swing()
            event.cancel()
        }
    }
})
/**Breaking crops grants xp */
BlockEvents.broken(event => {
    let { block, player, server, level } = event
    let { x, y, z } = block
    if (block.hasTag('minecraft:crops')) {
        let mcLevel = level
        let blockState = mcLevel.getBlockState(block.pos)
        let mcBlock = blockState.block
        if (mcBlock.isMaxAge(blockState)) {
            server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup block @a ${block.x} ${block.y} ${block.z} 0.1 1`)
            player.addXP(2)
        }
    }
})
