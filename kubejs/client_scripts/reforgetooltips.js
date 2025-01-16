ItemEvents.tooltip(event => {
    let b = true
    if (b) return
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Prospecting) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Prospecting').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Dig Speed').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Clunky) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Clunky').darkGray()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('-5% Dig Speed').red()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('-5% Attack Speed').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Healthy) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Healthy').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+2 Max Health').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Aiming) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Aiming').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Projectile Damage').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Undying) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Undying').lightPurple()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Damage Resistance').blue()
            ])
            text.add([
                Text.of('+2 Max Health').blue()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Punishing) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Punishing').lightPurple()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Projectile Damage').blue()
            ])
            text.add([
                Text.of('+3% Attack Damage').blue()
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Focusing) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Focusing').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()
            ])
            text.add([
                Text.of('+0.5 MP Regen').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Arcane) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').lightPurple()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()
            ])
            text.add([
                Text.of('+1 MP Regen').blue()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Flailing) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Flailing').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Attack Speed').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Lucky) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Lucky').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+0.2 Luck').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Athletic) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Athletic').aqua()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+5% Speed').blue()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Horrible) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Horrible').darkGray()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('-5% Projectile Damage').red()
            ])
            text.add([
                Text.of('-5% Attack Damage').red()
            ])
            text.add([
                Text.of('-5% Magic Damage').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Graceful) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Graceful').aqua()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Dig Speed').blue()
            ])
            text.add([
                Text.of('+3% Attack Speed').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Unlucky) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Unlucky').red()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('-0.2 Luck').red()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Strengthening) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Strengthening').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Attack Damage').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Speedy) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Speedy').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+5% Speed').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Armored) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Armored').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+3% Damage Resistance').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Shielding) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Shielding').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        }
    })
    event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")).itemIds, (item, advanced, text) => {
        if (item.hasNBT() && item.nbt.Springy) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Springy').blue()
            ])
            text.add([
                Text.of('When in any curios slot:').gray()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
        }
    })
    event.addAdvanced('kubejs:reforging_station', (item, advanced, text) => {


        text.add([
            Text.of('Used to Reforge Items').gray(),
        ])
        text.add([
            Text.of('Right/Left click ').blue(),
            Text.of('with any ').blue(),
            Text.of('Curios/Armor ').darkAqua()
        ])
        text.add([
            Text.of('or ').darkAqua()
        ])

        text.add([
            Text.of('Right click ').blue(),
            Text.of('with any ').blue(),
            Text.of('Weapon/Tool ').darkAqua()
        ])
        text.add([
            Text.of('to see reforge ingredient!').blue()
        ])

    })
})

