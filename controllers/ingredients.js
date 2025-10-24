const User = require('../models/Users.js')
const Recipe = require('../models/Recipes.js')
const Ingredient = require('../models/Ingredients.js')

const allIngredients = async (req, res) => {
    try {

        const ingredients = await Ingredient.find()
        res.status(210).json(ingredients)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createIngredients = async (req, res) => {
    try {
        const newIngredient = await Ingredient.create(req.body)
        res.status(201).json(newIngredient)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { allIngredients, createIngredients }