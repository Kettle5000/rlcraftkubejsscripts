
/**
 * We use these methods manually instead of commands to grant powers to avoid adding unnecessary overhead.
 */

let ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
let IPowerContainer = Java.loadClass("io.github.edwinmindcraft.apoli.api.component.IPowerContainer");
let ConfiguredPower = Java.loadClass("io.github.edwinmindcraft.apoli.api.power.configuration.ConfiguredPower");
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
            if (!powerContainer.hasPower(powerKey, powerSource)) {
                powerContainer.addPower(powerKey, powerSource)
                powerContainer.sync();
                return true;
            } else {
                return false;
            }
        }
        return false;
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
            }
            return false;
        }
        return false;
    } catch (error) {
        console.error("An error occurred while revoking power:", error);
        return false;
    }
}
/**
 * 
 * @param {Internal.Player} target 
 * @param {string} source we use "apoli:command"
 * @returns 
 */
global.revokeAllPowers = (target, source) => {
    try {
        if (!target || !target.player) {
            return
        }
        let powerSource = new ResourceLocation(source);
        let optionalContainer = IPowerContainer.get(target);
        if (optionalContainer.isPresent()) {
            let powerContainer = optionalContainer.resolve().get();
            powerContainer.removeAllPowersFromSource(powerSource);
            powerContainer.sync();
        }
    } catch (error) {
        console.error("An error occurred while revoking power:", error);
    }
}