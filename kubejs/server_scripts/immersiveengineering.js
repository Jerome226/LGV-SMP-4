onEvent('recipes', event => {

    event.recipes.createMechanicalCrafting('2x kubejs:redstone_engineering_assembly', [
        'ASA',
        'PCP',
        'ALA'
    ], {
        C: 'immersiveengineering:component_iron',
        P: 'minecraft:redstone',
        S: 'immersiveengineering:connector_probe',
        L: 'quark:redstone_randomizer',
        A: 'create:andesite_casing'
    }).id('kubejs:redstone_engineering_assembly')

    event.recipes.createMechanicalCrafting('4x kubejs:light_engineering_assembly', [
        'ASA',
        'PCP',
        'ALA'
    ], {
        C: 'immersiveengineering:component_iron',
        P: 'immersiveengineering:component_electronic',
        S: 'createaddition:capacitor',
        L: 'immersiveengineering:wire_lead',
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

    global.addItemApplication(false, 'botania:dreamwood_planks', 'kubejs:shadow_sheet', 'create:shadow_steel_casing')
    global.addItemApplication(false, 'botania:shimmerwood_planks', 'kubejs:radiant_sheet', 'create:refined_radiance_casing')

    global.addItemApplication(false, 'immersiveengineering:concrete', 'immersiveengineering:plate_lead', 'immersiveengineering:concrete_leaded')
    global.addItemApplication(false, 'immersiveengineering:blastbrick', 'immersiveengineering:plate_steel', 'immersiveengineering:blastbrick_reinforced')

    technicalCrafting('light', 'kubejs:iron_frame')
    technicalCrafting('heavy', 'kubejs:steel_frame')
    technicalCrafting('ponderous', 'kubejs:aluminum_frame')
    
    technicalCrafting('redstone', 'kubejs:iron_frame')
    technicalCrafting('electric', 'kubejs:steel_frame')
    technicalCrafting('thermionic', 'kubejs:aluminum_frame')

})