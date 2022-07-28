// create recipes 

onEvent('recipes', event => {

    event.remove({output:'create:andesite_alloy'})
    event.remove({output:'create:andesite_casing'})
    event.remove({output:'create:brass_casing'})
    event.remove({output:'create:copper_casing'})
    event.remove({output:'mekanism:steel_casing'})
    event.remove({output:'thermal:machine_frame'})
    event.remove({type:'create:conversion'})
    event.remove({id:'allthecompatibility:create/mixing/steel'})
    event.remove({id:'extendedcrafting:black_iron_ingot'})
    event.replaceInput({},'thermal:redstone_servo','create:copper_casing')
    event.replaceInput({type: 'thermal:augments'},'create:copper_casing','thermal:redstone_servo')
    event.remove({output: 'immersiveengineering:cokebrick'})
    event.remove({output: 'atm:'})
    event.remove({output: 'immersiveengineering:blastbrick'})
    event.remove({output: 'thermal:rf_coil'})
    event.replaceInput({id: 'mekanism:metallurgic_infuser'},'#forge:ingots/osmium','mekanism:steel_casing')
    event.replaceInput({id: 'mekanism:metallurgic_infuser'},'minecraft:furnace','#forge:ingots/osmium')
    event.replaceInput({id: 'mekanism:oredictionificator'},'mekanism:basic_control_circuit','create:attribute_filter')
    event.replaceInput({id: 'mekanism:oredictionificator'},'mekanism:dictionary','create:brass_casing')
    
    //event.shaped('4x create:andesite_casing', [' A ','ASA',' A '],{S: 'kubejs:wood_machine_frame',A: 'create:andesite_alloy'})

    event.recipes.createMixing('create:copper_casing',['#forge:plates/copper','create:andesite_casing']).heated()
    //event.recipes.createMixing('create:brass_casing',['#forge:plates/brass','create:copper_casing']).heated()
    //event.recipes.createMixing('mekanism:steel_casing',['#forge:plates/steel','create:brass_casing']).superheated()
    //event.recipes.createMixing('alltheores:steel_ingot',['#forge:ingots/iron','4x minecraft:coal']).superheated()

    event.recipes.createSequencedAssembly([
    Item.of('thermal:machine_frame').withChance(96.0),Item.of('mekanism:steel_casing').withChance(1.0)],'mekanism:steel_casing', [event.recipes.createDeploying('kubejs:incomplete_machine_frame', ['kubejs:incomplete_machine_frame', '#forge:plates/iron']),event.recipes.createDeploying('kubejs:incomplete_machine_frame', ['kubejs:incomplete_machine_frame', '#forge:gears/tin']),event.recipes.createDeploying('kubejs:incomplete_machine_frame', ['kubejs:incomplete_machine_frame', 'minecraft:glass']),event.recipes.createCutting('kubejs:incomplete_machine_frame', 'kubejs:incomplete_machine_frame').processingTime(50)]).transitionalItem('kubejs:incomplete_machine_frame').loops(4)

    event.recipes.createFilling('3x immersiveengineering:cokebrick', ['minecraft:bricks',Fluid.of('tconstruct:molten_clay', 1000)])
    event.recipes.createMixing('3x immersiveengineering:blastbrick', ['minecraft:magma_block',Fluid.of('tconstruct:molten_clay', 1000),'immersiveengineering:coal_coke']).heated()
    event.recipes.createMixing('create:precision_mechanism', ['create:brass_casing','2x create:cogwheel','create:large_cogwheel','4x #forge:nuggets/iron']).heated()
    event.recipes.createMixing('create:andesite_alloy', ['2x minecraft:andesite','2x #forge:nuggets/zinc']).heated()
    event.recipes.createMixing('create:andesite_alloy', ['2x minecraft:andesite','2x #forge:nuggets/iron']).heated()
    event.recipes.createMixing('create:rose_quartz', ['#forge:gems/quartz','8x #forge:dusts/redstone'])
    event.recipes.createMixing('byg:end_sand', ['minecraft:ender_pearl','#forge:sand']).superheated()

    event.recipes.createSequencedAssembly([Item.of('create:andesite_casing').withChance(100.0)],'kubejs:wood_machine_frame', [event.recipes.createDeploying('create:andesite_casing', ['kubejs:wood_machine_frame', 'create:andesite_alloy'])]).transitionalItem('kubejs:wood_machine_frame').loops(2)

    event.recipes.createSequencedAssembly([Item.of('kubejs:encrypted_ore').withChance(69.0)],'minecraft:stone', [event.recipes.createDeploying('kubejs:encrypted_ore', ['#forge:stone', 'kubejs:encrypted_matter'])]).transitionalItem('minecraft:stone').loops(4)

    event.recipes.createMixing('kubejs:wood_machine_frame', ['2x #minecraft:planks','2x kubejs:wooden_plate','kubejs:wooden_gear'])

    event.recipes.createPressing('kubejs:wooden_plate','#minecraft:planks')

    event.recipes.createPressing('4x naturesaura:gold_powder','naturesaura:gold_leaf')

    event.recipes.createDeploying('minecraft:white_concrete', ['#forge:cobblestone',"kubejs:encrypted_matter"])

    event.recipes.createDeploying('kubejs:creative_essence', ['kubejs:encrypted_ingot',"kubejs:encrypted_ingot"])

    //event.recipes.createFilling('mekanism:steel_casing', ['create:brass_casing',Fluid.of('tconstruct:molten_steel', 180)])
    event.recipes.createFilling('create:brass_casing', ['create:copper_casing',Fluid.of('tconstruct:molten_brass', 180)])

    event.recipes.mekanismMetallurgicInfusing("thermal:rf_coil", "minecraft:gold_ingot", "mekanism:redstone", 20)

    event.recipes.mekanismMetallurgicInfusing("mekanism:steel_casing", "#forge:storage_blocks/steel", "mekanism:redstone", 90)

    event.recipes.mekanismMetallurgicInfusing('create:rose_quartz', 'minecraft:quartz', 'mekanism:redstone', 40)

    event.recipes.thermal.smelter("thermal:machine_frame", ["2x #forge:gears/tin","2x #forge:plates/iron","#forge:glass"])
    event.recipes.thermal.smelter("minecraft:end_portal_frame", ["minecraft:ender_eye","8x minecraft:end_stone","2x minecraft:obsidian"])
    event.recipes.thermal.smelter("extendedcrafting:black_iron_ingot", ["#forge:ingots/iron","#forge:dyes/black"])
    event.recipes.thermal.smelter("extendedcrafting:frame", ["extendedcrafting:black_iron_slate","extendedcrafting:black_iron_slate","#forge:glass"])

    event.recipes.createDeploying('mekanism:steel_casing', ['create:brass_casing',"#forge:plates/steel"])

})
