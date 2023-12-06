onEvent('recipes', event => {

    event.recipes.createMechanicalCrafting('4x kubejs:light_engineering_assembly', [
        'ASA',
        'PCP',
        'ASA'
    ], {
        C: 'immersiveengineering:component_iron',
        P: 'immersiveengineering:component_electronic',
        S: 'immersiveengineering:wire_electrum',
        A: 'create:railway_casing'
    }).id('kubejs:light_engineering_assembly')

    event.recipes.createMechanicalCrafting('4x kubejs:heavy_engineering_assembly', [
        'ASA',
        'PCP',
        'ASA'
    ], {
        C: 'immersiveengineering:component_steel',
        P: 'kubejs:basic_electronic_component',
        S: 'immersiveengineering:wire_steel',
        A: 'create:shadow_steel_casing'
    }).id('kubejs:heavy_engineering_assembly')

    event.recipes.createMechanicalCrafting('4x kubejs:ponderous_engineering_assembly', [
        'ASA',
        'PCP',
        'ASA'
    ], {
        C: 'kubejs:aluminum_mechanical_component',
        P: 'immersiveengineering:component_electronic_adv',
        S: 'immersiveengineering:wire_aluminum',
        A: 'create:refined_radiance_casing'
    }).id('kubejs:ponderous_engineering_assembly')

    function technicalCrafting(tier, frame) {
        let block = `immersiveengineering:${tier}_engineering`
        let blockAssembly = `kubejs:${tier}_engineering_assembly`
        let mechanical = `kubejs:${tier}_mechanical_block`
        let mechanicalAssembly = `kubejs:${tier}_mechanical_assembly`
        let mech = `kubejs:${tier}_mechanism`

        if(tier == 'thermionic' || tier == 'ponderous' || tier == 'electric') {
            block = `kubejs:${tier}_engineering_block`
        }
        if(tier == 'redstone') {
            block = `immersiveengineering:rs_engineering`
        }

        if(tier == 'light' || tier == 'heavy' || tier == 'ponderous') {
            global.addItemApplication(false, block, mech, mechanical)
            global.addItemApplication(false, blockAssembly, mech, mechanicalAssembly)
        }

        global.addItemApplication(false, blockAssembly, frame, block)

        if(tier !== 'thermionic' && tier !== 'redstone' && tier !== 'electric') {
            global.addItemApplication(false, mechanicalAssembly, frame, mechanical)
        }
    }

    global.addItemApplication(false, 'botania:dreamwood_planks', 'create:shadow_steel', 'create:shadow_steel_casing')
    global.addItemApplication(false, 'botania:shimmerwood_planks', 'create:refined_radiance', 'create:refined_radiance_casing')

    technicalCrafting('light', 'immersiveengineering:plate_iron')
    technicalCrafting('heavy', 'immersiveengineering:plate_steel')
    technicalCrafting('ponderous', 'immersiveengineering:plate_aluminum')
    
    technicalCrafting('redstone', 'immersiveengineering:plate_iron')
    technicalCrafting('electric', 'immersiveengineering:plate_steel')
    technicalCrafting('thermionic', 'immersiveengineering:plate_aluminum')

})