const express = require('express')
const router = express.Router()
const plantsController = require('../controllers/plants')

router.get('/', plantsController.getAllPlants)
router.post('/', plantsController.createPlant)
router.get('/:plantId', plantsController.getOnePlant)
router.put('/plantId', plantsController.updatePlant)
router.delete('/plantId', plantsController.deletePlant)

module.exports = router