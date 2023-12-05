// priority: 110000

onEvent('recipes', event => {

	global.recipesOutputToRemove.push(
	)
	global.recipesOutputToRemove.forEach(i => event.remove({ output: i }));
	global.recipesIdToRemove.push(
		'farmersdelight:integration/immersiveengineering/crusher/rice_panicle',
		'farmersdelight:integration/immersiveengineering/crusher/wild_beetroots',
		'farmersdelight:integration/immersiveengineering/crusher/rice_cabbages',
		'farmersdelight:integration/immersiveengineering/crusher/rice_carrots',
		'farmersdelight:integration/immersiveengineering/crusher/rice_onions',
		'farmersdelight:integration/immersiveengineering/crusher/rice_potatoes',
		'farmersdelight:integration/immersiveengineering/crusher/wild_rice',
		'farmersdelight:integration/immersiveengineering/crusher/rice_tomatoes',
		'farmersdelight:wheat_dough_from_water',
		'farmersdelight:wheat_dough_from_eggs',
		'createaddition:compacting/seed_oil',
		'create:crafting/appliances/slime_ball',
		'create:campfire_cooking/bread',
		'create:smelting/bread',
		'create:smoking/bread'
	)
	global.recipesIdToRemove.forEach(i => event.remove({ id: i }));
	global.recipesModToRemove.push(
		'vs_eureka'
	)
	global.recipesModToRemove.forEach(i => event.remove({ mod: i }));
	global.recipesTypeToRemove.push(
	)
	global.recipesTypeToRemove.forEach(i => event.remove({ type: i }));

}) 