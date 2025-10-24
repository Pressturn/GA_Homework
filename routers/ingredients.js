const express = require('express')
const router = express.Router()
const { allIngredients, createIngredients } = require('../controllers/ingredients.js')


router.get('/', allIngredients)
router.post('/', createIngredients)

module.exports = router