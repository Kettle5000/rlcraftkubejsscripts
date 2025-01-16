ItemEvents.tooltip(event => {
    let b = true
    if (b) { return }
    event.addAdvanced(Ingredient.custom(item => item.hasTag("forge:armors/leggings")).itemIds, (item, advanced, text) => {
        if (!item.nbt) { return }
        if (item.nbt.Arcanel) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item.nbt.Dentedl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-2 Locational Armor').red()
            ])
        } else if (item.nbt.Heavyl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item.nbt.Springyl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Springy').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
        } else if (item.nbt.Masterfull) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Toughl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item.nbt.Thickl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Protectivel) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Crumblingl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-1 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(item => item.hasTag("forge:armors/chestplates")).itemIds, (item, advanced, text) => {
        if (!item.nbt) { return }
        if (item.nbt.Arcanec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item.nbt.Heavyc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item.nbt.Cumbersomec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Cumbersome').darkGray()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Speed').red()
            ])
        } else if (item.nbt.Solidc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Solid').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+0.5 Knockback Resistance').blue()
            ])
        } else if (item.nbt.Masterfulc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
            text.add([
                Text.of('+0.5 Knockback Resistance').blue()
            ])
        } else if (item.nbt.Toughc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item.nbt.Thickc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Protectivec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Crumblingc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-1 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item.nbt.Dentedc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-2 Locational Armor').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(item => item.hasTag("forge:armors/helmets")).itemIds, (item, advanced, text) => {
        if (!item.nbt) { return }
        if (item.nbt.Arcaneh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When equipped:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item.nbt.Crumblingh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-6 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item.nbt.Thickh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item.nbt.Luckyh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Lucky').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+0.5 Luck').blue()
            ])
        } else if (item.nbt.Masterfulh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+0.5 Luck').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item.nbt.Toughh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item.nbt.Protectiveh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item.nbt.Dentedh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-4 Locational Armor').red()
            ])
        } else if (item.nbt.Heavyh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(item => item.hasTag("forge:armors/boots")).itemIds, (item, advanced, text) => {
        if (!item.nbt) { return }
        if (item.nbt.Crumblingb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-4.5 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item.nbt.Dentedb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-3 Locational Armor').red()
            ])
        } else if (item.nbt.Arcaneb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item.nbt.Speedyb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Speedy').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+10% Speed').blue()
            ])
        } else if (item.nbt.Tallb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tall').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+0.5 Step Height').blue()
            ])
        } else if (item.nbt.Masterfulb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+0.5 Step Height').blue()
            ])
            text.add([
                Text.of('+10% Speed').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        } else if (item.nbt.Toughb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item.nbt.Thickb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        } else if (item.nbt.Heavyb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item.nbt.Protectiveb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        }
    })
})