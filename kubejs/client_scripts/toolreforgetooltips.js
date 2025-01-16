ItemEvents.tooltip(event => {
    let tools = [
        'kubejs:iron_saw',
        'kubejs:iron_knife',
        'kubejs:gold_saw',
        'kubejs:gold_knife',
        'kubejs:diamond_saw',
        'kubejs:diamond_knife',
        'kubejs:steel_saw',
        'kubejs:steel_knife',
        'kubejs:flint_knife',
        'kubejs:flint_pickaxe',
        'kubejs:flint_shovel',
        'kubejs:flint_hoe',
        'kubejs:copper_saw',
        'kubejs:copper_knife',
        'kubejs:bronze_saw',
        'kubejs:bronze_knife',
        'minecraft:wooden_sword',
        'minecraft:wooden_shovel',
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe',
        'minecraft:stone_sword',
        'minecraft:stone_shovel',
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_hoe',
        'minecraft:trident',
        'minecraft:iron_pickaxe',
        'minecraft:iron_shovel',
        'minecraft:iron_hoe',
        'minecraft:iron_axe',
        'minecraft:iron_sword',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_hoe',
        'minecraft:diamond_axe',
        'minecraft:diamond_sword',
        'minecraft:golden_pickaxe',
        'minecraft:golden_shovel',
        'minecraft:golden_hoe',
        'minecraft:golden_axe',
        'minecraft:golden_sword',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_shovel',
        'minecraft:netherite_hoe',
        'minecraft:netherite_axe',
        'minecraft:netherite_sword',
        'magistuarmory:wood_stylet',
        'magistuarmory:wood_shortsword',
        'magistuarmory:wood_pike',
        'magistuarmory:wood_ranseur',
        'magistuarmory:wood_ahlspiess',
        'magistuarmory:wood_chivalrylance',
        'magistuarmory:wood_estoc',
        'magistuarmory:wood_zweihander',
        'magistuarmory:wood_flamebladedsword',
        'magistuarmory:wood_lochaberaxe',
        'magistuarmory:wood_concavehalberd',
        'magistuarmory:wood_heavywarhammer',
        'magistuarmory:wood_lucernhammer',
        'magistuarmory:stone_stylet',
        'magistuarmory:stone_shortsword',
        'magistuarmory:stone_pike',
        'magistuarmory:stone_ranseur',
        'magistuarmory:stone_ahlspiess',
        'magistuarmory:stone_chivalrylance',
        'magistuarmory:stone_estoc',
        'magistuarmory:stone_zweihander',
        'magistuarmory:stone_flamebladedsword',
        'magistuarmory:stone_lochaberaxe',
        'magistuarmory:stone_concavehalberd',
        'magistuarmory:stone_heavywarhammer',
        'magistuarmory:stone_lucernhammer',
        'magistuarmory:iron_stylet',
        'magistuarmory:iron_shortsword',
        'magistuarmory:iron_pike',
        'magistuarmory:iron_ranseur',
        'magistuarmory:iron_ahlspiess',
        'magistuarmory:iron_chivalrylance',
        'magistuarmory:iron_estoc',
        'magistuarmory:iron_zweihander',
        'magistuarmory:iron_flamebladedsword',
        'magistuarmory:iron_lochaberaxe',
        'magistuarmory:iron_concavehalberd',
        'magistuarmory:iron_heavywarhammer',
        'magistuarmory:iron_lucernhammer',
        'magistuarmory:messer_sword',
        'magistuarmory:gold_stylet',
        'magistuarmory:gold_shortsword',
        'magistuarmory:gold_pike',
        'magistuarmory:gold_ranseur',
        'magistuarmory:gold_ahlspiess',
        'magistuarmory:gold_chivalrylance',
        'magistuarmory:gold_estoc',
        'magistuarmory:gold_zweihander',
        'magistuarmory:gold_flamebladedsword',
        'magistuarmory:gold_lochaberaxe',
        'magistuarmory:gold_concavehalberd',
        'magistuarmory:gold_heavywarhammer',
        'magistuarmory:gold_lucernhammer',
        'magistuarmory:diamond_stylet',
        'magistuarmory:diamond_shortsword',
        'magistuarmory:diamond_pike',
        'magistuarmory:diamond_ranseur',
        'magistuarmory:diamond_ahlspiess',
        'magistuarmory:diamond_chivalrylance',
        'magistuarmory:diamond_estoc',
        'magistuarmory:diamond_zweihander',
        'magistuarmory:diamond_flamebladedsword',
        'magistuarmory:diamond_lochaberaxe',
        'magistuarmory:diamond_concavehalberd',
        'magistuarmory:diamond_heavywarhammer',
        'magistuarmory:diamond_lucernhammer',
        'magistuarmory:netherite_stylet',
        'magistuarmory:netherite_shortsword',
        'magistuarmory:netherite_pike',
        'magistuarmory:netherite_ranseur',
        'magistuarmory:netherite_ahlspiess',
        'magistuarmory:netherite_chivalrylance',
        'magistuarmory:netherite_estoc',
        'magistuarmory:netherite_zweihander',
        'magistuarmory:netherite_flamebladedsword',
        'magistuarmory:netherite_lochaberaxe',
        'magistuarmory:netherite_concavehalberd',
        'magistuarmory:netherite_heavywarhammer',
        'magistuarmory:netherite_lucernhammer',
        'magistuarmory:silver_stylet',
        'magistuarmory:silver_shortsword',
        'magistuarmory:silver_pike',
        'magistuarmory:silver_ranseur',
        'magistuarmory:silver_ahlspiess',
        'magistuarmory:silver_chivalrylance',
        'magistuarmory:silver_estoc',
        'magistuarmory:silver_zweihander',
        'magistuarmory:silver_flamebladedsword',
        'magistuarmory:silver_lochaberaxe',
        'magistuarmory:silver_concavehalberd',
        'magistuarmory:silver_heavywarhammer',
        'magistuarmory:silver_lucernhammer',
        'magistuarmory:steel_stylet',
        'magistuarmory:steel_shortsword',
        'magistuarmory:steel_pike',
        'magistuarmory:steel_ranseur',
        'magistuarmory:steel_ahlspiess',
        'magistuarmory:steel_chivalrylance',
        'magistuarmory:steel_estoc',
        'magistuarmory:steel_zweihander',
        'magistuarmory:steel_flamebladedsword',
        'magistuarmory:steel_lochaberaxe',
        'magistuarmory:steel_concavehalberd',
        'magistuarmory:steel_heavywarhammer',
        'magistuarmory:steel_lucernhammer',
        'aquaculture:wooden_fillet_knife',
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_shovel',
        'aquaculture:neptunium_pickaxe',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunium_hoe',
        'aquaculture:neptunium_fillet_knife',

    ]

    event.addAdvanced(tools, (item, advanced, text) => {
        if (!item.hasNBT()) { return }
        if (item.nbt.Rusted) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Rusted').red()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Damage').red()
            ])

        } else if (item.nbt.Clumsy) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Clumsy').red()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-5% Dig Speed').red()
            ])
            text.add([
                Text.of('-5% Attack Speed').red()
            ])
        } else if (item.nbt.Elegant) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Elegant').aqua()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+15% Dig Speed').blue()
            ])
            text.add([
                Text.of('+15% Attack Speed').blue()
            ])
        } else if (item.nbt.Broken) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Broken').darkGray()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-15% Attack Damage').red()
            ])

        } else if (item.nbt.Short) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Short').red()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-1 Reach Distance').red()
            ])
        } else if (item.nbt.Thin) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thin').yellow()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()
            ])
            text.add([
                Text.of('-5% Attack Damage').red()
            ])

        } else if (item.nbt.Pokey) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Pokey').yellow()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('+5% Attack Damage').blue()
            ])
        } else if (item.nbt.Vicious) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Vicious').yellow()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+15% Attack Damage').blue()
            ])
            text.add([
                Text.of('-0.5 Reach Distance').red()
            ])
        } else if (item.nbt.Long) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Long').blue()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])

            text.add([
                Text.of('+0.5 Reach Distance').blue()
            ])
        } else if (item.nbt.Keen) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Keen').blue()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()
            ])

        } else if (item.nbt.Sweeping) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Sweeping').aqua()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+20% Attack Speed').blue()
            ])
            text.add([
                Text.of('+0.5 Reach Distance').blue()
            ])
        } else if (item.nbt.Legendary) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Legendary').lightPurple()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+10% Dig Speed').blue()
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()
            ])
            text.add([
                Text.of('+15% Attack Damage').blue()
            ])
            text.add([
                Text.of('+0.5 Reach Distance').blue()
            ])
        } else if (item.nbt.Worthless) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Worthless').darkRed()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Damage').red()
            ])
            text.add([
                Text.of('-1 Reach Distance').red()
            ])
        } else if (item.nbt.Broad) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Broad').yellow()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-5% Dig Speed').red()
            ])
            text.add([
                Text.of('-5% Attack Speed').red()
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()
            ])

        } else if (item.nbt.Bulky) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Bulky').darkGray()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-15% Dig Speed').red()
            ])
            text.add([
                Text.of('-15% Attack Speed').red()
            ])
        } else if (item.nbt.Sharp) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Sharp').blue()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()
            ])
        } else if (item.nbt.Chipped) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Chipped').red()
            ])
            text.add([
                Text.of('When in main hand:').gray()
            ])
            text.add([
                Text.of('-5% Attack Speed').red()
            ])
            text.add([
                Text.of('-5% Attack Damage').red()
            ])
        }
    })
})



