onEvent('block.loot_tables', event => {
  global.vanillaMetalTypes.forEach(i => {
    event.addSimpleBlock(`minecraft:${i}_ore`, `minecraft:raw_${i}`)
    event.addSimpleBlock(`minecraft:deepslate_${i}_ore`, `minecraft:raw_${i}`)
  });

  global.createMetalTypes.forEach(i => {
    event.addSimpleBlock(`create:${i}_ore`, `create:raw_${i}`)
    event.addSimpleBlock(`create:deepslate_${i}_ore`, `create:raw_${i}`)
  });

  global.ieMetalTypes.forEach(i => {
    event.addSimpleBlock(`immersiveengineering:ore_${i}`, `immersiveengineering:raw_${i}`)
    event.addSimpleBlock(`immersiveengineering:deepslate_ore_${i}`, `immersiveengineering:raw_${i}`)
  });

  global.blocksToFix.forEach(i => {
    event.addSimpleBlock(i)
  });
  
})

onEvent("lootjs", (event) => {

  event.addBlockLootModifier('vs_clockwork:propellor_bearing').addLoot('vs_clockwork:propellor_bearing');
  event.addBlockLootModifier('vs_clockwork:phys_bearing').addLoot('vs_clockwork:phys_bearing');

});

onEvent('entity.loot_tables', event => {
  event.addEntity('minecraft:iron_golem', table => {
    table.addPool(pool => {
      pool.addItem('minecraft:iron_ingot')
    })
  })
})