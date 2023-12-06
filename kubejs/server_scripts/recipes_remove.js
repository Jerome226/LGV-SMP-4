// priority: 110000

onEvent('recipes', event => {

	global.recipesOutputToRemove.push(
	)
	global.recipesOutputToRemove.forEach(i => event.remove({ output: i }));
	global.recipesIdToRemove.push(
		'create:crafting/materials/andesite_alloy',
		'create:crafting/materials/andesite_alloy_from_zinc',
		'create:mixing/andesite_alloy',
		'createbigcannons:mixing/alloy_nethersteel_cast_iron',
		'createbigcannons:mixing/alloy_nethersteel_steel',
		'immersiveengineering:crafting/rs_engineering',
		'immersiveengineering:crafting/light_engineering',
		'immersiveengineering:crafting/heavy_engineering',
		'immersiveengineering:refinery/acetaldehyde',
		'create:item_application/brass_casing_from_log',
		'create:item_application/brass_casing_from_wood',
		'create:sequenced_assembly/precision_mechanism',
		'immersiveengineering:crafting/component_iron',
		'immersiveengineering:crafting/component_steel',
		'immersiveengineering:crafting/sawdust',
		'immersiveengineering:crafting/concrete',
		'createaddition:mixing/biomass_from_plants',
		'createaddition:mixing/biomass_from_leaves',
		'createaddition:mixing/biomass_from_saplings',
		'createaddition:mixing/biomass_from_sticks',
		'createaddition:mixing/biomass_from_flowers',
		'createaddition:mixing/biomass_from_crops',
		'createaddition:mixing/biomass_from_honeycomb',
		'createaddition:mixing/biomass_from_plant_foods',
		'createaddition:mixing/bioethanol',
		'immersiveengineering:fermenter/sugar_cane',
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
		'immersiveengineering:cloche',
		'immersiveengineering:sawmill'
	)
	global.recipesTypeToRemove.forEach(i => event.remove({ type: i }));

}) 