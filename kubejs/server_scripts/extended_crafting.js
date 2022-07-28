// priority: 80

onEvent('recipes', e => {


// The Ultimate Ingot
e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "ABCDEFGHI",
    "JKLMNOPQR",
    "STUVWXYZa",
    "bcdefghij",
    "klmnopqrs",
    "tuvwxyz01",
    "         ",
    "         ",
    "         "
  ],
  "key": {
    "A": {
      "item": "alltheores:aluminum_ingot"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "alltheores:silver_ingot"
    },
    "D": {
      "item": "alltheores:nickel_ingot"
    },
    "E": {
      "item": "chemlib:ingot_calcium"
    },
    "F": {
      "item": "chemlib:ingot_chromium"
    },
    "G": {
      "item": "chemlib:ingot_cerium"
    },
    "H": {
      "item": "chemlib:ingot_sodium"
    },
    "I": {
      "item": "chemlib:ingot_silicon"
    },
    "J": {
      "item": "chemlib:ingot_cesium"
    },
    "K": {
      "item": "chemlib:ingot_praseodymium"
    },
    "L": {
      "item": "minecraft:gold_ingot"
    },
    "M": {
      "item": "chemlib:ingot_scandium"
    },
    "N": {
      "item": "chemlib:ingot_ruthenium"
    },
    "O": {
      "item": "chemlib:ingot_yttrium"
    },
    "P": {
      "item": "chemlib:ingot_zirconium"
    },
    "Q": {
      "item": "chemlib:ingot_potassium"
    },
    "R": {
      "item": "chemlib:ingot_cadmium"
    },
    "S": {
      "item": "beyond_earth:desh_ingot"
    },
    "T": {
      "item": "minecraft:copper_ingot"
    },
    "U": {
      "item": "chemlib:ingot_strontium"
    },
    "V": {
      "item": "chemlib:ingot_antimony"
    },
    "W": {
      "item": "beyond_earth:calorite_ingot"
    },
    "X": {
      "item": "chemlib:ingot_gallium"
    },
    "Y": {
      "item": "chemlib:ingot_rhodium"
    },
    "Z": {
      "item": "chemlib:ingot_hassium"
    },
    "a": {
      "item": "chemlib:ingot_molybdenum"
    },
    "b": {
      "item": "chemlib:ingot_tellurium"
    },
    "c": {
      "item": "chemlib:ingot_rubidium"
    },
    "d": {
      "item": "chemlib:ingot_neodymium"
    },
    "e": {
      "item": "beyond_earth:ostrum_ingot"
    },
    "f": {
      "item": "chemlib:ingot_magnesium"
    },
    "g": {
      "item": "chemlib:ingot_manganese"
    },
    "h": {
      "item": "chemlib:ingot_vanadium"
    },
    "i": {
      "item": "chemlib:ingot_selenium"
    },
    "j": {
      "item": "chemlib:ingot_copernicium"
    },
    "k": {
      "item": "chemlib:ingot_arsenic"
    },
    "l": {
      "item": "chemlib:ingot_technetium"
    },
    "m": {
      "item": "chemlib:ingot_lithium"
    },
    "n": {
      "item": "chemlib:ingot_titanium"
    },
    "o": {
      "item": "chemlib:ingot_palladium"
    },
    "p": {
      "item": "chemlib:ingot_barium"
    },
    "q": {
      "item": "create:zinc_ingot"
    },
    "r": {
      "item": "alltheores:tin_ingot"
    },
    "s": {
      "item": "chemlib:ingot_lanthanum"
    },
    "t": {
      "item": "chemlib:ingot_terbium"
    },
    "u": {
      "item": "chemlib:ingot_neptunium"
    },
    "v": {
      "item": "chemlib:ingot_niobium"
    },
    "w": {
      "item": "chemlib:ingot_hafnium"
    },
    "x": {
      "item": "chemlib:ingot_cobalt"
    },
    "y": {
      "item": "chemlib:ingot_germanium"
    },
    "z": {
      "item": "chemlib:ingot_boron"
    },
    "0": {
      "item": "chemlib:ingot_beryllium"
    },
    "1": {
      "item": "chemlib:ingot_indium"
    }
  },
  "result": {
    "item": "extendedcrafting:the_ultimate_ingot"
  }
})

// Creative Items

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "AABBBBBAA",
    "ABBBBBBBA",
    "ABBCBCBBA",
    "ABBBDBBBA",
    "ABBCBCBBA",
    "ABBBBBBBA",
    "AABBBBBAA",
    "AAAAAAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:netherite_ingot"
    },
    "B": {
      "item": "tconstruct:manyullyn_ingot"
    },
    "C": {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    "D": {
      "item": "extendedcrafting:ultimate_singularity"
    }
  },
  "result": {
    "item": "pipez:infinity_upgrade"
  }
})

e.custom({
  "type": "extendedcrafting:combination",
  "powerCost": 6900000,
  "input": {
    "item": "kubejs:creative_essence"
  },
  "ingredients": [
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:ultimate_singularity"
    },
    {
      "item": "extendedcrafting:ultimate_singularity"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:ultimate_singularity"
    },
    {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    {
      "item": "extendedcrafting:ultimate_singularity"
    }
  ],
  "result": {
    "item": "pneumaticcraft:creative_upgrade"
  }
})

e.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAAAAAAA",
    "ABCCDCCEA",
    "ACAAAAACA",
    "ACAFGFACA",
    "AHAGIGAHA",
    "ACAFGFACA",
    "ACAAAAACA",
    "AJCCDCCKA",
    "AAAAAAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:netherite_ingot"
    },
    "B": {
      "item": "mekanism:creative_energy_cube"
    },
    "C": {
      "item": "extendedcrafting:the_ultimate_ingot"
    },
    "D": {
      "item": "pipez:infinity_upgrade"
    },
    "E": {
      "item": "create:creative_fluid_tank"
    },
    "F": {
      "item": "extendedcrafting:ultimate_singularity"
    },
    "G": {
      "item": "kubejs:creative_essence"
    },
    "H": {
      "item": "pneumaticcraft:creative_upgrade"
    },
    "I": {
      "item": "storagedrawers:creative_storage_upgrade"
    },
    "J": {
      "item": "create:creative_motor"
    },
    "K": {
      "item": "createaddition:creative_energy"
    }
  },
  "result": {
    "item": "storagedrawers:creative_vending_upgrade"
  }
})

})