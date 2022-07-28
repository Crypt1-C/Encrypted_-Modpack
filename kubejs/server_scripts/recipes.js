// priority: 50

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')


onEvent('item.tooltip', tooltip => {
  // Add tooltip to all of these items
  tooltip.add(['chemlib:element_hydrogen', 'chemlib:element_carbon'], Text.red("can be used as furnace fuel"))

})


onEvent('recipes', event => {

    event.replaceInput({input: '#forge:plastic'}, 'industrialforegoing:plastic', "#forge:plastic")
    event.replaceInput({input: '#forge:plastic'}, 'pneumaticcraft:plastic', "#forge:plastic")

    event.shapeless('industrialforegoing:plastic', 'pneumaticcraft:plastic')
    event.shapeless('pneumaticcraft:plastic', 'industrialforegoing:plastic')

    event.shapeless('powah:uraninite', '#forge:ingots/uranium')
    event.shapeless('alltheores:uranium_ingot', 'powah:uraninite')

    event.replaceInput({id: 'structures_compass:structures_compass'}, '#structures_compass:dead_coral', "#forge:ingots/aluminum")

	event.shapeless(Item.of('akashictome:tome', '{"akashictome:data":{allthemodium:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"allthemodium:allthemodium"}},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},bigreactors:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bigreactors:erguide"}},botania:{Count:1b,id:"botania:lexicon"},dynamictrees:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"dynamictrees:guide"}},extendedcrafting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"extendedcrafting:guide"}},ftbquests:{Count:1b,id:"ftbquests:book"},industrialforegoing:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},mysticalagriculture:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"mysticalagriculture:guide"}},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},storagenetwork:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"storagenetwork:network_book"}},tconstruct:{Count:1b,id:"tconstruct:encyclopedia",tag:{"akashictome:displayName":{text:\'{"translate":"item.tconstruct.encyclopedia"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.tconstruct.encyclopedia"}]}\'},mantle:{book:{current_page:"tier_one_materials.tconstruct:vine"}}}},theoneprobe:{Count:1b,id:"theoneprobe:probenote"},thermal:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}},"akashictome:is_morphing":1b}'), 'minecraft:dirt')

	event.shapeless('hexerei:sage_seed', 'hexerei:willow_sapling')
    //event.shapeless('hexerei:sage_seed', 'hexerei:sage')
    event.shapeless('hexerei:belladonna_flowers', 'hexerei:sage')
    event.shapeless('hexerei:mandrake_flowers', 'hexerei:belladonna_flowers')
    event.shapeless('hexerei:mandrake_root', 'hexerei:mandrake_flowers')
    event.shapeless('hexerei:mugwort_flowers', 'hexerei:mandrake_root')
    event.shapeless('hexerei:yellow_dock_flowers', 'hexerei:mugwort_flowers')
    event.shapeless('hexerei:yellow_dock_leaves', 'hexerei:yellow_dock_flowers')
    event.shapeless('hexerei:sage', 'hexerei:yellow_dock_leaves')

	event.remove({id: "createchromaticreturn:creative_motor"})
	event.remove({id: "occultism:ritual_dummy/summon_foliot_crusher"})
	event.remove({id: "extendedcrafting:handheld_table"}) 
	event.remove({output: '#forge:concrete_powders'})
    
    event.remove({output: 'naturesaura:gold_fiber'})
    event.remove({output: 'exnihilosequentia:end_cake'})					
	event.remove({input: '#forge:concrete_powders'}) 
     					
	event.remove({output: '#forge:concrete'})
    event.remove({output: 'naturesaura:gold_powder'})						
	event.remove({type: 'exnihilosequentia:fluid_transform'})
	event.remove({type: 'exnihilosequentia:sieve'})
	event.remove({type: 'exnihilosequentia:hammer'})
	event.remove({type: 'exnihilosequentia:fluid_on_top'})
	event.remove({type: 'exnihilosequentia:fluid_item'})
	event.remove({output: 'minecraft:furnace'})				
	event.remove({output: 'create:rose_quartz'})
    
    event.remove({mod: 'nameless_trinkets'})

    event.remove({output: 'alltheores:steel_dust'})
    event.remove({output: 'mob_grinding_utils:gm_chicken_feed_cursed'})		
    
    event.remove({output: '#encrypted:atm_gears'})
    event.remove({output: 'cobblefordays:tier_2'})
    event.remove({output: 'cobblefordays:tier_3'})
    event.remove({output: 'cobblefordays:tier_4'})
    event.remove({output: 'cobblefordays:tier_5'})
    

	event.replaceInput({id: 'rsinfintybooster:infinity_card'}, 'minecraft:nether_star', "kubejs:creative_essence")
    event.replaceInput({id: 'minecraft:writable_book'}, 'minecraft:ink_sac', "#forge:dyes/black")
	event.remove({output: 'alchemistry:dissolver'})				
	event.remove({output: 'alchemistry:combiner'})		
	event.replaceInput({id: 'irongenerators:stone_generator_rcp'}, 'minecraft:redstone', "minecraft:smooth_stone")
    event.replaceInput({id: 'cookingforblockheads:sink'}, 'minecraft:water_bucket', 'chemlib:compound_water')
    event.replaceInput({input: 'ae2:silicon'}, 'ae2:silicon', "#forge:silicon")
    event.replaceInput({input: 'refinedstorage:silicon'}, 'refinedstorage:silicon', "#forge:silicon")
    event.shapeless('allthemodium:demonic_log',['forbidden_arcanus:cherrywood_log','kubejs:encrypted_matter'])

    event.custom({type: "tconstruct:melting", ingredient:{tag: "forge:dusts/redstone"}, result:{fluid: "thermal:redstone", amount: 100}, temperature: 250, time: 80})
    
    event.replaceInput({id: 'beyond_earth:oxygen_loader'}, 'minecraft:furnace', 'thermal:machine_frame')
    event.replaceInput({id: 'beyond_earth:compressor'}, 'minecraft:furnace', 'thermal:machine_frame')
    
    event.stonecutting('ae2:calculation_processor_press','ae2:sky_stone_block')
    event.stonecutting('ae2:engineering_processor_press','ae2:sky_stone_block')
    event.stonecutting('ae2:logic_processor_press','ae2:sky_stone_block')
    event.stonecutting('ae2:silicon_press','ae2:sky_stone_block')


    event.smelting("kubejs:encrypted_ingot", "kubejs:encrypted_ore")
    event.smelting("compressium:stone_1", "compressium:cobblestone_1")
    event.smelting("compressium:stone_2", "compressium:cobblestone_2")
    event.smelting("compressium:stone_3", "compressium:cobblestone_3")
    event.smelting("compressium:stone_4", "compressium:cobblestone_4")
    event.smelting("compressium:stone_5", "compressium:cobblestone_5")

    // cobblegens
    event.shaped('cobblefordays:tier_2', [
    'AAA',
    'ASA',
    'AAA'],
    {
        S: 'cobblefordays:tier_1',
        A: '#forge:cobblestone'
    })

    // cobblegens
    event.shaped('cobblefordays:tier_3', [
    'AAA',
    'ASA',
    'AAA'],
    {
        S: 'cobblefordays:tier_2',
        A: '#forge:ingots/iron'
    })

    // cobblegens
    event.shaped('cobblefordays:tier_4', [
    'AAA',
    'ASA',
    'AAA'],
    {
        S: 'cobblefordays:tier_3',
        A: '#forge:ingots/gold'
    })

    // cobblegens
    event.shaped('cobblefordays:tier_5', [
    'AAA',
    'ASA',
    'AAA'],
    {
        S: 'cobblefordays:tier_4',
        A: '#forge:gems/diamond'
    })


	event.shaped('kubejs:wooden_gear', [
    ' A ',
    'ASA',
    ' A '],
    {
    	S: '#forge:rods/wooden',
    	A: '#minecraft:planks'
    })

    event.shaped('cobblefordays:tier_2', [
    'AAA',
    'ASA',
    'AAA'],
    {
        S: 'cobblefordays:tier_1',
        A: '#forge:cobblestone'
    })

    event.shaped('cobblefordays:tier_3', [
    'AAA',
    'ASA',
    'AAA'],
    {
        S: 'cobblefordays:tier_2',
        A: '#forge:ingots/iron'
    })

    event.shaped('cobblefordays:tier_4', [
    'AAA',
    'ASA',
    'AAA'],
    {
        S: 'cobblefordays:tier_3',
        A: '#forge:ingots/gold'
    })

    event.shaped('cobblefordays:tier_5', [
    'AAA',
    'ASA',
    'AAA'],
    {
        S: 'cobblefordays:tier_4',
        A: '#forge:gems/diamond'
    })

	event.shaped('4x allthemodium:demonic_leaves', [
    ' S ',
    'SMS',
    ' S '],
    {
    	S: 'allthemodium:demonic_log',
    	M: 'kubejs:encrypted_matter'
    })

	event.shaped('kubejs:wooden_plate', [
    'PP',
    'PP'],
    {
    	P: '#minecraft:wooden_pressure_plates'
    })


    event.shaped('kubejs:wood_machine_frame', [
    'PWP',
    'WGW',
    'PWP'],
    {
    	G: 'kubejs:wooden_gear',
    	P: '#minecraft:planks',
    	W: 'kubejs:wooden_plate'
    })

    event.shaped(Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'), [
    'LDL',
    'MBM',
    'LDL'],
    {
    	L: 'allthemodium:demonic_log',
    	D: 'allthemodium:demonic_leaves',
    	M: 'kubejs:encrypted_matter',
    	B: 'woodenbucket:wooden_bucket'
    })

    event.shaped('cobblefordays:tier_1', [
    'PPP',
    'WML',
    'PPP'],
    {
    	W: Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),
    	P: '#minecraft:logs',
    	L: Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'),
    	M: 'kubejs:wood_machine_frame'
    })

    event.shaped('cobblefordays:tier_1', [
    'PPP',
    'WML',
    'PPP'],
    {
    	W: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),
    	P: '#minecraft:logs',
    	L: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'),
    	M: 'kubejs:wood_machine_frame'
    })

    event.shaped('cobblefordays:tier_1', [
    'PPP',
    'WML',
    'PPP'],
    {
    	W: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),
    	P: '#minecraft:logs',
    	L: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'),
    	M: 'kubejs:wood_machine_frame'
    })

    event.shaped('cobblefordays:tier_1', [
    'PPP',
    'WML',
    'PPP'],
    {
    	W: Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),
    	P: '#minecraft:logs',
    	L: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'),
    	M: 'kubejs:wood_machine_frame'
    })

    event.shaped('cobblefordays:tier_1', [
    'PPP',
    'WML',
    'PPP'],
    {
    	W: Item.of('ceramicbucket:ceramic_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}'),
    	P: '#minecraft:logs',
    	L: Item.of('woodenbucket:wooden_bucket', '{Fluid:{Amount:1000,FluidName:"minecraft:lava"}}'),
    	M: 'kubejs:wood_machine_frame'
    })


    event.shaped('alchemistry:dissolver', [
    'SHS',
    'SFS',
    'SCS'],
    {
    	S: 'minecraft:smooth_stone',
    	H: 'woodenhopper:wooden_hopper',
    	F: 'minecraft:furnace',
    	C: 'compressium:cobblestone_1'
    })

    event.shaped('alchemistry:combiner', [
    'SCS',
    'SFS',
    'SHS'],
    {
    	S: 'minecraft:smooth_stone',
    	H: 'woodenhopper:wooden_hopper',
    	F: 'minecraft:furnace',
    	C: 'compressium:cobblestone_1'
    })

    event.shaped('minecraft:furnace', [
    'NNN',
    'N N',
    'NCN'],
    {
    	C: 'compressium:cobblestone_1',
        N: '#forge:cobblestone'
    })

});
