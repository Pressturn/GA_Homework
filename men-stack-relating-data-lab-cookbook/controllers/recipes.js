const User = require('../models/Users.js')
const Recipe = require('../models/Recipes.js')


const allRecipes = async (req, res) => {
    try {
        const username = req.user.username
        const user = await User.findOne({ username: username })

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        const recipes = await Recipe.find({ owner: user._id })
        res.status(200).json(recipes)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createRecipe = async (req, res) => {
    try {
        const username = req.user.username
        const user = await User.findOne({ username: username })

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        req.body.owner = user._id
        const createdRecipe = await Recipe.create(req.body)
        res.status(201).json(createdRecipe)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getRecipe = async (req, res) => {
    try {
        const username = req.user.username
        const user = await User.findOne({ username: username })

        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        const recipeId = req.params.recipeId
        const recipe = await Recipe.findById(recipeId)

        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" })
        }

        res.status(200).json(recipe)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const username = req.user.username
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }

        const recipeId = req.params.recipeId
        const recipe = await Recipe.findById(recipeId)

        if (!recipe.owner.equals(user._id)) {
            return res.status(403).send("You are not allowed to do that")
        }

        const deletedRecipe = await Recipe.findByIdAndDelete(recipeId)
        res.status(200).json(deletedRecipe)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const updateRecipe = async (req, res) => {
    try {
        const username = req.user.username
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        const recipeId = req.params.recipeId
        const recipe = await Recipe.findById(recipeId)

        if (!recipe.owner.equals(user._id)) {
            return res.status(403).send("You are not allowed to do that")
        }

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            recipeId,
            req.body,
            { new: true }
        )
        res.status(200).json(updatedRecipe)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = { allRecipes, createRecipe, getRecipe, deleteRecipe, updateRecipe }