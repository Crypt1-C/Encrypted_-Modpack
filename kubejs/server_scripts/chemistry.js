// priority: 0

var white = "minecraft:white_concrete"
var gray = "minecraft:gray_concrete"
var lightgray = "minecraft:light_gray_concrete"
var black = "minecraft:black_concrete"
var red = "minecraft:red_concrete"
var green = "minecraft:green_concrete"
var blue = "minecraft:blue_concrete"
var lime = "minecraft:lime_concrete"
var yellow = "minecraft:yellow_concrete"
var orange = "minecraft:orange_concrete"
var purple = "minecraft:purple_concrete"
var magenta = "minecraft:magenta_concrete"
var pink = "minecraft:pink_concrete"
var lightblue = "minecraft:light_blue_concrete"
var brown = "minecraft:brown_concrete"
var cyan = "minecraft:cyan_concrete"

onEvent('recipes', e => {

    e.shaped("8x minecraft:light_gray_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_iron'
        })    

    e.shaped("8x minecraft:orange_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_copper'
        }) 

    e.shaped("8x minecraft:red_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:compound_iron_oxide'
        }) 

    e.shaped("8x minecraft:gray_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_tungsten'
        }) 

    e.shaped("8x minecraft:pink_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_magnesium'
        }) 

    e.shaped("8x minecraft:black_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_carbon'
        }) 

    e.shaped("8x minecraft:green_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_rubidium'
        }) 

    e.shaped("8x minecraft:brown_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_neodymium'
        }) 

    e.shaped("8x minecraft:blue_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_argon'
        })

    e.shaped("8x minecraft:purple_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_iodine'
        })

    e.shaped("8x minecraft:cyan_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_barium'
        })

    e.shaped("8x minecraft:lime_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_neon'
        })

    e.shaped("8x minecraft:yellow_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_sulfur'
        })

    e.shaped("8x minecraft:light_blue_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_niobium'
        })

    e.shaped("8x minecraft:magenta_concrete", [
        'BBB',
        'BEB',
        'BBB'],
        {
            B: white,
            E: 'chemlib:element_gallium'
        })


       
    

})