const $OriginsClient = Java.loadClass('io.github.apace100.origins.OriginsClient')
ItemEvents.tooltip(event => {
    event.addAdvanced(['kubejs:dragon_ring'], (item, advanced, text) => {
        let key = $OriginsClient.usePrimaryActivePowerKeybind.key.displayName.string
        if (!event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Breath Fire at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Fire Resistance').gold(),
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [Text.of('Hold ').gold(),
            Text.of('[Shift] ').yellow(),
            Text.of('to see buffs.').gold()
            ])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Breath Fire at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Fire Resistance').gold(),
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+25% ').green(),
                Text.of('Attack Damage').blue()
            ])
            text.add(7, [
                Text.of('+25% ').green(),
                Text.of('Health').blue()
            ])
            text.add(8, [
                Text.of('+50% ').green(),
                Text.of('Armor Toughness').blue()
            ])
            text.add(9, [
                Text.of('-25% ').red(),
                Text.of('Swim Speed').blue()
            ])
        }
    })
    event.addAdvanced(['kubejs:fairy_ring'], (item, advanced, text) => {
        if (!event.isShift()) {
            text.add(1, [
                Text.of('25% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Grants Creative Flight').gold(),
            ])
            text.add(3, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see buffs.').gold()])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('25% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Grants Creative Flight').gold(),
            ])
            text.add(3, [
                Text.of('While equipped:').white()
            ])
            text.add(4, [
                Text.of('+2 ').green(),
                Text.of('Luck').blue()
            ])
            text.add(5, [
                Text.of('-75% ').red(),
                Text.of('Attack Damage').blue()
            ])
            text.add(6, [
                Text.of('-75% ').red(),
                Text.of('Health').blue()
            ])
            text.add(7, [
                Text.of('-50% ').red(),
                Text.of('Armor').blue()
            ])
            text.add(8, [
                Text.of('-25% ').red(),
                Text.of('Armor Toughness').blue()
            ])
            text.add(9, [
                Text.of('-75% ').red(),
                Text.of('Movement Speed').blue()
            ])
            text.add(10, [
                Text.of('-25% ').red(),
                Text.of('Swim Speed').blue()
            ])
        }
    })
    event.addAdvanced(['kubejs:ocean_dragon_ring'], (item, advanced, text) => {
        let key = $OriginsClient.usePrimaryActivePowerKeybind.key.displayName.string
        if (!event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to cast Water Breath at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Water Breathing').gold()
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see buffs.').gold()])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to cast Water Breath at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Press ').lightPurple(),
                Text.of('<Jump> ').yellow(),
                Text.of('while in mid air to flap your wings').lightPurple()
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+25% ').green(),
                Text.of('Health').blue()
            ])
            text.add(7, [
                Text.of('+50% ').green(),
                Text.of('Armor Toughness').blue()
            ])
            text.add(8, [
                Text.of('+50% ').green(),
                Text.of('Swim Speed').blue()
            ])
            text.add(9, [
                Text.of('+25% ').green(),
                Text.of('Max Mana').blue()
            ])
            text.add(10, [
                Text.of('+25% ').green(),
                Text.of('Magic Damage').blue()
            ])
            text.add(11, [
                Text.of('+25% ').green(),
                Text.of('Magic Warding').blue()
            ])
            text.add(12, [
                Text.of('-25% ').red(),
                Text.of('Attack Damage').blue()
            ])
        }
    })
    event.addAdvanced(['kubejs:lightning_dragon_ring'], (item, advanced, text) => {
        let key = $OriginsClient.usePrimaryActivePowerKeybind.key.displayName.string
        if (!event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Breath Lightning at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Lightning Resistance').gold(),
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [Text.of('Hold ').gold(), Text.of('[Shift] ').yellow(), Text.of('to see buffs.').gold()])
        } else if (event.isShift()) {
            text.add(1, [
                Text.of('120% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Press').gold(),
                Text.of(' <').yellow(),
                Text.of(key).yellow(),
                Text.of('> ').yellow(),
                Text.of('to Breath Lightning at the cost of ').gold(),
                Text.of('Energy').aqua()
            ])
            text.add(3, [
                Text.of('Grants Lightning Resistance').gold(),
            ])
            text.add(4, [
                Text.of('Grants Night Vision Above 25% ').darkAqua(),
                Text.of('Energy').aqua()
            ])
            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+25% ').green(),
                Text.of('Attack Damage').blue()
            ])
            text.add(7, [
                Text.of('+25% ').green(),
                Text.of('Health').blue()
            ])
            text.add(8, [
                Text.of('+50% ').green(),
                Text.of('Armor Toughness').blue()
            ])
            text.add(9, [
                Text.of('-25% ').red(),
                Text.of('Swim Speed').blue()
            ])
        }
    })
    event.addAdvanced(['kubejs:titan_ring'], (item, advanced, text) => {
        let keymap = $OriginsClient.usePrimaryActivePowerKeybind
        let key = keymap.key.displayName.string
        let key2 = keymap.key.displayName.string
        if (!event.isShift()) {

            text.add(1, [
                Text.of('300% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Unable to Wear Weak Armor').darkRed(),
            ])
            text.add(3, [
                Text.of('Sinks in Water').darkRed(),
            ])
            text.add(4, [
                Text.of('Hold ').gold(),
                Text.of('[Shift] ').yellow(),
                Text.of('to see buffs.').gold()
            ])

        } else if (event.isShift()) {
            text.add(1, [
                Text.of('300% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Unable to Wear Weak Armor').darkRed(),
            ])
            text.add(3, [
                Text.of('Sinks in Water').darkRed(),
            ])
            text.add(4, [
                Text.of('While equipped:').white()
            ])
            text.add(5, [
                Text.of('+100% ').green(),
                Text.of('Health').blue()
            ])
            text.add(6, [
                Text.of('+100% ').green(),
                Text.of('Entity Reach').blue()
            ])
            text.add(7, [
                Text.of('+100% ').green(),
                Text.of('Attack Damage').blue()
            ])
            text.add(8, [
                Text.of('+75% ').green(),
                Text.of('Knockback Resistance').blue()

            ])
            text.add(9, [
                Text.of('+75% ').green(),
                Text.of('Jump Height').blue()

            ])
            text.add(10, [
                Text.of('+50% ').green(),
                Text.of('Block Reach').blue()
            ])
            text.add(11, [
                Text.of('+25% ').green(),
                Text.of('Movement Speed').blue()
            ])
            text.add(12, [
                Text.of('+1.4 ').green(),
                Text.of('Step Height').blue()
            ])
            text.add(13, [
                Text.of('-50% ').red(),
                Text.of('Attack Speed').blue()
            ])


        }
    })
    event.addAdvanced(['kubejs:ring_of_faeles'], (item, advanced, text) => {
        if (!event.isShift()) {

            text.add(1, [
                Text.of('75% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Increased Damage in Bare-Handed Combat').gold(),
            ])
            text.add(3, [
                Text.of('Negates Fall Damage').gold(),
            ])

            text.add(4, [
                Text.of('Speed Debuff When Wearing "Heavy" Armor').darkRed(),
            ])

            text.add(5, [
                Text.of('Hold ').gold(),
                Text.of('[Shift] ').yellow(),
                Text.of('to see buffs.').gold()
            ])

        } else if (event.isShift()) {
            text.add(1, [
                Text.of('75% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Increased Damage in Bare-Handed Combat').gold(),
            ])
            text.add(3, [
                Text.of('Negates Fall Damage').gold(),
            ])

            text.add(4, [
                Text.of('Speed Debuff When Wearing "Heavy" Armor').darkRed(),
            ])
            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+150% ').green(),
                Text.of('Jump Height').blue()
            ])
            text.add(7, [
                Text.of('+30% ').green(),
                Text.of('Movement Speed').blue()
            ])

            text.add(8, [
                Text.of('+60% ').green(),
                Text.of('Water Visibility').blue()

            ])
            text.add(9, [
                Text.of('+75% ').green(),
                Text.of('Jump Height').blue()

            ])
            text.add(10, [
                Text.of('-20% ').red(),
                Text.of('Health').blue()
            ])

        }
    })
    event.addAdvanced(['kubejs:elf_ring'], (item, advanced, text) => {
        if (!event.isShift()) {

            text.add(1, [
                Text.of('110% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Speed Strength and Ranged Boost in Forests').gold(),
            ])
            text.add(3, [
                Text.of('Negates Fall Damage in Forests').gold(),
            ])
            text.add(4, [
                Text.of('Slowly Regenerate Health Around Grass Blocks').green(),
            ])



            text.add(5, [
                Text.of('Hold ').gold(),
                Text.of('[Shift] ').yellow(),
                Text.of('to see buffs.').gold()
            ])

        } else if (event.isShift()) {
            text.add(1, [
                Text.of('110% Entity size').gold(),
            ])
            text.add(2, [
                Text.of('Speed Strength and Ranged Boost in Forests').gold(),
            ])
            text.add(3, [
                Text.of('Negates Fall Damage in Forests').gold(),
            ])
            text.add(4, [
                Text.of('Slowly Regenerate Health Around Grass Blocks').green(),
            ])


            text.add(5, [
                Text.of('While equipped:').white()
            ])
            text.add(6, [
                Text.of('+8 ').green(),
                Text.of('Ranged Damage').blue()
            ])
            text.add(7, [
                Text.of('-25% ').red(),
                Text.of('Attack Damage').blue()
            ])
            text.add(8, [
                Text.of('-50% ').red(),
                Text.of('Fire Resistance').blue()

            ])



        }
    })

})

