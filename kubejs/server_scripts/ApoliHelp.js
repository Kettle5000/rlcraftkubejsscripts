/**
 * We use these methods manually because using commands to grant powers adds unnecessary overhead.
 */

let ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
let IPowerContainer = Java.loadClass("io.github.edwinmindcraft.apoli.api.component.IPowerContainer");
let ConfiguredPower = Java.loadClass("io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower");
let ApoliAPI = Java.loadClass("io.github.edwinmindcraft.apoli.api.ApoliAPI")
let $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey")
let CONFIGUREDPOWER = $ResourceKey.createRegistryKey("apoli:configured_power")
/**
 * Grants a power to a LivingEntity.
 * 
 * @param {Internal.Player} target - The target LivingEntity to grant the power to.
 * @param {string} powerIdentifier - The identifier of the power (e.g., "modid:powername").
 * @returns {boolean} - Returns true if the power was successfully granted; false otherwise.
 */
global.grantPower = (target, powerIdentifier) => {
    try {
        if (!target || !target.player) {
            return false;
        }
        let livingEntity = target
        let powerKey = new ResourceLocation(powerIdentifier);
        let powerSource = new ResourceLocation("apoli:command");
        let optionalContainer = IPowerContainer.get(livingEntity);
        if (optionalContainer.isPresent()) {
            let powerContainer = optionalContainer.resolve().get();
            let powers = ApoliAPI.getPowers(target.server)
            let resourceKey = $ResourceKey.create(CONFIGUREDPOWER, Utils.id(powerKey))
            let optionalInstance = powers.getHolder(resourceKey)
            if (optionalInstance.isEmpty() || !optionalInstance.get().isBound()) {
                return false;
            }
            if (!powerContainer.hasPower(powerKey, powerSource)) {
                powerContainer.addPower(powerKey, powerSource)
                powerContainer.sync();
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        return false;
    }
}


/**
 * Revokes a power from a LivingEntity.
 * 
 * @param {Internal.Player} target - The target LivingEntity to revoke the power from.
 * @param {string} powerIdentifier - The identifier of the power (e.g., "modid:powername").
 * @returns {boolean} - Returns true if the power was successfully revoked; false otherwise.
 */
global.revokePower = (target, powerIdentifier) => {
    try {
        if (!target || !target.player) {
            return false;
        }
        let livingEntity = target;
        let powerKey = new ResourceLocation(powerIdentifier);
        let powerSource = new ResourceLocation("apoli:command");
        let optionalContainer = IPowerContainer.get(livingEntity);
        if (optionalContainer.isPresent()) {
            let powerContainer = optionalContainer.resolve().get();
            if (powerContainer.hasPower(powerKey, powerSource)) {
                powerContainer.removePower(powerKey, powerSource);
                powerContainer.sync();
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } catch (error) {
        console.error("An error occurred while revoking power:", error);
        return false;
    }
}
