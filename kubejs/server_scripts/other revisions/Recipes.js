
ServerEvents.recipes(event => {


  // Minecraft
  event.shapeless('4x minecraft:string', [
    '#forge:wool'
  ]);
  event.shapeless('minecraft:white_wool', [
    '4x #forge:string'
  ]);

  event.shaped('minecraft:fishing_rod', [
    '  E',
    ' EA',
    'E B'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    E: 'minecraft:stick'
  });


  event.shapeless('4x minecraft:paper', [
    'minecraft:birch_log',
    'minecraft:birch_log'
  ]);

  event.shapeless('4x minecraft:paper', [
    'minecraft:birch_wood',
    'minecraft:birch_wood'
  ]);

  event.shapeless('4x minecraft:paper', [
    'minecraft:stripped_birch_wood',
    'minecraft:stripped_birch_wood'
  ]);

  event.shapeless('4x minecraft:paper', [
    'minecraft:stripped_birch_log',
    'minecraft:stripped_birch_log'
  ]);
  event.shaped('minecraft:chest', [
    'AAA',
    'A A',
    'AAA'
  ], {
    A: '#minecraft:planks'
  });
  event.shaped('minecraft:chain', [
    'A',
    'A',
    'A'
  ], {
    A: 'minecraft:iron_nugget'
  });

  //Kubejs
  event.shaped('kubejs:reforging_station', [

    'ABA',
    'CDC'
  ], {
    A: 'minecraft:smooth_stone_slab',
    B: 'minecraft:anvil',
    C: 'minecraft:obsidian',
    D: 'minecraft:crafting_table'
  });


  //Aquaculture
  event.shaped('aquaculture:iron_fishing_rod', [
    '  D',
    ' DA',
    'ECB'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    C: 'aquaculture:bobber',
    D: 'minecraft:iron_ingot',
    E: 'minecraft:stick'
  });

  event.shaped('aquaculture:gold_fishing_rod', [
    '  D',
    ' DA',
    'ECB'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    C: 'aquaculture:bobber',
    D: 'minecraft:gold_ingot',
    E: 'minecraft:stick'
  });

  event.shaped('aquaculture:diamond_fishing_rod', [
    '  D',
    ' DA',
    'ECB'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    C: 'aquaculture:bobber',
    D: 'minecraft:diamond',
    E: 'minecraft:stick'
  });
  event.shaped('aquaculture:neptunium_fishing_rod', [
    '  D',
    ' DA',
    'ECB'
  ], {
    A: 'aquaculture:fishing_line',
    B: 'aquaculture:iron_hook',
    C: 'aquaculture:bobber',
    D: 'aquaculture:neptunium_ingot',
    E: 'minecraft:stick'
  });

  //First Aid
  event.shaped('2x firstaid:bandage', [
    'ACA'
  ], {
    A: '#forge:string',
    C: '#forge:wool'
  });


  //Atlas
  event.shapeless('map_atlases:atlas', [
    'minecraft:compass',
    'minecraft:writable_book'

  ]);

  // Waystones
  event.shaped('3x waystones:warp_scroll', [
    'WFW',
    'EEE',
    'PFP'
  ], {
    W: 'minecraft:ender_pearl',
    P: 'minecraft:gold_nugget',
    E: 'minecraft:paper',
    F: '#forge:dyes/purple'
  });

  //Vinery
  event.shaped('vinery:fermentation_barrel', [
    'FDF',
    'CEC',
    'FDF'
  ], {
    F: 'minecraft:iron_ingot',
    C: 'minecraft:tripwire_hook',
    D: '#minecraft:logs',
    E: 'minecraft:barrel',
  });

  //Custom Bountiful Bauble Items
  event.shaped('kubejs:disintegration_tablet', [
    'EDE',
    'DCD',
    'EDE'
  ], {
    D: 'minecraft:blaze_powder',
    C: 'minecraft:glowstone_dust',
    E: '#ae2:all_quartz'
  }).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:steadfast_spikes",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:panic_necklace",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:villager_hat",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:superstitious_hat",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "magicmirror:magicmirror",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:cross_necklace",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:charm_of_sinking",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:cloud_in_a_bottle",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:antidote_vessel",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:universal_attractor",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "artifacts:feral_claws",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');
  event.shapeless('kubejs:spectral_silt', [
    "#quark:runes",
    "kubejs:disintegration_tablet",
  ]).keepIngredient('kubejs:disintegration_tablet');

  //Kubejs
  event.shapeless('3x vinery:dark_cherry_planks', [
    'vinery:dark_cherry_log',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:oak_planks', [
    '#minecraft:oak_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:spruce_planks', [
    '#minecraft:spruce_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:birch_planks', [
    '#minecraft:birch_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:jungle_planks', [
    '#minecraft:jungle_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:acacia_planks', [
    '#minecraft:acacia_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:dark_oak_planks', [
    '#minecraft:dark_oak_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:mangrove_planks', [
    '#minecraft:mangrove_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:crimson_planks', [
    '#minecraft:crimson_stems',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:warped_planks', [
    '#minecraft:warped_stems',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x minecraft:bamboo_planks', [
    '#minecraft:bamboo_blocks',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x quark:blossom_planks', [
    '#quark:blossom_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x quark:azalea_planks', [
    '#quark:azalea_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('3x quark:ancient_planks', [
    '#quark:ancient_logs',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shapeless('2x minecraft:stick', [
    '#minecraft:planks',
    '#kubejs:saws',

  ]).damageIngredient('#kubejs:saws', 1)

  event.shaped('kubejs:bronze_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/bronze',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:copper_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/copper',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:diamond_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:gems/diamond',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:gold_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/gold',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:iron_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/iron',
    D: 'minecraft:stick',
  });

  event.shaped('kubejs:steel_saw', [
    '  D',
    ' DC',
    'DC '
  ], {
    C: '#forge:ingots/steel',
    D: 'minecraft:stick',
  });

  event.shapeless('kubejs:grass_string', [
    '3x kubejs:grass_fiber',
  ])

  event.shaped('kubejs:flint_hatchet', [
    ' EC',
    ' D ',
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
    E: '#forge:string',
  });
  event.shaped('kubejs:flint_pickaxe', [
    'CEC',
    ' D ',
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
    E: '#forge:string',
  });
  event.shaped('kubejs:flint_shovel', [
    ' C ',
    ' E ',
    ' D '
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
    E: '#forge:string',
  });
  event.shaped('kubejs:flint_hoe', [
    'CCE',
    '  D',
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
    E: '#forge:string',
  });
  event.shaped('kubejs:flint_knife', [
    ' C ',
    ' D ',
  ], {
    C: 'kubejs:flint_shard',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:bronze_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/bronze',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:copper_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/copper',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:diamond_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:gems/diamond',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:gold_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/gold',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:iron_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/iron',
    D: 'minecraft:stick',
  });
  event.shaped('kubejs:steel_knife', [
    ' C ',
    ' D ',
  ], {
    C: '#forge:ingots/steel',
    D: 'minecraft:stick',
  });

  event.shapeless('kubejs:grave_scroll', [
    'minecraft:rotten_flesh',
    'minecraft:paper',
    '#forge:ender_pearls'
  ]
  );
});
ServerEvents.recipes(e => {
  e.custom({
    type: 'vinery:wine_fermentation',
    ingredients: [
      { item: 'minecraft:glow_berries' },
      { item: 'minecraft:potion' }
    ],
    result: { item: 'kubejs:wildberry_wine' }
  })
})
ServerEvents.recipes(event => {
  //Furnace
  event.smelting('2x minecraft:iron_ingot', 'minecraft:iron_helmet')
  event.smelting('4x minecraft:iron_ingot', 'minecraft:iron_chestplate')
  event.smelting('3x minecraft:iron_ingot', 'minecraft:iron_leggings')
  event.smelting('1x minecraft:iron_ingot', 'minecraft:iron_boots')

  event.smelting('7x minecraft:iron_ingot', 'minecraft:iron_horse_armor')
  event.smelting('7x minecraft:diamond', 'minecraft:diamond_horse_armor')
  event.smelting('7x minecraft:gold_ingot', 'minecraft:golden_horse_armor')

  event.smelting('2x minecraft:diamond', 'minecraft:diamond_helmet')
  event.smelting('4x minecraft:diamond', 'minecraft:diamond_chestplate')
  event.smelting('3x minecraft:diamond', 'minecraft:diamond_leggings')
  event.smelting('1x minecraft:diamond', 'minecraft:diamond_boots')


  event.smelting('2x minecraft:gold_ingot', 'minecraft:golden_helmet')
  event.smelting('4x minecraft:gold_ingot', 'minecraft:golden_chestplate')
  event.smelting('3x minecraft:gold_ingot', 'minecraft:golden_leggings')
  event.smelting('1x minecraft:gold_ingot', 'minecraft:golden_boots')


  event.smelting('14x minecraft:iron_nugget', 'minecraft:chainmail_helmet')
  event.smelting('24x minecraft:iron_nugget', 'minecraft:chainmail_chestplate')
  event.smelting('18x minecraft:iron_nugget', 'minecraft:chainmail_leggings')
  event.smelting('10x minecraft:iron_nugget', 'minecraft:chainmail_boots')

  //Blast Furnace
  event.blasting('2x minecraft:iron_ingot', 'minecraft:iron_helmet')
  event.blasting('4x minecraft:iron_ingot', 'minecraft:iron_chestplate')
  event.blasting('3x minecraft:iron_ingot', 'minecraft:iron_leggings')
  event.blasting('1x minecraft:iron_ingot', 'minecraft:iron_boots')

  event.blasting('2x minecraft:diamond', 'minecraft:diamond_helmet')
  event.blasting('4x minecraft:diamond', 'minecraft:diamond_chestplate')
  event.blasting('3x minecraft:diamond', 'minecraft:diamond_leggings')
  event.blasting('1x minecraft:diamond', 'minecraft:diamond_boots')

  event.blasting('2x minecraft:gold_ingot', 'minecraft:golden_helmet')
  event.blasting('4x minecraft:gold_ingot', 'minecraft:golden_chestplate')
  event.blasting('3x minecraft:gold_ingot', 'minecraft:golden_leggings')
  event.blasting('1x minecraft:gold_ingot', 'minecraft:golden_boots')

  event.blasting('14x minecraft:iron_nugget', 'minecraft:chainmail_helmet')
  event.blasting('24x minecraft:iron_nugget', 'minecraft:chainmail_chestplate')
  event.blasting('18x minecraft:iron_nugget', 'minecraft:chainmail_leggings')
  event.blasting('10x minecraft:iron_nugget', 'minecraft:chainmail_boots')

  event.blasting('7x minecraft:iron_ingot', 'minecraft:iron_horse_armor')
  event.blasting('7x minecraft:diamond', 'minecraft:diamond_horse_armor')
  event.blasting('7x minecraft:gold_ingot', 'minecraft:golden_horse_armor')
})

/**Play crafting sound */
ItemEvents.crafted(event => {
  const { item, player, player: { persistentData, x, y, z }, server } = event
  if (persistentData.craftsaw != 1) return
  persistentData.craftsaw = 0
  server.schedule(2000, () => {
    persistentData.craftsaw = 1;
  })
  server.runCommandSilent(`execute as ${player.username} run playsound minecraft:craftsaw ambient @s ${x} ${y} ${z} 0.5 1`)
})
PlayerEvents.loggedIn(event => {
  const { player } = event
  let pData = player.persistentData
  pData.sawing = 1
})