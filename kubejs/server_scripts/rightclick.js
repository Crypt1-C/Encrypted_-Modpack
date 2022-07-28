onEvent("block.right_click", (event) => {
  const { block, hand, item, world, player } = event;
  if (hand.name() != "MAIN_HAND") return;

  if (item == "create:wrench" && player.isCrouching()) {
    if (block.equals("minecraft:end_portal_frame")) {
      const hasEnderEye = block.properties.eye;
      block.set("minecraft:air");
      player.give("minecraft:end_portal_frame");
      if (hasEnderEye == "true") {
        player.give("minecraft:ender_eye");
      }
    }
  }

});

onEvent('block.right_click', event => {
  if (!event.player.mainHandItem.isEmpty()) return
  if (event.block.id == 'minecraft:white_concrete'){
      if (event.player.fake) {
          event.player.mainHandItem = Item.of('kubejs:encrypted_matter');
      } else {
      if (event.player.crouching){
        event.server.runCommandSilent(`execute at ${event.player.id} as ${event.player.id} run give @s kubejs:encrypted_matter 1`)}
      }
      event.cancel()
  }
})