onEvent('recipes', event => {

    function removeAlloy(i) {
        event.remove({ id: `createaddition:compat/immersiveengineering/${i}` })
        event.remove({ id: `immersiveengineering:alloysmelter/${i}` })
        event.remove({ id: `immersiveengineering:arcfurnace/alloy_${i}` })
        event.remove({ id: `immersiveengineering:crafting/${i}_mix` })
        event.remove({ id: `create:mixing/${i}_ingot` })
    }

    function alloy(name, input1, input2, output) {
        removeAlloy(name)

        let heatingLevel = global.getHeatingLevel(name)

        global.mixingAlloy(input1, input2, output, heatingLevel)
    }

    event.recipes.createMixing(Fluid.of('kubejs:molten_netherite', 30), ['minecraft:netherite_scrap', Fluid.of('kubejs:molten_gold', 50)]).superheated()
    event.recipes.createMixing(Fluid.of('createbigcannons:molten_nethersteel', 2), [Fluid.of('kubejs:molten_netherite', 1), Fluid.of('createbigcannons:molten_steel', 1)]).superheated()
    event.recipes.createMixing('create:chromatic_compound', ['botania:elementium_ingot', Fluid.of('createbigcannons:molten_nethersteel', 30)]).superheated()

    alloy('brass', 'kubejs:molten_copper', 'kubejs:molten_zinc', 'kubejs:molten_brass')
    alloy('electrum', 'kubejs:molten_gold', 'kubejs:molten_silver', 'kubejs:molten_electrum')
    alloy('constantan', 'kubejs:molten_nickel', 'kubejs:molten_copper', 'kubejs:molten_constantan')

})