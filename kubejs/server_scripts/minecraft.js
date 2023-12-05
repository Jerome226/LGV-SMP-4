onEvent('recipes', event => {
    event.shaped(global.getCount('minecraft:ladder', 16), [
        'A A',
        'AAA',
        'A A'
    ], {
        A: 'minecraft:stick'
    }).id(global.getId('crafting', 'minecraft:stick', 'minecraft:ladder'))
})