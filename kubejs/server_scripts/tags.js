// priority 20
// Listen to item tag event

onEvent('tags.items', event => {

  // Add encrypted:lava_bucket tag
  event.add('encrypted:lava_bucket', ['forbidden_arcanus:edelwood_lava_bucket','minecraft:lava_bucket'])

  // Add encrypted:water_bucket tag
  event.add('encrypted:water_bucket', ['forbidden_arcanus:edelwood_water_bucket','minecraft:water_bucket'])
  event.add('encrypted:water_bucket', ['forbidden_arcanus:edelwood_water_bucket','minecraft:water_bucket'])

  event.add('minecraft:needs_stone_tool', ['@irongenerators'])
  event.add('minecraft:mineable/pickaxe', ['@irongenerators'])
  event.add('tconstruct:mineable/pickaxe', ['@irongenerators'])
  event.add('forge:mineable/paxel', ['@irongenerators'])

  event.add('forge:tools/pickaxes', ['tconstruct:pickaxe'])
  event.add('forge:tools/pickaxe', ['tconstruct:pickaxe'])

  event.add('forge:ingots/encrypted', ['kubejs:encrypted_ingot'])

  event.add('forge:plastic', ['pneumaticcraft:plastic'])

  event.add('encrypted:atm_gears', ['alltheores:aluminum_gear', 'alltheores:iridium_gear', 'alltheores:lead_gear', 'alltheores:nickel_gear', 'alltheores:osmium_gear', 'alltheores:platinum_gear', 'alltheores:silver_gear', 'alltheores:tin_gear', 'alltheores:uranium_gear', 'alltheores:zinc_gear', 'alltheores:steel_gear', 'alltheores:invar_gear', 'alltheores:electrum_gear', 'alltheores:bronze_gear', 'alltheores:iron_gear', 'alltheores:gold_gear', 'alltheores:diamond_gear', 'alltheores:copper_gear', 'alltheores:enderium_gear', 'alltheores:lumium_gear', 'alltheores:signalum_gear', 'alltheores:constantan_gear', 'alltheores:brass_gear', 'industrialforegoing:iron_gear','industrialforegoing:gold_gear','industrialforegoing:diamond_gear'])

})

