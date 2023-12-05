onEvent('block.registry', event => {
    event.create('raw_aluminum_block').material('metal').hardness(0.5).tagBlock('minecraft:mineable/pickaxe')

    event.create('ponderous_engineering_block').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('light_engineering_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('heavy_engineering_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('ponderous_engineering_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)

    event.create('light_mechanical_block').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('light_mechanical_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('heavy_mechanical_block').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('heavy_mechanical_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('ponderous_mechanical_block').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('ponderous_mechanical_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)

    event.create('redstone_engineering_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)

    event.create('thermionic_engineering_block').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('thermionic_engineering_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)

    event.create('electric_engineering_block').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)
    event.create('electric_engineering_assembly').material('metal').hardness(4).tagBlock('minecraft:mineable/pickaxe').tagBlock('minecraft:needs_stone_tool').requiresTool(true)

    //event.create('pitch_treated_wood').material('wood').hardness(0.5).tagBlock('minecraft:mineable/axe')
    //event.create('ash_treated_wood').material('wood').hardness(0.5).tagBlock('minecraft:mineable/axe')

    event.create('bioplast_block').material('glass').hardness(0.5)
    event.create('epoxyplast_block').material('glass').hardness(0.5)

})