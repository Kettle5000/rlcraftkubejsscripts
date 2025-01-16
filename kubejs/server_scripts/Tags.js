ServerEvents.tags('item', event => {
    event.add('kubejs:trinkets', [
        '#curios:curio',
        '#curios:back',
        '#curios:belt',
        '#curios:body',
        '#curios:bracelet',
        '#curios:charm',
        '#curios:head',
        '#curios:hands',
        '#curios:necklace',
        '#curios:ring',
        '#curios:feet',
    ])
    event.add('kubejs:race_rings', [
        'kubejs:dragon_ring',
        'kubejs:ring_of_faeles',
        'kubejs:elf_ring',
        'kubejs:fairy_ring',
        'kubejs:lightning_dragon_ring',
        'kubejs:ocean_dragon_ring',
        'kubejs:titan_ring',
    ])
    event.remove('curios:hands', [
        'artifacts:feral_claws',

    ])
    event.add('curios:ring', [
        'kubejs:dragon_ring',
        'kubejs:ring_of_faeles',
        'kubejs:elf_ring',
        'kubejs:fairy_ring',
        'kubejs:lightning_dragon_ring',
        'kubejs:ocean_dragon_ring',
        'kubejs:titan_ring',
        'artifacts:feral_claws',
    ])
    event.add('kubejs:trinkets_iron', [
    ])
    event.add('kubejs:trinkets_netherite', [
    ])
    event.add('kubejs:trinkets_diamond', [
    ])
    event.add('kubejs:trinkets_gold', [
        'potion_rings_rebooted:potion_ring_of_jump_boost',
        'potion_rings_rebooted:potion_ring',
        'potion_rings_rebooted:potion_ring_of_speed',
        'potion_rings_rebooted:potion_ring_of_regeneration',
        'potion_rings_rebooted:potion_ring_of_strength',
        'potion_rings_rebooted:potion_ring_of_haste',
        'potion_rings_rebooted:potion_ring_of_resistance',
    ])
    event.add('kubejs:trinkets_leather', [
        'supplementaries:quiver',
    ])
    event.add('kubejs:trinkets_spectral_silt', [
        '#artifacts:artifacts',
        'artifacts:villager_hat',
        'artifacts:superstitious_hat',
        'artifacts:cross_necklace',
        'artifacts:panic_necklace',
        'artifacts:charm_of_sinking',
        'artifacts:cloud_in_a_bottle',
        'artifacts:antidote_vessel',
        'artifacts:universal_attractor',
        'artifacts:feral_claws',
        'artifacts:running_shoes',
        'artifacts:steadfast_spikes',
        'artifacts:flippers'
    ])
    event.add('kubejs:trinkets_glowing_ingot', [
        'kubejs:dragon_ring',
        'kubejs:ring_of_faeles',
        'kubejs:elf_ring',
        'kubejs:fairy_ring',
        'kubejs:lightning_dragon_ring',
        'kubejs:ocean_dragon_ring',
        'kubejs:titan_ring',
    ])
    event.add('kubejs:trinkets_unspecified', [
    ])
    event.add('kubejs:trinkets_certus_quartz', [
    ])
    event.add('forge:tools/wooden', [
        'minecraft:wooden_sword',
        'minecraft:wooden_shovel',
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe',
        'aquaculture:wooden_fillet_knife',
    ])
    event.add('forge:tools/stone', [
        'minecraft:stone_sword',
        'minecraft:stone_shovel',
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_hoe',
        'aquaculture:stone_fillet_knife',
    ])
    event.add('forge:tools/iron', [
        'aquaculture:iron_fillet_knife',
        'kubejs:iron_saw',
        'kubejs:iron_knife',
        'minecraft:iron_pickaxe',
        'minecraft:iron_axe',
        'minecraft:iron_shovel',
        'minecraft:iron_hoe',
        'minecraft:iron_sword'
    ]);

    event.add('forge:tools/gold', [
        'aquaculture:gold_fillet_knife',
        'kubejs:gold_saw',
        'kubejs:gold_knife',
        'minecraft:golden_pickaxe',
        'minecraft:golden_axe',
        'minecraft:golden_shovel',
        'minecraft:golden_hoe',
        'minecraft:golden_sword'
    ]);

    event.add('forge:tools/diamond', [
        'aquaculture:diamond_fillet_knife',
        'kubejs:diamond_saw',
        'kubejs:diamond_knife',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_hoe',
        'minecraft:diamond_sword'
    ]);

    event.add('forge:tools/netherite', [
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_axe',
        'minecraft:netherite_shovel',
        'minecraft:netherite_hoe',
        'minecraft:netherite_sword'
    ]);

    event.add('forge:tools/silver', [
    ])
    event.add('forge:tools/steel', [
        'kubejs:steel_saw',
        'kubejs:steel_knife',
    ])

    event.add('forge:tools/flint', [
        'kubejs:flint_knife',
        'kubejs:flint_pickaxe',
        'kubejs:flint_shovel',
        'kubejs:flint_hoe',
    ])
    event.add('forge:tools/neptunium', [
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_shovel',
        'aquaculture:neptunium_pickaxe',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunium_hoe',
        'aquaculture:neptunium_fillet_knife',
    ])
    event.add('forge:tools/nether_star', [
    ])
    event.add('forge:tools/copper', [
        'kubejs:copper_saw',
        'kubejs:copper_knife',
    ])
    event.add('forge:tools/bronze', [
        'kubejs:bronze_saw',
        'kubejs:bronze_knife',
    ])
    event.add('forge:tools', [
        '#forge:tools/gold',
        '#forge:tools/wooden',
        '#forge:tools/stone',
        '#forge:tools/iron',
        '#forge:tools/diamond',
        '#forge:tools/netherite',
        '#forge:tools/silver',
        '#forge:tools/steel',
        '#forge:tools/neptunium',
        '#forge:tools/nether_star',
        '#forge:tools/flint',
    ])
    event.add('forge:helmets', [
        '#forge:armors/helmets',
        'minecraft:chainmail_helmet',
        'aquaculture:neptunium_helmet',
        'minecraft:leather_helmet',
        'quark:forgotten_hat',
        'minecraft:turtle_helmet',

    ])
    event.add('forge:chestplates', [
        '#forge:armors/chestplates',
        'minecraft:chainmail_chestplate',
        'aquaculture:neptunium_chestplate',
        'minecraft:leather_chestplate',
        'minecraft:elytra',

    ])
    event.add('forge:leggings', [
        '#forge:armors/leggings',
        'minecraft:chainmail_leggings',
        'aquaculture:neptunium_leggings',
        'minecraft:leather_leggings',
    ])
    event.add('forge:boots', [
        '#forge:armors/boots',
        'minecraft:chainmail_boots',
        'aquaculture:neptunium_boots',
        'minecraft:leather_boots',
    ])
    event.add('forge:armor/copper', [
    ])
    event.add('forge:armor/diamond', [
        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots'
    ]);

    event.add('forge:armor/iron', [
        'minecraft:iron_helmet',
        'minecraft:iron_chestplate',
        'minecraft:iron_leggings',
        'minecraft:iron_boots'
    ]);

    event.add('forge:armor/gold', [
        'minecraft:golden_helmet',
        'minecraft:golden_chestplate',
        'minecraft:golden_leggings',
        'minecraft:golden_boots'
    ]);

    event.add('forge:armor/chain', [
        'minecraft:chainmail_helmet',
        'minecraft:chainmail_chestplate',
        'minecraft:chainmail_leggings',
        'minecraft:chainmail_boots'
    ]);

    event.add('forge:armor/netherite', [
        'minecraft:netherite_helmet',
        'minecraft:netherite_chestplate',
        'minecraft:netherite_leggings',
        'minecraft:netherite_boots'
    ]);

    event.add('forge:armor/neptunium', [
        'aquaculture:neptunium_helmet',
        'aquaculture:neptunium_chestplate',
        'aquaculture:neptunium_leggings',
        'aquaculture:neptunium_boots',
    ])
    event.add('forge:armor/steel', [
    ])
    event.add('forge:armor/leather', [
        'minecraft:leather_helmet',
        'minecraft:leather_chestplate',
        'minecraft:leather_leggings',
        'minecraft:leather_boots',
        'quark:forgotten_hat',
    ])
    event.add('forge:armor/scute', [
        'minecraft:turtle_helmet',
    ])
    event.add('forge:armor/phantom_membrane', [
        'minecraft:elytra',
    ])
    event.add('forge:armor/bronze', [
    ])
    event.add('forge:armor/bone', [
    ])
    event.add('kubejs:saws', [
        'kubejs:bronze_saw',
        'kubejs:copper_saw',
        'kubejs:diamond_saw',
        'kubejs:gold_saw',
        'kubejs:iron_saw',
        'kubejs:steel_saw',
    ])
    event.add('kubejs:knives', [
        'kubejs:bronze_knife',
        'kubejs:copper_knife',
        'kubejs:diamond_knife',
        'kubejs:gold_knife',
        'kubejs:iron_knife',
        'kubejs:steel_knife',
        'kubejs:flint_knife',
    ])
    event.add('forge:string', [
        'kubejs:grass_string',
    ])
    event.add('forge:tools/axes', [
        'aquaculture:neptunium_axe',
        'kubejs:bronze_saw',
        'kubejs:copper_saw',
        'kubejs:diamond_saw',
        'kubejs:gold_saw',
        'kubejs:iron_saw',
        'kubejs:steel_saw',
        'kubejs:flint_hatchet',
    ])
    event.add('kubejs:tool_reforge', [
        '#forge:tools/gold',
        '#forge:tools/wooden',
        '#forge:tools/stone',
        '#forge:tools/iron',
        '#forge:tools/diamond',
        '#forge:tools/netherite',
        '#forge:tools/silver',
        '#forge:tools/steel',
        '#forge:tools/neptunium',
        '#forge:tools/nether_star',
        '#forge:tools/flint',
        '#forge:tools/copper',
        '#forge:tools/bronze',
    ])
})

ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', [
        'kubejs:reforging_station',
    ])
    event.add('minecraft:beds', [
        '#comforts:sleeping_bags',
    ])
})
