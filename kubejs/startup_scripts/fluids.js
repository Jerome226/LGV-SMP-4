onEvent('fluid.registry', event => {
    event.create('pitch')
        .thinTexture(0x63492B)
        .bucketColor(0x63492B)
        .displayName('Pitch')
    global.tagFluids.push('kubejs:pitch/minecraft:water')

    event.create('raw_gasoline')
        .stillTexture('kubejs:block/fluid/raw_gasoline_still')
        .flowingTexture('kubejs:block/fluid/raw_gasoline_flow')
        .bucketColor(0x464646)
        .displayName('Raw Gasoline')
    global.tagFluids.push('kubejs:raw_gasoline/minecraft:water')

    event.create('bioplastic')
        .stillTexture('kubejs:block/fluid/bioplastic_still')
        .flowingTexture('kubejs:block/fluid/bioplastic_flow')
        .bucketColor(0x464646)
        .displayName('Bioplastic')
    global.tagFluids.push('kubejs:bioplastic/minecraft:water')

    event.create('epoxyresin')
        .stillTexture('kubejs:block/fluid/epoxyresin_still')
        .flowingTexture('kubejs:block/fluid/epoxyresin_flow')
        .bucketColor(0x464646)
        .displayName('Epoxy Resin')
    global.tagFluids.push('kubejs:epoxyresin/minecraft:water')

    global.fluidsToAdd = [
        'molten_iron/0xD8D8D8',
        'molten_gold/0xFAD64A',
        'molten_copper/0xE77C56',
        'molten_netherite/0x5A575A',
        'molten_lead/0x4C5163',
        'molten_nickel/0xAAB09F',
        'molten_silver/0xE5F3FD',
        'molten_electrum/0xFFCF51',
        'molten_aluminum/0xC3CACD',
        'molten_constantan/0xE78067',
        'molten_uranium/0x5F6D55',
        'molten_zinc/0xA8AA93',
        'molten_brass/0xE4C66A'
    ]

    global.fluidsToAdd.forEach(i => {
        let result = i.split('/')
        let name = result[0]
        let color = result[1]
        let cutColor = '#' + color.slice(2)
        let fluidColor = global.getColor(cutColor)
        let displayName = global.getCapitalizedWord(name)

        event.create(name)
            .thickTexture(fluidColor)
            .bucketColor(fluidColor)
            .displayName(displayName)
    });
})