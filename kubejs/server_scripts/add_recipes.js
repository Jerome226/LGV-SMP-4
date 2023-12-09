// priority: 11000

onEvent('recipes', event => {

    global.shaped = function shaped(input, output, outputCount) {
        if (input !== null && output !== null) {
            event.shaped(global.getCount(output, outputCount), [
                'AAA',
                'AAA',
                'AAA'
            ], {
                A: input
            }).id(global.getId('crafting', input, output))
        }
    }

    global.shapeless = function shapeless(input, output, outputCount) {
        if (input !== null && output !== null) {
            event.shapeless(global.getCount(output, outputCount), [input]).id(global.getId('crafting', input, output))
        }
    }

    global.smelt = function smelt(input, output, outputCount) {
        if (input !== null && output !== null) {
            event.smelting(global.getCount(output, outputCount), input).id(global.getId('smelting', input, output))
        }
    }

    global.blast = function blast(input, output, outputCount) {
        if (input !== null && output !== null) {
            event.blasting(global.getCount(output, outputCount), input).id(global.getId('blasting', input, output))
        }
    }

    global.smeltingMetal = function smeltingMetal(input, output, outputCount) {
        global.smelt(input, output, outputCount)
        global.blast(input, output, outputCount)
    }

    function getArcFurnaceTime(i) {
        let i2 = 100 * i

        return i2
    }

    function arcFurnaceNoChance(input, output, outputCount) {
        event.custom({
            "type": "immersiveengineering:arc_furnace",
            "results": [
                {
                    "count": outputCount,
                    "base_ingredient": {
                        "item": output
                    }
                }
            ],
            "additives": [],
            "input": {
                "item": input
            },
            "time": getArcFurnaceTime(outputCount),
            "energy": 25600
        }).id(global.getId('arcfurnace', input, output))
    }

    function arcFurnaceChance(input, output, outputCount, output2, output2Chance) {
        event.custom({
            "type": "immersiveengineering:arc_furnace",
            "results": [
                {
                    "count": outputCount,
                    "base_ingredient": {
                        "item": output
                    }
                }
            ],
            "additives": [],
            "secondaries": [
                {
                    "chance": output2Chance,
                    "output": {
                        "item": output2
                    }
                }
            ],
            "input": {
                "item": input
            },
            "time": getArcFurnaceTime(outputCount),
            "energy": 25600
        }).id(global.getId('arcfurnace', input, output))
    }

    global.arcFurnace = function arcFurnace(input, output, outputCount, output2, output2Chance) {

        if (input !== null && output !== null) {
            if (output2 == undefined && output2Chance == undefined) {
                arcFurnaceNoChance(input, output, outputCount)
            } else {
                arcFurnaceChance(input, output, outputCount, output2, output2Chance)
            }
        }
    }

    global.metalPress = function metalPress(input, output, outputCount, mold) {
        if (input !== null && output !== null && mold !== null) {
            event.custom({
                "type": "immersiveengineering:metal_press",
                "mold": mold,
                "result": {
                    "count": outputCount,
                    "base_ingredient": {
                        "item": output
                    }
                },
                "input": {
                    "item": input
                },
                "energy": 2400
            }).id(global.getId('metalpress', input, output))
        }
    }

    global.mechPress = function mechPress(input, output) {
        if (input !== null && output !== null) {
            event.custom({
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": input
                    }
                ],
                "results": [
                    {
                        "item": output
                    }
                ]
            }).id(global.getId('pressing', input, output))
        }
    }

    global.mechRoller = function mechRoller(input, output, outputCount) {
        if (input !== null && output !== null) {
            event.custom({
                "type": "createaddition:rolling",
                "input": {
                    "item": input
                },
                "result": {
                    "item": output,
                    "count": outputCount
                }
            }).id(global.getId('rolling', input, output))
        }
    }

    global.pressing = function pressing(input, output) {
        global.metalPress(input, output, 1, "immersiveengineering:mold_plate")
        global.mechPress(input, output)
    }

    global.rolling = function rolling(input, output) {
        global.metalPress(input, output, 2, "immersiveengineering:mold_rod")
        global.mechRoller(input, output, 1)
    }

    global.rollingWire = function rollingWire(input, output) {
        global.metalPress(input, output, 2, "immersiveengineering:mold_wire")
        global.mechRoller(input, output, 1)
    }

    function crusherNoChance(input, output, outputCount) {
        event.custom({
            "type": "immersiveengineering:crusher",
            "secondaries": [],
            "result": {
                "count": outputCount,
                "base_ingredient": {
                    "item": output
                }
            },
            "input": {
                "item": input
            },
            "energy": 3000
        }).id(global.getId('crusher', input, output))
    }

    function crusherChance(input, output, outputCount, output2, output2Chance) {
        event.custom({
            "type": "immersiveengineering:crusher",
            "secondaries": [
                {
                    "chance": 0.5,
                    "output": {
                        "item": output
                    }
                },
                {
                    "chance": output2Chance,
                    "output": {
                        "item": output2
                    }
                }
            ],
            "result": {
                "count": outputCount,
                "base_ingredient": {
                    "item": output
                }
            },
            "input": {
                "item": input
            },
            "energy": 3000
        }).id(global.getId('crusher', input, output))
    }

    global.crusher = function crusher(input, output, outputCount, output2, output2Chance) {
        if (input !== null && output !== null) {
            if (output2 == undefined && output2Chance == undefined) {
                crusherNoChance(input, output, outputCount)
            } else {
                crusherChance(input, output, outputCount, output2, output2Chance)
            }
        }
    }

    function crushingWheelNoChance(input, output, outputCount) {
        event.custom({
            "type": "create:crushing",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "results": [
                {
                    "item": output,
                    "count": outputCount
                }
            ],
            "processingTime": 400
        }).id(global.getId('crushing', input, output))
    }

    function crushingWheelChance(input, output, outputCount, output2, output2Chance) {
        event.custom({
            "type": "create:crushing",
            "ingredients": [
                {
                    "item": input
                }
            ],
            "results": [
                {
                    "item": output,
                    "count": outputCount
                },
                {
                    "item": output2,
                    "chance": output2Chance
                }
            ],
            "processingTime": 400
        }).id(global.getId('crushing', input, output))
    }

    global.crushingWheel = function crushingWheel(input, output, outputCount, output2, output2Chance) {
        if (input !== null && output !== null) {
            if (output2 == undefined && output2Chance == undefined) {
                crushingWheelNoChance(input, output, outputCount)
            } else {
                crushingWheelChance(input, output, outputCount, output2, output2Chance)
            }
        }
    }

    function meltingTime(i) {
        let i2 = 2 * i

        return i2
    }

    global.melting = function melting(input, fluid, fluidAmount, heatingLevel) {
        if (input !== null && fluid !== null) {
            event.custom({
                "type": "createbigcannons:melting",
                "ingredients": [
                    {
                        "item": input
                    }
                ],
                "results": [
                    {
                        "fluid": fluid,
                        "amount": fluidAmount
                    }
                ],
                "processingTime": meltingTime(fluidAmount),
                "heatRequirement": heatingLevel,
                "conditions": []
            }).id(global.getId('melting', input, fluid))
        }
    }

    global.compactingFluid = function compactingFluid(fluid, fluidAmount, output) {
        if (output !== null && fluid !== null) {
            event.custom({
                "type": "create:compacting",
                "ingredients": [
                    {
                        "fluid": fluid,
                        "amount": fluidAmount
                    }
                ],
                "results": [
                    {
                        "item": output
                    }
                ],
                "conditions": [
                ]
            }).id(global.getId('compacting_fluid', fluid, output))
        }
    }

    global.bottlingMold = function bottlingMold(fluid, fluidAmount, output, mold) {
        if (output !== null && fluid !== null) {
            let fluidTag = global.getFluidTag(fluid)

            event.custom({
                "type": "immersiveengineering:bottling_machine",
                "results": [
                    {
                        "item": output
                    },
                    {
                        "item": mold
                    }
                ],
                "input": {
                    "item": mold
                },
                "fluid": {
                    "tag": fluidTag,
                    "amount": fluidAmount
                }
            }).id(global.getId('bottling_mold', fluid, output))
        }
    }

    global.sawmill = function sawmill(input, stripped, output, outputCount) {
        event.custom({
            "type": "immersiveengineering:sawmill",
            "secondaries": [
                {
                    "output": {
                        "item": "immersiveengineering:sawdust"
                    },
                    "stripping": true
                },
                {
                    "output": {
                        "item": "immersiveengineering:sawdust"
                    },
                    "stripping": false
                }
            ],
            "result": {
                "item": output,
                "count": outputCount
            },
            "energy": 1600,
            "input": [
                {
                    "item": input
                }
            ],
            "stripped": {
                "item": stripped
            }
        }).id(global.getId('sawmill', input, output))
    }

    global.mixingAlloy = function mixingAlloy(input, input2, output, heatingLevel) {
        event.custom({
            "type": "create:mixing",
            "ingredients": [
                {
                    "fluid": input,
                    "amount": 10
                },
                {
                    "fluid": input2,
                    "amount": 10
                }
            ],
            "results": [
                {
                    "fluid": output,
                    "amount": 20
                }
            ],
            "heatRequirement": "heated"
        }).id(global.getId('alloying', input, output))
    }

    global.addItemApplication = function addItemApplication(isTag, block, input, result) {
        if (isTag) {
            event.custom({
                "type": "create:item_application",
                "ingredients": [
                    {
                        "tag": block
                    },
                    {
                        "item": input
                    }
                ],
                "results": [
                    {
                        "item": result
                    }
                ]
            }).id(global.getId('item_application', input, result))
        } else {
            event.custom({
                "type": "create:item_application",
                "ingredients": [
                    {
                        "item": block
                    },
                    {
                        "item": input
                    }
                ],
                "results": [
                    {
                        "item": result
                    }
                ]
            }).id(global.getId('item_application', input, result))
        }
    }
})