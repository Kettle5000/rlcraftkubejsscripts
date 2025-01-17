/**Curios Equip Event - Ran when a player attempts to equip a curio */
ForgeEvents.onEvent("top.theillusivec4.curios.api.event.CurioEquipEvent", event =>
    global.curiosprevent(event))

/** Curios Change Event = Ran when a player changes a curio giving the to/from itemstacks */
ForgeEvents.onEvent("top.theillusivec4.curios.api.event.CurioChangeEvent", event =>
    global.updateCuriosPowers(event.entity))

/** Living Equipment Change Event = Ran when a player changes their equipped items (leggings, boots, etc.) */
ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEquipmentChangeEvent', event =>
    global.reloadAttributes(event.entity))

/** Living Hurt Event - Needed for changing the damage result which the KubeJS hurt event is unable to do */
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", event =>
    global.livingHurt(event))


ForgeEvents.onEvent("net.minecraftforge.event.AddReloadListenerEvent", event => {
    global.reload()
})
ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed", event => global.break(event))
JsonIO.write("config/forge_events_loaded.json", { serverLoaded: false, clientLoaded: false })

/** MobEffectEvent events to handle armor sets inmunity  */
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", event =>
    global.mobEffectsEvent(event))
