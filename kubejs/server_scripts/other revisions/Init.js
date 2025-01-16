// priority: 100
ServerEvents.loaded(event => {
    const { server, server: { persistentData } } = event
    if (!persistentData.servertimer) persistentData.servertimer = 0
    if (!persistentData.firstLoad) {
        //Generic First Load Functions
        server.runCommandSilent(`gamerule spawnRadius 1000`)
        server.runCommandSilent(`gamerule reducedDebugInfo true`)
        //Scoreboard Functions
        server.runCommandSilent(`scoreboard players set #lio lesslagg 20`)
        server.runCommandSilent('scoreboard players set dragonringdummy dragonring 1');
        server.schedule(10, () => { server.runCommandSilent('scoreboard players set lesslaggy lightningattack 15') });
        server.schedule(10, () => { server.runCommandSilent('scoreboard players set lesslaggyy lightningattack 7') });
        server.schedule(10, () => { server.runCommandSilent('scoreboard players set randolightning lightningattack2 350') });
        server.runCommandSilent('kubejs reload server_scripts')

        persistentData.firstLoad = true
    }
})


ServerEvents.tick((event) => {
    const { server, server: { persistentData } } = event
    //Normal Tick Functions

    server.runCommandSilent('scoreboard players add lesslagger lightningattack 1');
    server.runCommandSilent('function genesis:randoburn');
    server.runCommandSilent('execute if score lesslagger lightningattack > lesslaggy lightningattack run scoreboard players set lesslagger lightningattack 0');

    //Lightning Dragon Attack Damage

    server.runCommandSilent('execute if score lesslagger lightningattack >= lesslaggy lightningattack run function genesis:randoattack');

    //Water Dragon Attack Damage

    server.runCommandSilent('execute if score lesslagger lightningattack >= lesslaggy lightningattack run function genesis:waterattack');
    server.runCommandSilent('execute if score randolightning2 lightningattack2 >= randolightning lightningattack2 run scoreboard players set randolightning2 lightningattack2 0');
    server.runCommandSilent('scoreboard players add randolightning2 lightningattack2 1');
    server.runCommandSilent('execute if score randolightning2 lightningattack2 = randolightning lightningattack2 run function genesis:randoattack2');

    //Lightning/Ocean Dragon Ring Attack Animation

    server.runCommandSilent('execute as @e[type=area_effect_cloud,tag=FLD] at @s run function particles:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 1 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 2 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 3 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 12 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 4 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 11 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 6 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 8 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 5 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 7 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 9 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 10 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 13 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 14 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles3:particles/animate');
    server.runCommandSilent('execute if score lesslagger lightningattack matches 15 run execute as @e[type=area_effect_cloud,tag=FLDD] at @s run function particles2:particles/animate');
});
/**Player initializations */
PlayerEvents.loggedIn(event => {
    const { player, server, player: { username, persistentData } } = event
    if (!player.stages.has('new_join')) {
        persistentData.firstworldjoin = 1
        player.stages.add('new_join');
        // Mimics gravity from 1.12
        server.runCommandSilent(`attribute ${username} forge:entity_gravity base set 0.084`)
        server.runCommandSilent(`curios set body ${username} 0`)
        server.runCommandSilent(`curios set hands ${username} 0`)
        server.runCommandSilent(`curios set feet ${username} 0`)
    }
    persistentData.craftsaw = 1
});
PlayerEvents.respawned(e => e.server.runCommandSilent(`execute as ${e.entity.username} run attribute @s forge:entity_gravity base set 0.084`))
