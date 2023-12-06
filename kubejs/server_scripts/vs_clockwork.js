onEvent('recipes', event => {

    event.recipes.createMechanicalCrafting('3x vs_clockwork:wing', [
        ' P ',
        'CCC',
        ' P '
    ], {
        C: 'create:white_sail',
        P: 'create:brass_sheet'
    }).id('vs_clockwork:wing')

    event.recipes.createMechanicalCrafting('3x vs_clockwork:flap', [
        ' C ',
        'PCP',
        ' C '
    ], {
        C: 'create:white_sail',
        P: 'create:brass_sheet'
    }).id('vs_clockwork:flap')

    event.recipes.createMechanicalCrafting('vs_clockwork:flap_bearing', [
        'CCC',
        ' P '
    ], {
        C: 'createaddition:brass_rod',
        P: 'create:mechanical_bearing'
    }).id('vs_clockwork:flap_bearing')

    event.recipes.createMechanicalCrafting('vs_clockwork:propellor_bearing', [
        ' C ',
        'CPC',
        ' C '
    ], {
        C: 'immersiveengineering:stick_iron',
        P: 'create:mechanical_bearing'
    }).id('vs_clockwork:propellor_bearing')

    event.recipes.createMechanicalCrafting('vs_clockwork:phys_bearing', [
        ' P ',
        'AGA',
        ' C '
    ], {
        C: 'create:railway_casing',
        G: 'vs_clockwork:bluuguu',
        A: 'immersiveengineering:plate_iron',
        P: 'create:mechanical_bearing'
    }).id('vs_clockwork:phys_bearing')

    event.recipes.createMechanicalCrafting('vs_clockwork:physics_infuser', [
        ' P ',
        'AGA',
        ' C '
    ], {
        C: 'create:railway_casing',
        G: 'vs_clockwork:bluuguu',
        A: 'immersiveengineering:plate_iron',
        P: 'minecraft:glass'
    }).id('vs_clockwork:physics_infuser')

    event.shaped('vs_clockwork:redstone_resistor', [
        'P',
        'A'
    ], {
        A: 'create:andesite_casing',
        P: 'create:precision_mechanism' 
    }).id('vs_clockwork:redstone_resistor')

})