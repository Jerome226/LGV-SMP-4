global.getId = function getId(type, input, output) {
    let result0 = output.split(':')
    let result = input.split(':')
    
    let mod = result0[0]
    let output2 = result0[1]
    let input2 = result[1]
    let id = `${mod}:${type}/${output2}_from_${input2}`

    return id
}

global.getCount = function getCount(output, outputCount) {
    let i2 = `${outputCount}x ${output}`

    return i2
}

global.getFluidTag = function getFluidTag(i) {
    let result = i.split(':')
    let input = result[1]

    let i2 = `forge:${input}`

    return i2
}

global.getHeatingLevel = function getHeatingLevel(i) {
    let i2 = 'heated'
    switch(i) {
        case 'steel':
        case 'nethersteel':
        case 'netherite':
        case 'aluminum':
        case 'uranium':
            i2 = 'superheated'
        break;
    }

    return i2
}

global.isNetherWood = function isNetherWood(i) {
    let i2 = false

    switch (i) {
        case 'crimson':
        case 'warped':
            i2 = true
            break;
    }

    return i2
}

global.getLog = function getLog(i) {
    let i2 = 'log'

    if (global.isNetherWood(i)) {
        i2 = 'stem'
    }

    return i2
}

global.getWood = function getWood(i) {
    let i2 = 'wood'

    if (global.isNetherWood(i)) {
        i2 = 'hyphae'
    }

    return i2
}