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
})