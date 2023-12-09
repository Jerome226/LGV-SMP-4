onEvent('recipes', event => {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
          "tag": "forge:plates/electrum"
        },
        "transitionalItem": {
          "item": "create:incomplete_precision_mechanism"
        },
        "sequence": [
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create:incomplete_precision_mechanism"
              },
              {
                "item": "create:cogwheel"
              }
            ],
            "results": [
              {
                "item": "create:incomplete_precision_mechanism"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create:incomplete_precision_mechanism"
              },
              {
                "item": "create:large_cogwheel"
              }
            ],
            "results": [
              {
                "item": "create:incomplete_precision_mechanism"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create:incomplete_precision_mechanism"
              },
              {
                "item": "immersiveengineering:hammer"
              }
            ],
            "results": [
              {
                "item": "create:incomplete_precision_mechanism"
              }
            ]
          },
          {
            "type": "create:deploying",
            "ingredients": [
              {
                "item": "create:incomplete_precision_mechanism"
              },
              {
                "tag": "forge:nuggets/iron"
              }
            ],
            "results": [
              {
                "item": "create:incomplete_precision_mechanism"
              }
            ]
          }
        ],
        "results": [
          {
            "item": "create:precision_mechanism",
            "chance": 120.0
          },
          {
            "item": "create:golden_sheet",
            "chance": 8.0
          },
          {
            "item": "create:andesite_alloy",
            "chance": 8.0
          },
          {
            "item": "create:cogwheel",
            "chance": 5.0
          },
          {
            "item": "minecraft:gold_nugget",
            "chance": 3.0
          },
          {
            "item": "create:shaft",
            "chance": 2.0
          },
          {
            "item": "create:crushed_gold_ore",
            "chance": 2.0
          },
          {
            "item": "minecraft:iron_ingot"
          },
          {
            "item": "minecraft:clock"
          }
        ],
        "loops": 5
      }).id('create:kinetics/precision_mechanism')

})