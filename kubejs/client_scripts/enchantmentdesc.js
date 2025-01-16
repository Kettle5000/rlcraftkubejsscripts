
const enchantedBook = Ingredient.of('minecraft:enchanted_book')
const formatCurse = c => c.darkRed()
const formatEnch = c => c.darkAqua()
const formatDesc = c => Text.of(' ').italic().darkPurple().append(c)
const formatHint = c => c.gray()
ItemEvents.tooltip(event => {
 event.addAdvanced(Ingredient.all, (stack, item, text) => {
  if (!(stack.isEnchanted() || enchantedBook.test(stack))) return
  let wasEnch = false
  for (let i = 0;i < text.size();i++) {
   let component = text.get(i)
   let k = component?.contents?.key
   if (k != null && k.startsWith("enchantment.") && !k.endsWith(".desc")) {
    wasEnch = true
    if (k.contains("curse"))
     formatCurse(component)
     else if (k.contains("heavy"))
     formatCurse(component)
    else 
    formatEnch(component)
    if (event.isShift()) {
     i++
     text.add(i, formatDesc(Text.translate(k + ".desc")))
    }
   } else if (wasEnch && !event.isShift()) {
    wasEnch = false
    text.add(i, formatHint(Text.of('§6Hold SHIFT for enchantment descriptions')))
    i++
   }
  }
 })
})

/*ItemEvents.tooltip(event => {
  event.addAdvanced('minecraft:enchanted_book', (stack, item, text) => {
    if(!event.isShift()){
    text.add([
      Text.of('Hold SHIFT for enchantment descriptions').gold()
  ])
}
})
})*/




