let LOADED_JSON_PATH = "config/forge_events_loaded.json";
let $MinecraftForge = Java.loadClass("net.minecraftforge.common.MinecraftForge")
let loadedData = JsonIO.read(LOADED_JSON_PATH)
/**Without this hard check it will keep on adding duplicate forge event listeners */
if (loadedData && !loadedData.serverLoaded) {
    $MinecraftForge.EVENT_BUS.addListener('LOW', false, Java.loadClass("net.minecraftforge.event.AddReloadListenerEvent"), event => {
        global.reloadServer(event);
    });
    $MinecraftForge.EVENT_BUS.addListener('LOW', false, Java.loadClass("net.minecraftforge.event.entity.player.PlayerSetSpawnEvent"), event => {
        global.setSpawn(event);
    });
    loadedData.serverLoaded = true;
    JsonIO.write(LOADED_JSON_PATH, loadedData);
    console.log("Forge event listeners registered once.");
}
Java.loadClass("net.minecraftforge.event.entity.player.PlayerSetSpawnEvent")
/**
 * 
 * @param {Internal.PlayerSetSpawnEvent} event 
 */
global.setSpawn = event => {
    try {
        if (!event.entity.persistentData.SettingWaystoneSpawn) event.entity.persistentData.SettingWaystoneSpawn = 0
        if (event.entity.persistentData.SettingWaystoneSpawn == 0) {
            event.entity.persistentData.remove("kubejs_waystone_spawn");
        } else {
            event.entity.persistentData.SettingWaystoneSpawn = 0
        }
    } catch (error) {
        console.log(error)
    }
}
