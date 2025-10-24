const express = require('express')
const router = express.Router()
const { allRecipes, createRecipe, getRecipe, deleteRecipe, updateRecipe } = require("../controllers/recipes");


router.get('/', allRecipes);
router.post('/', createRecipe)
router.get('/:recipeId', getRecipe)
router.delete('/:recipeId', deleteRecipe)
router.put('/:recipeId', updateRecipe)

module.exports = router