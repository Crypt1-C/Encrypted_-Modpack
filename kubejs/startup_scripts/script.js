// priority: 1000

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here

	event.create('new_compound_ethylene').displayName('Ethylene')

	event.create('crypto_currency').displayName('Crypto Currency').glow(true)
	event.create('encrypted_ingot').displayName('§5Encrypted Ingot').glow(true)
	event.create('encrypted_matter').displayName('Encrypted Matter')

	event.create('creative_essence').displayName('Creative Essence').glow(true)

	event.create('wooden_gear').displayName('Wooden Gear')
	event.create('wooden_plate').displayName('Wooden Plate')
	event.create('incomplete_machine_frame').type('create:sequenced_assembly').displayName('Incomplete Machine Frame')
	
	

})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create('encrypted_ore').material("stone").fullBlock(true).hardness(0.5)

	event.create('wood_machine_frame').material("wood")
})


onEvent('item.modification', event => {
	event.modify('minecraft:egg', item => {
		item.maxStackSize = 64
	})
})

onEvent('item.modification', event => {
	event.modify('minecraft:ender_pearl', item => {
		item.maxStackSize = 64
	})
})

onEvent('item.modification', event => {
	event.modify('minecraft:snowball', item => {
		item.maxStackSize = 64
	})
})

onEvent('item.modification', event => {
	event.modify('chemlib:element_hydrogen', item => {
		item.burnTime = 20
	})
})

onEvent('item.modification', event => {
	event.modify('chemlib:element_carbon', item => {
		item.burnTime = 200
	})
})

onEvent('item.modification', event => {
	event.modify('kubejs:incomplete_machine_frame', item => {
		item.maxStackSize = 1
	})
})
