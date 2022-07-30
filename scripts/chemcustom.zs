

<recipetype:alchemistry:combiner>.addJsonRecipe("crafttweaker_custom_al", {
  "group": "minecraft:misc",
   "input": [
    {
      "item": "chemlib:element_aluminum",
      "count": 16
    }
  ],
  "result": {
    "item": "alltheores:aluminum_ingot"
    }
 }); 

 <recipetype:alchemistry:combiner>.removeByName("alchemistry:combiner/ingot_aluminum");

 <recipetype:alchemistry:combiner>.addJsonRecipe("crafttweaker_custom_zi", {
  "group": "minecraft:misc",
   "input": [
    {
      "item": "chemlib:element_zinc",
      "count": 16
    }
  ],
  "result": {
    "item": "alltheores:zinc_ingot"
    }
 }); 

 <recipetype:alchemistry:combiner>.removeByName("alchemistry:combiner/ingot_zinc");

