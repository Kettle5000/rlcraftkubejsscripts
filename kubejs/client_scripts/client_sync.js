let datapackets = [
    'knapping',
    'grave_scroll',
    'magicmirror',
    'shear',
    'cancelblockevent',
    "clientReload"
]
global.ATTRIBUTE_LIST = {};
let ATTRIBUTE_JSON_PATH = "config/QualityTools.json";
let loadedData = JsonIO.read(ATTRIBUTE_JSON_PATH)
datapackets.forEach(element => {
    NetworkEvents.dataReceived(element, event => {
        if (element == 'knapping') Client.player.playNotifySound("minecraft:knapping", "blocks", 1, 1)
        if (element == 'grave_scroll') Client.player.playNotifySound("minecraft:block.portal.trigger", "players", 1, 1)
        if (element == 'magicmirror') Client.player.playNotifySound("minecraft:teleport", "players", 1, 1)
        if (element == 'shear') Client.player.playNotifySound("minecraft:entity.sheep.shear", "players", 1, 1)
        if (element == 'cancelblockevent') event.player.persistentData.CancelBlockeEvent = 1
        if (element == "clientReload") loadOrGenerateAttributes()
    })
});
BlockEvents.rightClicked(event => {
    const { player, block } = event;
    if (!player.persistentData.CancelBlockeEvent) player.persistentData.CancelBlockeEvent = 0
    if (player.persistentData.CancelBlockeEvent > 0) {
        player.persistentData.CancelBlockeEvent = 0
        event.cancel()
    }
})
BlockEvents.leftClicked(event => {
    const { player, block } = event;
    if (!player.persistentData.CancelBlockeEvent) player.persistentData.CancelBlockeEvent = 0
    if (player.persistentData.CancelBlockeEvent > 0) {
        player.persistentData.CancelBlockeEvent = 0
        event.cancel()
    }
})
ItemEvents.rightClicked(event => {
    const { player, block } = event;
    if (event.target.block && event.target.block.id == 'kubejs:reforging_station') return event.cancel()
    if (!player.persistentData.CancelBlockeEvent) player.persistentData.CancelBlockeEvent = 0
    if (player.persistentData.CancelBlockeEvent > 0) {
        player.persistentData.CancelBlockeEvent = 0
        event.cancel()
    }
})
ItemEvents.rightClicked(event => {
    const { player, player: { mainHandItem, offHandItem } } = event;
    if (mainHandItem.id !== 'minecraft:air' && offHandItem.id !== 'minecraft:air' &&
        offHandItem.count > 0 && mainHandItem.count > 0 && mainHandItem.hasTag('kubejs:knives')) {
        offHandItem.count--;
    }
});

ClientEvents.loggedIn(event => loadOrGenerateAttributes())
/**
 * Load or generate attributes and update `data` and `ATTRIBUTE_LIST`.
 */
function loadOrGenerateAttributes() {
    console.log("reloading client attributes...");
    let data = JsonIO.read(ATTRIBUTE_JSON_PATH);
    if (!data || Object.keys(data).length === 0) {
        return;
    }
    let attributeObject = {
        Armor: [],
        Tools: [],
        Curios: [],
    };
    Object.keys(data).forEach(section => {
        if (Array.isArray(data[section])) {
            data[section].forEach(attr => {
                attributeObject[section].push(attr);
            });
        }
    });
    global.ATTRIBUTE_LIST = attributeObject;
}
loadOrGenerateAttributes()