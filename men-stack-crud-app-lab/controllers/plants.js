const Plant = require('../models/plant')

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
        res.json(plants)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createPlant = async (req, res) => {
    try {
        const newPlant = await Plant.create(req.body)
        res.status(201).json(newPlant)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const getOnePlant = async (req, res) => {
    try {
        const foundPlant = await Plant.findById(req.params.plantId)
        if (!foundPlant) {
            res.status(404)
            throw new Error('Plant not found')
        }
        res.status(200).json(foundPlant)
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })

        } else {
            res.status(500).json({ error: error.message })
        }
    }
}


const updatePlant = async (req, res) => {
    try {
        const updatedPlant = await Plant.findByIdAndUpdate(
            req.params.plantId,
            req.body,
            { new: true },
        )
        if (!updatedPlant) {
            res.status(404)
            throw new Error('Plant not found')
        }
        res.status(200).json(updatedPlant)
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message })
        }
    }
}


// app.delete('/plants/:plantId', async (req, res) => {
const deletePlant = async (req, res) => {
    try {
        const deletedPlant = await Plant.findByIdAndDelete(req.params.plantId)
        if (!deletedPlant) {
            res.status(404)
            throw new Error('Plant not found')
        }
        res.status(200).json(deletedPlant)
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = {
    getAllPlants,
    createPlant,
    getOnePlant,
    updatePlant,
    deletePlant,
}