global.removeAndHide.push(
    'kubejs:bio_slag',
    'quark:golden_apple_crate',
    'quark:apple_crate',
    'quark:potato_crate',
    'quark:carrot_crate',
    'quark:beetroot_crate',
    'everycomp:q/botania/dreamwood_ladder',
    'everycomp:q/myrtrees/rubberwood_ladder',
    'everycomp:q/botania/livingwood_ladder',
    'createaddition:redstone_relay',
    'createaddition:festive_spool',
    'createaddition:gold_wire',
    'createaddition:gold_spool',
    'createaddition:connector',
    'createaddition:spool',
    'create:copper_sheet',
    'create:copper_nugget',
    'create:golden_sheet',
    'create:iron_sheet',
    'createaddition:barbed_wire',
    'createaddition:copper_wire',
    'createaddition:copper_spool',
    'createaddition:iron_rod',
    'createaddition:iron_wire',
    'immersiveengineering:dust_wood'
)

global.bopWoodTypes.forEach(i => {
    global.removeAndHide.push(
        `compatoplenty:${i}_ladder`
    )
});

global.quarkWoodTypes.forEach(i => {
    global.removeAndHide.push(
        `quark:${i}_ladder`
    )
});

global.itemsToHide.push(    
    'create:dough'
)

global.fluidsToHide.push(
    'createaddition:seed_oil'
)

global.removeAndHide.forEach(i => {
    global.itemsToHide.push(i);
    global.recipesOutputToRemove.push(i);
});