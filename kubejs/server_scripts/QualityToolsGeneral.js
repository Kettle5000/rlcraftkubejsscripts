/** Tool's Default Attributes */
let attributes = [];
if (global.ATTRIBUTE_LIST && global.ATTRIBUTE_LIST.Tools) {
    global.ATTRIBUTE_LIST.Tools
        .forEach(attr => attributes.push(attr.id.toLowerCase()));
}
/**
 * 
 * @param {Internal.SimplePlayerEventJS} event 
 */
global.onUpdateAbilities = event => {

}
/**
 * 
 * @param {Internal.SimplePlayerEventJS} event 
 * @param {Internal.ItemStack} item 
 */
function updatePowers(event, item) {
    global.onUpdateAbilities(event)
    attributes.forEach(attribute => {
        let /**@type {string} */ a = attribute.toString()
        if (item.nbt[a.slice(0, 1).toUpperCase() + attribute.slice(1)]) {
            global.grantPower(event.player, `qualitytools:qualitytools/tools/${a}/${a}`)
        } else {
            global.revokePower(event.player, `qualitytools:qualitytools/tools/${a}/${a}`)
        }
    });
}
/** Simply cancel any item interaction with the reforging station to avoid equipping items when using */
ItemEvents.rightClicked(event => {
    if (event.target.block && event.target.block.id == 'kubejs:reforging_station') {
        event.player.sendData('cancelblockevent');
        event.cancel()
    }
})
/** Reforging station's use cooldown tag init */
PlayerEvents.loggedIn(event => {
    if (!event.player.persistentData.TimeStall) event.player.persistentData.TimeStall = 0
})
/**General ticking */
PlayerEvents.tick(event => {
    let { player } = event;
    let item = event.player.getHeldItem('main_hand');
    /**Cooldown ticker for right click/left clicking reforging station with a reforgable item */
    if (player.persistentData.TimeStall > 0) {
        player.persistentData.TimeStall--;
    }
    /** Periodically check player's mainhand item and update tool attribute powers */
    if ([0, 5, 10, 15, 20].includes(player.age % 20)) {
        if (item.hasNBT()) {
            updatePowers(event, item);
        } else {
            attributes.forEach(attribute => {
                let /**@type {string} */ a = attribute.toString()
                global.revokePower(event.player, `qualitytools:qualitytools/tools/${a}/${a}`)
            });
        }
    }
})


