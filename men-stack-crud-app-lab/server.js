
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
})

const plantsRouter = require('./routes/plants'
    
)
app.use('/plants', plantsRouter)

app.listen(PORT, () => {
    console.log('Server is Running')

})