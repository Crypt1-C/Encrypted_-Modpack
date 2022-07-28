// priority: 100



onEvent('recipes', event => {
	
	event.smithing("create:creative_fluid_tank","create:fluid_tank","pneumaticcraft:creative_upgrade")
	event.smithing("create:creative_motor","createaddition:electric_motor","pneumaticcraft:creative_upgrade")
	event.smithing("create:creative_blaze_cake","create:blaze_cake","pneumaticcraft:creative_upgrade")
	event.smithing("storagedrawers:creative_storage_upgrade","storagedrawers:upgrade_template","pipez:infinity_upgrade")
	event.smithing("mekanism:creative_energy_cube","mekanism:ultimate_energy_cube","pipez:infinity_upgrade")
	event.smithing("createaddition:creative_energy","mekanism:ultimate_energy_cube","pneumaticcraft:creative_upgrade")

});