const armorMap = new java.util.WeakHashMap();

ServerEvents.tick(event => {
    const server = event.server;

    server.players.forEach(player => {
        const uuid = player.uuid;
        const lastArmor = armorMap.get(uuid) || {};

        const currentArmor = {
            boots: player.getArmor(0),
            leggings: player.getArmor(1),
            chestplate: player.getArmor(2),
            helmet: player.getArmor(3)
        };

        // Compare and trigger events for changes
        Object.keys(currentArmor).forEach(slot => {
            if (!currentArmor[slot].equals(lastArmor[slot] || ItemStack.empty())) {
                if (currentArmor[slot].isEmpty()) {
                    onArmorRemoved(player, slot, lastArmor[slot]);
                } else {
                    onArmorAdded(player, slot, currentArmor[slot]);
                }
            }
        });

        // Update the map
        armorMap.put(uuid, currentArmor);
    });
});

// Add/Remove handlers
function onArmorAdded(player, slot, item) {
    player.tell(`Added ${item.name} to ${slot}`);
}

function onArmorRemoved(player, slot, item) {
    player.tell(`Removed ${item.name} from ${slot}`);
}
