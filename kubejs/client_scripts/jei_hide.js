//priority: 1000

onEvent('jei.hide.items', event => {
    global.itemsToHide.forEach(i => event.hide([Item.of(i).ignoreNBT()]));
    global.fluidsToHide.forEach(i => event.hide([Item.of(`${i}_bucket`).ignoreNBT()]));

});

onEvent('jei.hide.fluids', event => {
    global.fluidsToHide.forEach(i => event.hide(i));
})

onEvent('jei.remove.categories', event => {
    console.log(event.getCategoryIds()) //log a list of all category ids to logs/kubejs/client.txt
    
    global.categoriesToHide.forEach(i => event.remove([i]));
})

onEvent('rei.hide.items', event => {
    global.itemsToHide.forEach(i => event.hide([Item.of(i).ignoreNBT()]));
    global.fluidsToHide.forEach(i => event.hide([Item.of(`${i}_bucket`).ignoreNBT()]));

});

onEvent('rei.hide.fluids', event => {
    global.fluidsToHide.forEach(i => event.hide(i));
})

onEvent('rei.remove.categories', event => {    
    global.categoriesToHide.forEach(i => event.remove([i]));
})