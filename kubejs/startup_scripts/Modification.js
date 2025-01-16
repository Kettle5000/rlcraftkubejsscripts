// priority: 0

// Remove this if we are not using the custom NoTreePunching logic
/** Block Modification */
BlockEvents.modification(e => {
	e.modify('/.plank/', block => {
		block.requiresTool = true
	})
	e.modify('/.log/', block => {
		block.requiresTool = true
	})
	e.modify('/.wood/', block => {
		block.requiresTool = true
	})
	e.modify('/.*/', block => {
		block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime() / 0.5
	})
})

/** Modify Items */
ItemEvents.modification(event => {
	event.modify("minecraft:splash_potion", item => { item.setMaxStackSize(8) })
	event.modify("minecraft:potion", item => { item.setMaxStackSize(8) })
	event.modify("minecraft:saddle", item => { item.setMaxStackSize(8) })
	event.modify("minecraft:lingering_potion", item => { item.setMaxStackSize(8) })
	event.modify("minecraft:enchanted_book", item => { item.setMaxStackSize(8) })
})

EntityJSEvents.modifyEntity(event => {
	event.modify("player", builder => {
		builder.jumpBoostPower(entity => global.setBlockJumpFactor(entity))
		builder.tick(entity => global.tick(entity))
	})
})
EntityJSEvents.attributes(event => {
	event.modify("player", builder => {
		builder.add("qualitytools:jump_power", 0)
		builder.add("qualitytools:break_speed", 0)
	})
})