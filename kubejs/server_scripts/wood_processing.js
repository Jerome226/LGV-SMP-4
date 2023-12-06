onEvent('recipes', event => {

    function wood(mod, item) {
        let log0 = global.getLog(item)
        let wood0 = global.getWood(item)
        let log = `${mod}:${item}_${log0}`
        let wood = `${mod}:${item}_${wood0}`
        let stripped_log = `${mod}:stripped_${item}_${log0}`
        let stripped_wood = `${mod}:stripped_${item}_${wood0}`
        let planks = `${mod}:${item}_planks`

        global.sawmill(log, stripped_log, planks, 8)
        global.sawmill(wood, stripped_wood, planks, 8)

    }

    global.vanillaWoodTypes.forEach(i => {
        wood('minecraft', i)
    });

    global.bopWoodTypes.forEach(i => {
        wood('biomesoplenty', i)
    });
    
    global.quarkWoodTypes.forEach(i => {
        wood('quark', i)
    });

})