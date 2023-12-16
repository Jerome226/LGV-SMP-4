onEvent('tags.blocks', event => {
    event.add('minecraft:mineable/pickaxe', 'create_jetpack:jetpack')

    global.blocksToFix.forEach(i => {
        event.add('minecraft:mineable/pickaxe', i)
        event.add('minecraft:mineable/axe', i)
    });
})

onEvent('tags.items', event => {
    event.add('minecraft:mineable/pickaxe', 'create_jetpack:jetpack')
})

onEvent('tags.fluids', event => {

    global.extraTagFluidsWater = [
        'vs_clockwork:vanilla_frosting',
        'vs_clockwork:strawberry_frosting',
        'vs_clockwork:chocolate_frosting',
        'immersivepetroleum:crudeoil',
        'immersivepetroleum:diesel_sulfur',
        'immersivepetroleum:diesel',
        'immersivepetroleum:lubricant',
        'immersivepetroleum:gasoline',
        'immersivepetroleum:naphtha',
        'immersivepetroleum:naphtha_cracked',
        'immersivepetroleum:lubricant_cracked',
        'immersivepetroleum:kerosene',
        'immersivepetroleum:gasoline_additives',
        'immersivepetroleum:napalm',
        'immersiveengineering:creosote',
        'immersiveengineering:plantoil',
        'immersiveengineering:ethanol',
        'immersiveengineering:biodiesel',
        'immersiveengineering:concrete',
        'immersiveengineering:herbicide',
        'immersiveengineering:redstone_acid',
        'immersiveengineering:acetaldehyde',
        'immersiveengineering:phenolic_resin'
    ]

    global.extraTagFluidsLava = [
    ]

    global.extraTagFluidsWater.forEach(i => {
        global.tagFluids.push(`${i}/minecraft:water/no`)
    });

    global.extraTagFluidsLava.forEach(i => {
        global.tagFluids.push(`${i}/minecraft:lava/no`)
    });

    global.fluidsToAdd.forEach(i => {
        let result = i.split('/')
        let name = result[0]

        global.tagFluids.push(`kubejs:${name}/minecraft:lava`)
    });
    
    event.add('kubejs:water', 'minecraft:water')
    event.add('forge:molten_nethersteel', 'createbigcannons:molten_nethersteel')

    global.tagFluids.forEach(i => {
        let result = i.split('/')
        let name = result[0]
        let tag = result[1]
        let selfTag = result[2]
        let nameCut = name.split(':')
        let nameResult = nameCut[0] + ':flowing_' + nameCut[1]
        let nameTag = 'forge:' + nameCut[1]

        if (nameCut[0] == 'immersiveengineering' || nameCut[0] == 'immersivepetroleum') {
            nameResult = nameCut[0] + ':' + nameCut[1] + '_flowing'
        }

        if (tag == 'minecraft:water' || tag == 'minecraft:lava') {
            event.add(tag, nameResult)

            if (selfTag !== 'no') {
                event.add(nameTag, nameResult)
                event.add(nameTag, name)
            }
        }

        event.add(tag, name)
    });

});