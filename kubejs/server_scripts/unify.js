onEvent('recipes', event => {

    function remove(i) {
        if (i !== null) {
            event.remove({ output: i, type: 'minecraft:crafting_shaped' })
            event.remove({ output: i, type: 'minecraft:crafting_shapeless' })
        }
    }
    function removeFurnace(i) {
        if (i !== null) {
            event.remove({ output: i, type: 'minecraft:smelting' })
            event.remove({ output: i, type: 'minecraft:blasting' })
            event.remove({ output: i, type: 'minecraft:campfire_cooking' })
        }
    }
    function removeArcFurnace(i) {
        event.remove({ id: `immersiveengineering:arcfurnace/dust_${i}` })
        event.remove({ id: `immersiveengineering:arcfurnace/raw_block_${i}` })
        event.remove({ id: `immersiveengineering:arcfurnace/ore_${i}` })
        event.remove({ id: `immersiveengineering:arcfurnace/raw_ore_${i}` })
    }
    function removePlate(i) {
        event.remove({ id: `create:pressing/${i}_ingot` })
        event.remove({ id: `createaddition:pressing/${i}_ingot` })
        event.remove({ id: `immersiveengineering:crafting/plate_${i}_hammering` })
        event.remove({ id: `immersiveengineering:metalpress/plate_${i}` })
    }
    function removeRod(i) {
        event.remove({ id: `immersiveengineering:crafting/stick_${i}` })
        event.remove({ id: `immersiveengineering:metalpress/rod_${i}` })
        event.remove({ id: `createaddition:rolling/${i}_ingot` })
    }
    function removeWire(i) {
        event.remove({ id: `immersiveengineering:crafting/wire_${i}` })
        event.remove({ id: `immersiveengineering:metalpress/wire_${i}` })
        event.remove({ id: `createaddition:rolling/${i}_plate` })
    }
    function removeDust(i) {
        event.remove({ id: `immersiveengineering:crafting/hammercrushing_${i}` })
        event.remove({ id: `immersiveengineering:crafting/raw_hammercrushing_${i}` })
        event.remove({ id: `immersiveengineering:crusher/ore_${i}` })
        event.remove({ id: `immersiveengineering:crusher/raw_ore_${i}` })
        event.remove({ id: `immersiveengineering:crusher/ingot_${i}` })
        event.remove({ id: `immersiveengineering:crusher/raw_block_${i}` })
        event.remove({ id: `createaddition:compat/immersiveengineering/crushing/${i}_ingot` })
    }
    function removeCrushed(i) {
        event.remove({ id: `create:crushing/deepslate_${i}_ore` })
        event.remove({ id: `create:crushing/${i}_ore` })
        event.remove({ id: `create:crushing/raw_${i}_ore` })
        event.remove({ id: `create:crushing/raw_${i}` })
        event.remove({ id: `create:crushing/raw_${i}_block` })
    }
    function removeFluid(i) {
        event.remove({ id: `createbigcannons:melting/melt_${i}_nugget` })
        event.remove({ id: `createbigcannons:melting/melt_${i}_block` })
        event.remove({ id: `createbigcannons:melting/melt_${i}_ingot` })
        event.remove({ id: `createbigcannons:compacting/forge_${i}_ingot` })
        event.remove({ id: `createbigcannons:compacting/forge_${i}_nugget` })
    }
    function unify(metal, ore, oreBlock, ingot, nugget, block, plate, rod, dust, secondDust, crushed, wire, fluid) {
        /*
            Raw Ore
        */
        remove(ore)
        global.shapeless(oreBlock, ore, 9)

        /*
            Raw Ore Block
        */
        remove(oreBlock)
        global.shaped(ore, oreBlock, 1)

        /*
            Ingot
        */
        remove(ingot)
        global.shapeless(block, ingot, 9)
        global.shaped(nugget, ingot, 1)

        removeFurnace(ingot)
        global.smeltingMetal(ore, ingot, 1)
        global.smeltingMetal(dust, ingot, 1)
        global.smeltingMetal(crushed, ingot, 1)

        removeArcFurnace(metal)
        global.arcFurnace(ore, ingot, 1, ingot, 0.5)
        global.arcFurnace(dust, ingot, 1)
        global.arcFurnace(crushed, ingot, 3, ingot, 0.75)

        /*
            Nugget
        */
        remove(nugget)
        global.shapeless(ingot, nugget, 9)

        /*
            Block
        */
        remove(block)
        global.shaped(ingot, block, 1)

        /*
            Plate
        */
        removePlate(metal)
        global.pressing(ingot, plate)

        /*
            Rod
        */
        removeRod(metal)
        global.rolling(ingot, rod)

        /*
            Dust
        */
        removeDust(metal)
        global.crusher(ingot, dust, 1)
        global.crusher(crushed, dust, 3, secondDust, 0.15)

        /*
            Crushed Ore
        */
        removeCrushed(metal)
        global.crushingWheel(ingot, dust, 1)
        global.crushingWheel(crushed, dust, 2, dust, 0.05)
        global.crushingWheel(ore, crushed, 1, dust, 0.15)

        /*
            Wire
        */
        removeWire(metal)
        global.rollingWire(plate, wire)

        /*
            Fluid
        */
        removeFluid(metal)
        let heatingLevel = global.getHeatingLevel(metal)
        global.melting(ingot, fluid, 90, heatingLevel)
        global.melting(dust, fluid, 90, heatingLevel)
        global.melting(nugget, fluid, 10, heatingLevel)
        global.melting(block, fluid, 810, heatingLevel)

        global.compactingFluid(fluid, 10, nugget)

        global.bottlingMold(fluid, 90, ingot, "immersiveengineering:mold_plate")
        global.bottlingMold(fluid, 810, block, "immersiveengineering:mold_packing_9")
    }

    removeFluid('bronze')
    global.arcFurnace('immersiveengineering:raw_aluminum', 'kubejs:raw_aluminum', 1)

    unify('iron', 'minecraft:raw_iron', 'minecraft:raw_iron_block', 'minecraft:iron_ingot', 'minecraft:iron_nugget', 'minecraft:iron_block', 'immersiveengineering:plate_iron', 'immersiveengineering:stick_iron', 'immersiveengineering:dust_iron', 'immersiveengineering:dust_nickel', 'create:crushed_iron_ore', null, 'kubejs:molten_iron')
    unify('gold', 'minecraft:raw_gold', 'minecraft:raw_gold_block', 'minecraft:gold_ingot', 'minecraft:gold_nugget', 'minecraft:gold_block', 'immersiveengineering:plate_gold', 'createaddition:gold_rod', 'immersiveengineering:dust_gold', 'immersiveengineering:dust_copper', 'create:crushed_gold_ore', null, 'kubejs:molten_gold')
    unify('copper', 'minecraft:raw_copper', 'minecraft:raw_copper_block', 'minecraft:copper_ingot', 'immersiveengineering:nugget_copper', 'minecraft:copper_block', 'immersiveengineering:plate_copper', 'createaddition:copper_rod', 'immersiveengineering:dust_copper', 'immersiveengineering:dust_gold', 'create:crushed_copper_ore', 'immersiveengineering:wire_copper', 'kubejs:molten_copper')
    unify('netherite', null, null, 'minecraft:netherite_ingot', null, 'minecraft:netherite_block', null, null, null, null, null, null, 'kubejs:molten_netherite')

    unify('zinc', 'create:raw_zinc', 'create:raw_zinc_block', 'create:zinc_ingot', 'create:zinc_nugget', 'create:zinc_block', 'createaddition:zinc_sheet', null, 'kubejs:zinc_grit', 'immersiveengineering:dust_iron', 'create:crushed_zinc_ore', null, 'kubejs:molten_zinc')
    unify('brass', null, null, 'create:brass_ingot', 'create:brass_nugget', 'create:brass_block', 'create:brass_sheet', 'createaddition:brass_rod', null, null, null, null, 'kubejs:molten_brass')

    unify('lead', 'immersiveengineering:raw_lead', 'immersiveengineering:raw_block_lead', 'immersiveengineering:ingot_lead', 'immersiveengineering:nugget_lead', 'immersiveengineering:storage_lead', 'immersiveengineering:plate_lead', null, 'immersiveengineering:dust_lead', 'immersiveengineering:dust_silver', 'create:crushed_lead_ore', 'immersiveengineering:wire_lead', 'kubejs:molten_lead')
    unify('nickel', 'immersiveengineering:raw_nickel', 'immersiveengineering:raw_block_nickel', 'immersiveengineering:ingot_nickel', 'immersiveengineering:nugget_nickel', 'immersiveengineering:storage_nickel', 'immersiveengineering:plate_nickel', null, 'immersiveengineering:dust_nickel', 'immersiveengineering:dust_iron', 'create:crushed_nickel_ore', null, 'kubejs:molten_nickel')
    unify('silver', 'immersiveengineering:raw_silver', 'immersiveengineering:raw_block_silver', 'immersiveengineering:ingot_silver', 'immersiveengineering:nugget_silver', 'immersiveengineering:storage_silver', 'immersiveengineering:plate_silver', null, 'immersiveengineering:dust_silver', 'immersiveengineering:dust_lead', 'create:crushed_silver_ore', null, 'kubejs:molten_silver')
    unify('uranium', 'immersiveengineering:raw_uranium', 'immersiveengineering:raw_block_uranium', 'immersiveengineering:ingot_uranium', 'immersiveengineering:nugget_uranium', 'immersiveengineering:storage_uranium', 'immersiveengineering:plate_uranium', null, 'immersiveengineering:dust_uranium', 'immersiveengineering:dust_lead', 'create:crushed_uranium_ore', null, 'kubejs:molten_uranium')
    unify('aluminum', 'kubejs:raw_aluminum', 'kubejs:raw_aluminum_block', 'immersiveengineering:ingot_aluminum', 'immersiveengineering:nugget_aluminum', 'immersiveengineering:storage_aluminum', 'immersiveengineering:plate_aluminum', 'immersiveengineering:stick_aluminum', 'immersiveengineering:dust_aluminum', 'immersiveengineering:dust_uranium', 'create:crushed_aluminum_ore', 'immersiveengineering:wire_aluminum', 'kubejs:molten_aluminum')

    unify('electrum', null, null, 'immersiveengineering:ingot_electrum', 'immersiveengineering:nugget_electrum', 'immersiveengineering:storage_electrum', 'immersiveengineering:plate_electrum', null, 'immersiveengineering:dust_electrum', null, null, 'immersiveengineering:wire_electrum', 'kubejs:molten_electrum')
    unify('constantan', null, null, 'immersiveengineering:ingot_constantan', 'immersiveengineering:nugget_constantan', 'immersiveengineering:storage_constantan', 'immersiveengineering:plate_constantan', null, 'immersiveengineering:dust_constantan', null, null, null, 'kubejs:molten_constantan')
    unify('steel', null, null, 'immersiveengineering:ingot_steel', 'immersiveengineering:nugget_steel', 'immersiveengineering:storage_steel', 'immersiveengineering:plate_steel', 'immersiveengineering:stick_steel', 'immersiveengineering:dust_steel', null, null, 'immersiveengineering:wire_steel', 'createbigcannons:molten_steel')

    unify('nethersteel', null, null, 'createbigcannons:nethersteel_ingot', 'createbigcannons:nethersteel_nugget', 'createbigcannons:nethersteel_block', null, null, null, null, null, null, 'createbigcannons:molten_nethersteel')
})