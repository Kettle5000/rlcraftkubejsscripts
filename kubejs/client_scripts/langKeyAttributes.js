let suffixMap = {
    helmet: "h",
    chestplate: "c",
    leggings: "l",
    boots: "b"
};
ItemEvents.tooltip(event => {
    global.ATTRIBUTE_LIST.Armor.forEach(attribute => {
        let attributeName = attribute.id.toString();
        let attributeColor = attribute.color;
        event.addAdvanced(Ingredient.custom(item => item.hasTag("forge:armors/helmets")), (item, advanced, text) => {
            if (!item.nbt) return;
            let nbtKey = `${capitalize(attributeName)}h`;
            if (item.nbt[nbtKey] === 1) {
                if (attribute.tooltipEnabled) {
                    let defaultLine1 = Text.of("")
                        .append(Text.of("Quality: ").gray())
                        .append(Text.of(attribute.displayname ? attribute.displayname : attributeName).color(attributeColor));
                    text.add(defaultLine1);
                    let defaultLine2 = Text.of("")
                        .append(Text.of(`When on head: `).gray())
                    text.add(defaultLine2);
                    if (attribute.tooltips && attribute.tooltips.length > 0) {
                        attribute.tooltips.forEach(tooltipGroup => {
                            tooltipGroup.tooltip.forEach(lineSegments => {
                                let line = Text.of("");
                                lineSegments.forEach(segment => {
                                    line.append(Text.of(segment.text).color(segment.color));
                                });
                                text.add(line);
                            });
                        });
                    }
                }
            }
        });
        event.addAdvanced(Ingredient.custom(item => item.hasTag("forge:armors/boots")), (item, advanced, text) => {
            if (!item.nbt) return;
            let nbtKey = `${capitalize(attributeName)}b`;
            if (item.nbt[nbtKey] === 1) {
                if (attribute.tooltipEnabled) {
                    let defaultLine1 = Text.of("")
                        .append(Text.of("Quality: ").gray())
                        .append(Text.of(attribute.displayname ? attribute.displayname : attributeName).color(attributeColor));
                    text.add(defaultLine1);
                    let defaultLine2 = Text.of("")
                        .append(Text.of(`When on feet: `).gray())
                    text.add(defaultLine2);
                    if (attribute.tooltips && attribute.tooltips.length > 0) {
                        attribute.tooltips.forEach(tooltipGroup => {
                            tooltipGroup.tooltip.forEach(lineSegments => {
                                let line = Text.of("");
                                lineSegments.forEach(segment => {
                                    line.append(Text.of(segment.text).color(segment.color));
                                });
                                text.add(line);
                            });
                        });
                    }
                }
            }
        });
        event.addAdvanced(Ingredient.custom(item => item.hasTag("forge:armors/chestplates")), (item, advanced, text) => {
            if (!item.nbt) return;
            let nbtKey = `${capitalize(attributeName)}c`;
            if (item.nbt[nbtKey] === 1) {
                if (attribute.tooltipEnabled) {
                    let defaultLine1 = Text.of("")
                        .append(Text.of("Quality: ").gray())
                        .append(Text.of(attribute.displayname ? attribute.displayname : attributeName).color(attributeColor));
                    text.add(defaultLine1);
                    let defaultLine2 = Text.of("")
                        .append(Text.of(`When on body: `).gray())
                    text.add(defaultLine2);
                    if (attribute.tooltips && attribute.tooltips.length > 0) {
                        attribute.tooltips.forEach(tooltipGroup => {
                            tooltipGroup.tooltip.forEach(lineSegments => {
                                let line = Text.of("");
                                lineSegments.forEach(segment => {
                                    line.append(Text.of(segment.text).color(segment.color));
                                });
                                text.add(line);
                            });
                        });
                    }
                }
            }
        });
        event.addAdvanced(Ingredient.custom(item => item.hasTag("forge:armors/leggings")), (item, advanced, text) => {
            if (!item.nbt) return;
            let nbtKey = `${capitalize(attributeName)}l`;
            if (item.nbt[nbtKey] === 1) {
                if (attribute.tooltipEnabled) {
                    let defaultLine1 = Text.of("")
                        .append(Text.of("Quality: ").gray())
                        .append(Text.of(attribute.displayname ? attribute.displayname : attributeName).color(attributeColor));
                    text.add(defaultLine1);
                    let defaultLine2 = Text.of("")
                        .append(Text.of(`When on legs: `).gray())
                    text.add(defaultLine2);
                    if (attribute.tooltips && attribute.tooltips.length > 0) {
                        attribute.tooltips.forEach(tooltipGroup => {
                            tooltipGroup.tooltip.forEach(lineSegments => {
                                let line = Text.of("");
                                lineSegments.forEach(segment => {
                                    line.append(Text.of(segment.text).color(segment.color));
                                });
                                text.add(line);
                            });
                        });
                    }
                }
            }
        });

    });
    global.ATTRIBUTE_LIST.Curios.forEach(attribute => {
        let attributeName = attribute.id.toString();
        let attributeColor = attribute.color;
        event.addAdvanced(Ingredient.custom(i => i.hasTag("kubejs:trinkets")), (item, advanced, text) => {
            if (!item.nbt) return;
            let nbtKey = `${capitalize(attributeName)}`;
            if (item.nbt[nbtKey] === 1) {
                if (attribute.tooltipEnabled) {
                    let defaultLine1 = Text.of("")
                        .append(Text.of("Quality: ").gray())
                        .append(Text.of(attribute.displayname ? attribute.displayname : attributeName).color(attributeColor));
                    text.add(defaultLine1);
                    let defaultLine2 = Text.of("")
                        .append(Text.of(`When in any curios slot: `).gray())
                    text.add(defaultLine2);
                    if (attribute.tooltips && attribute.tooltips.length > 0) {
                        attribute.tooltips.forEach(tooltipGroup => {
                            tooltipGroup.tooltip.forEach(lineSegments => {
                                let line = Text.of("");
                                lineSegments.forEach(segment => {
                                    line.append(Text.of(segment.text).color(segment.color));
                                });
                                text.add(line);
                            });
                        });
                    }
                }
            }
        });
    })
});

/**
 * Capitalize the first letter of a string.
 * @param {string} str 
 * @returns {string}
 */
function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