const remove = (index, text) => {
  text.remove(index)
  return index - 1
}
const keyContains = (string, component) => {
  let key = component?.contents?.key
  return key != null && key.contains(string)
}
ItemEvents.tooltip(event => {
let armor = [
  'minecraft:leather_helmet',
    'minecraft:golden_helmet',
    'minecraft:iron_helmet',
    'minecraft:diamond_helmet',
    'minecraft:netherite_helmet',
    'minecraft:chainmail_helmet',
    'alexsmobs:froststalker_helmet',
    'create:copper_diving_helmet',
    'create:netherite_diving_helmet',
    'bygonenether:gilded_netherite_helmet',
    'forbidden_arcanus:draco_arcanus_helmet',
    'forbidden_arcanus:tyr_helmet',
    'forbidden_arcanus:mortem_helmet',
    'mekanism:mekasuit_helmet',
    'minecolonies:plate_armor_helmet',
    'pneumaticcraft:compressed_iron_helmet',
    'pneumaticcraft:pneumatic_helmet',
    'theabyss:fusion_armor_helmet',
    'theabyss:incorythe_armor_helmet',
    'theabyss:phantom_armor_helmet',
    'theabyss:ignisithe_armor_helmet',
    'theabyss:unorithe_armor_helmet',
    'theabyss:garnite_armor_helmet',
    'theabyss:glacerythe_armor_helmet',
    'theabyss:bone_armor_helmet',
    'theabyss:aberythe_armor_helmet',
    'born_in_chaos_v1:dark_metal_armor_helmet',
    'stalwart_dungeons:tungsten_helmet',
    'stalwart_dungeons:warted_tungsten_helmet',
    'stalwart_dungeons:chorundum_armor_helmet',
    'iter_rpg:sky_armor_helmet',
    'iter_rpg:forest_armor_helmet',
    'iter_rpg:ocean_armor_helmet',
    'iter_rpg:hell_armor_helmet',
    'iter_rpg:end_armor_helmet',
    'enlightened_end:adamantite_armor_helmet',
    'aquaculture:neptunium_helmet',
    'mutationcraft:rusted_metal_armor_helmet',
    'mutationcraft:metal_armor_helmet',
    'magistuarmory:maximilian_helmet',
    'magistuarmory:ceremonialarmet',
    'minecraft:leather_helmet',
    'alexsmobs:fedora',
    'minecolonies:pirate_hat',
    'minecolonies:pirate_cap',
    'quark:forgotten_hat',
    'minecraft:turtle_helmet',
    'alexsmobs:moose_headgear',
    'alexsmobs:frontier_cap',
    'alexsmobs:spiked_turtle_shell',
    'alexsmobs:novelty_hat',
    'ars_nouveau:novice_hood',
    'ars_nouveau:apprentice_hood',
    'ars_nouveau:archmage_hood',
    'mutantmore:mutant_wither_skeleton_skull',
    'minecraft:leather_chestplate',
    'minecraft:golden_chestplate',
    'minecraft:iron_chestplate',
    'minecraft:diamond_chestplate',
    'minecraft:netherite_chestplate',
    'minecraft:chainmail_chestplate',
    'create:copper_backtank',
    'create:netherite_backtank',
    'bygonenether:gilded_netherite_chestplate',
    'forbidden_arcanus:draco_arcanus_chestplate',
    'forbidden_arcanus:tyr_chestplate',
    'forbidden_arcanus:mortem_chestplate',
    'mekanism:mekasuit_bodyarmor',
    'minecolonies:plate_armor_chest',
    'pneumaticcraft:compressed_iron_chestplate',
    'pneumaticcraft:pneumatic_chestplate',
    'theabyss:fusion_armor_chestplate',
    'theabyss:incorythe_armor_chestplate',
    'theabyss:phantom_armor_chestplate',
    'theabyss:ignisithe_armor_chestplate',
    'theabyss:unorithe_armor_chestplate',
    'theabyss:garnite_armor_chestplate',
    'theabyss:glacerythe_armor_chestplate',
    'theabyss:bone_armor_chestplate',
    'theabyss:aberythe_armor_chestplate',
    'born_in_chaos_v1:dark_metal_armor_chestplate',
    'stalwart_dungeons:tungsten_chestplate',
    'stalwart_dungeons:warted_tungsten_chestplate',
    'stalwart_dungeons:chorundum_armor_chestplate',
    'iter_rpg:sky_armor_chestplate',
    'iter_rpg:forest_armor_chestplate',
    'iter_rpg:ocean_armor_chestplate',
    'iter_rpg:hell_armor_chestplate',
    'iter_rpg:end_armor_chestplate',
    'enlightened_end:adamantite_armor_chestplate',
    'aquaculture:neptunium_chestplate',
    'mutationcraft:rusted_metal_armor_chestplate',
    'mutationcraft:metal_armor_chestplate',
    'magistuarmory:maximilian_chestplate',
    'magistuarmory:crusader_chestplate',
    'magistuarmory:ceremonial_chestplate',
    'minecraft:leather_chestplate',
    'minecolonies:pirate_top',
    'minecolonies:pirate_chest',
    'alexsmobs:crocodile_chestplate',
    'alexsmobs:tarantula_hawk_elytra',
    'minecraft:elytra',
    'alexsmobs:rocky_chestplate',
    'alexsmobs:unsettling_kimono',
    'mekanism:jetpack_armored',
    'ars_nouveau:novice_robes',
    'ars_nouveau:apprentice_robes',
    'ars_nouveau:archmage_robes',
    'mutantmonsters:mutant_skeleton_chestplate',
    'mutantmore:mutant_wither_skeleton_chestplate',
    'minecraft:leather_leggings',
    'minecraft:golden_leggings',
    'minecraft:iron_leggings',
    'minecraft:diamond_leggings',
    'minecraft:netherite_leggings',
    'minecraft:chainmail_leggings',
    'bygonenether:gilded_netherite_leggings',
    'forbidden_arcanus:draco_arcanus_leggings',
    'forbidden_arcanus:tyr_leggings',
    'forbidden_arcanus:mortem_leggings',
    'mekanism:mekasuit_pants',
    'minecolonies:plate_armor_legs',
    'pneumaticcraft:compressed_iron_leggings',
    'pneumaticcraft:pneumatic_leggings',
    'theabyss:fusion_armor_leggings',
    'theabyss:incorythe_armor_leggings',
    'theabyss:phantom_armor_leggings',
    'theabyss:ignisithe_armor_leggings',
    'theabyss:unorithe_armor_leggings',
    'theabyss:garnite_armor_leggings',
    'theabyss:glacerythe_armor_leggings',
    'theabyss:bone_armor_leggings',
    'theabyss:aberythe_armor_leggings',
    'born_in_chaos_v1:dark_metal_armor_leggings',
    'stalwart_dungeons:tungsten_leggings',
    'stalwart_dungeons:warted_tungsten_leggings',
    'stalwart_dungeons:chorundum_armor_leggings',
    'iter_rpg:sky_armor_leggings',
    'iter_rpg:forest_armor_leggings',
    'iter_rpg:ocean_armor_leggings',
    'iter_rpg:hell_armor_leggings',
    'iter_rpg:end_armor_leggings',
    'enlightened_end:adamantite_armor_leggings',
    'aquaculture:neptunium_leggings',
    'mutationcraft:rusted_metal_armor_leggings',
    'mutationcraft:metal_armor_leggings',
    'magistuarmory:maximilian_leggings',
    'minecraft:leather_leggings',
    'magistuarmory:cuirassier_leggings',
    'minecolonies:pirate_leggins',
    'minecolonies:pirate_legs',
    'alexsmobs:centipede_leggings',
    'alexsmobs:emu_leggings',
    'mekanism:free_runners_armored',
    'ars_nouveau:novice_leggings',
    'ars_nouveau:apprentice_leggings',
    'ars_nouveau:archmage_leggings',
    'mutantmore:mutant_wither_skeleton_leggings',
    'minecraft:leather_boots',
    'minecraft:golden_boots',
    'minecraft:iron_boots',
    'minecraft:diamond_boots',
    'minecraft:netherite_boots',
    'minecraft:chainmail_boots',
    'create:copper_diving_boots',
    'create:netherite_diving_boots',
    'bygonenether:gilded_netherite_boots',
    'forbidden_arcanus:draco_arcanus_boots',
    'forbidden_arcanus:tyr_boots',
    'forbidden_arcanus:mortem_boots',
    'mekanism:mekasuit_boots',
    'minecolonies:plate_armor_boots',
    'pneumaticcraft:compressed_iron_boots',
    'pneumaticcraft:pneumatic_boots',
    'theabyss:fusion_armor_boots',
    'theabyss:incorythe_armor_boots',
    'theabyss:phantom_armor_boots',
    'theabyss:ignisithe_armor_boots',
    'theabyss:unorithe_armor_boots',
    'theabyss:garnite_armor_boots',
    'theabyss:glacerythe_armor_boots',
    'theabyss:bone_armor_boots',
    'theabyss:aberythe_armor_boots',
    'born_in_chaos_v1:dark_metal_armor_boots',
    'stalwart_dungeons:tungsten_boots',
    'stalwart_dungeons:warted_tungsten_boots',
    'stalwart_dungeons:chorundum_armor_boots',
    'iter_rpg:sky_armor_boots',
    'iter_rpg:forest_armor_boots',
    'iter_rpg:ocean_armor_boots',
    'iter_rpg:hell_armor_boots',
    'iter_rpg:end_armor_boots',
    'enlightened_end:adamantite_armor_boots',
    'aquaculture:neptunium_boots',
    'mutationcraft:rusted_metal_armor_boots',
    'mutationcraft:metal_armor_boots',
    'magistuarmory:maximilian_boots',
    'magistuarmory:ceremonial_boots',
    'minecraft:leather_boots',
    'alexsmobs:roadrunner_boots',
    'minecolonies:pirate_boots',
    'minecolonies:pirate_shoes',
    'alexsmobs:flying_fish_boots',
    'ars_nouveau:novice_boots',
    'ars_nouveau:apprentice_boots',
    'ars_nouveau:archmage_boots',
    'mutantmore:mutant_wither_skeleton_boots',

]
  event.addAdvanced(armor, (item, a, text) => {
      let isStatSection = false
      for (let i = 0;i < text.size();i++) {
          let component = text.get(i)
          if (keyContains("item.modifiers", component)) {
              isStatSection = true
              i = remove(i, text)
              i = remove(i, text)
              continue
          }
          if (isStatSection) {
              if (keyContains("attribute", component)) {
                  i = remove(i, text)
                  continue
              }
              for (let c of component.getSiblings()) {
                  if (keyContains("attribute", c)) {
                      i = remove(i, text)
                  }
              }
          }
      }
  })
})
ItemEvents.tooltip(event => {
event.addAdvanced('iter_rpg:ocean_shovel', (item, a, text) => {
  let isStatSection = false
  for (let i = 0;i < text.size();i++) {
      let component = text.get(i)
      if (keyContains("item.modifiers", component)) {
          isStatSection = true
          i = remove(i, text)
          i = remove(i, text)
          continue
      }
      if (isStatSection) {
          if (keyContains("attribute", component)) {
              i = remove(i, text)
              continue
          }
          for (let c of component.getSiblings()) {
              if (keyContains("attribute", c)) {
                  i = remove(i, text)
              }
          }
      }
  }
})
})