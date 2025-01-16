/** Register Items */
StartupEvents.registry('item', event => {
    // Race Rings
    event.create('dragon_ring').maxStackSize(1).displayName('§6Ring of Fire Dragons')
    event.create('ring_of_faeles').maxStackSize(1).displayName('§6Ring Of Faeles')
    event.create('fairy_ring').maxStackSize(1).displayName('§6Ring of Fairies')
    event.create('elf_ring').maxStackSize(1).displayName('§6Ring of the Elves')
    event.create('lightning_dragon_ring').maxStackSize(1).displayName('§6Ring of Lightning Dragons')
    event.create('ocean_dragon_ring').maxStackSize(1).displayName('§6Ring of Ocean Dragons')
    event.create('titan_ring').maxStackSize(1).displayName('§6Ring of Titans')

    // Custom Trinket items
    event.create('magicmirror:magicmirror').maxStackSize(1).displayName('Magic Mirror')
    event.create('spectral_silt').displayName('§eSpectral Silt')
    event.create('disintegration_tablet').maxStackSize(1).displayName('§cDisintegration Tablet')

    // Optional Custom Crafting Items
    event.create('glowing_ingot').displayName('§6Glowing ingot')

    // Custom NoTreePunching items
    event.create('grass_fiber').displayName('Grass Fiber')
    event.create('flint_shard').displayName('Flint Shard')
    event.create('grass_string').displayName('Grass String')
    event.create('flint_hatchet', 'axe').displayName('Flint Hatchet')
        .tier('flint').unstackable()
    event.create('flint_pickaxe', 'pickaxe').displayName('Flint Pickaxe')
        .tier('flint').unstackable()
    event.create('flint_shovel', 'shovel').displayName('Flint Shovel')
        .tier('flint').unstackable()
    event.create('flint_hoe', 'hoe').displayName('Flint Hoe')
        .tier('flint').unstackable()
    event.create('flint_knife', 'sword').displayName('Flint Knife')
        .tier('flint').unstackable()
    event.create('bronze_knife', 'sword').displayName('Bronze Knife')
        .tier('bronze').unstackable()
    event.create('copper_knife', 'sword').displayName('Copper Knife')
        .tier('copper').unstackable()
    event.create('diamond_knife', 'sword').displayName('Diamond Knife')
        .tier('diamond').unstackable()
    event.create('gold_knife', 'sword').displayName('Gold Knife')
        .tier('gold').unstackable()
    event.create('iron_knife', 'sword').displayName('Iron Knife')
        .tier('iron').unstackable()
    event.create('steel_knife', 'sword').displayName('Steel Knife')
        .tier('steel').unstackable()
    event.create('bronze_saw', 'axe').displayName('Bronze Saw')
        .tier('bronze').unstackable()
    event.create('copper_saw', 'axe').displayName('Copper Saw')
        .tier('copper').unstackable()
    event.create('diamond_saw', 'axe').displayName('Diamond Saw')
        .tier('diamond').unstackable()
    event.create('gold_saw', 'axe').displayName('Gold Saw')
        .tier('gold').unstackable()
    event.create('iron_saw', 'axe').displayName('Iron Saw')
        .tier('iron').unstackable()
    event.create('steel_saw', 'axe').displayName('Steel Saw')
        .tier('steel').unstackable()

    /** Misc */

    // Custom grave scroll item
    event.create('grave_scroll').displayName('Grave Scroll')
        .use((level, player, hand) => true)
        .useAnimation("bow")
        .useDuration((itemstack) => 64)
        .finishUsing((itemstack, level, entity) => {
            if (entity.player) global.gravescroll(entity)
            return itemstack;
        })
    // Custom recall potion
    event.create('recall_potion').displayName('Recall Potion')
        .maxStackSize(8)
        .use((level, player, hand) => true)
        .useAnimation("drink")
        .useDuration((itemstack) => 32)
        .finishUsing((itemstack, level, entity) => {
            if (entity.player) global.recall(entity)
            return itemstack;
        })
    // Custom Wildberry Wine item that increases potion effect levels
    event.create('wildberry_wine').displayName('Wildberry Wine')
        .use((level, player, hand) => true)
        .useAnimation("drink")
        .useDuration((itemstack) => 24)
        .finishUsing((itemstack, level, entity) => {
            if (entity.player) global.wine(entity)
            return itemstack;
        })
})
/** Register Blocks */
StartupEvents.registry('block', event => {
    event.create('reforging_station')
        .property(BlockProperties.FACING)
        .displayName('Reforging Station')
        .soundType('anvil')
        .hardness(16)
        .tagBlock('minecraft:mineable/pickaxe')
        .requiresTool(true)
        .defaultCutout()
})
/** Register Effects */
StartupEvents.registry('mob_effect', event => {
    event.create('true_shot')
        .beneficial().color(Color.GREEN)
    event.create('faeles_power').beneficial().modifyAttribute('minecraft:generic.attack_damage',
        'e0f4e796-3d3d-11ee-be56-0242ac120002',
        1,
        "multiply_base").color(Color.YELLOW)
})
/** Register Sound Events */
StartupEvents.registry('sound_event', event => {
    event.create('minecraft:dragonfire_breath')
    event.create('minecraft:lightning_breath')
    event.create('minecraft:waterdragon_breath')
    event.create('minecraft:ambient.flap')
    event.create('minecraft:teleport')
    event.create('minecraft:craftsaw')
    event.create('minecraft:knapping')
})
/** Custom Item Tiers */
ItemEvents.toolTierRegistry(event => {
    event.add('flint', tier => {
        tier.uses = 32
        tier.speed = 2
        tier.attackDamageBonus = 1.0
        tier.level = 0
        tier.enchantmentValue = 5
        tier.repairIngredient = 'minecraft:flint'
    })
    event.add('bronze', tier => {
        tier.uses = 500
        tier.speed = 6
        tier.attackDamageBonus = 2.0
        tier.level = 3
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/bronze'
    })
    event.add('copper', tier => {
        tier.uses = 128
        tier.speed = 5
        tier.attackDamageBonus = 2.0
        tier.level = 2
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/copper'
    })
    event.add('steel', tier => {
        tier.uses = 750
        tier.speed = 8
        tier.attackDamageBonus = 3.0
        tier.level = 3
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/steel'
    })
})

/** Attribute Registry */
let RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")
StartupEvents.registry("attribute", event => {
    event.createCustom("qualitytools:jump_power", () => new RangedAttribute("attribute.name.jump_power", 0, 0, 1024.0).setSyncable(true))
    event.createCustom("qualitytools:break_speed", () => new RangedAttribute("attribute.name.break_speed", 0, 0, 1024.0).setSyncable(true))
})