// ENVIRONMENT & DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const bcrypt = require('bcrypt')

//DATABASE
const connectDB = require("./mongoDB/mongoDB.js");

// ROUTERS
const authRouter = require("./routers/auth.js");
const recipesRouter = require('./routers/recipes.js')
const ingredientsRouter = require('./routers/ingredients.js')

// MIDDLEWARE
const isSignedIn = require('./middleware/is-signed-in.js')

// APP INITIALIZATION
const app = express();
connectDB();

// GLOBAL MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// PUBLIC ROUTES (No Authentication Required)
app.use("/auth", authRouter);

// AUTHENTICATION MIDDLEWARE
app.use(isSignedIn)

// PROTECTED ROUTES (Authentication Required)
app.use('/recipes', recipesRouter)
app.use('/ingredients', ingredientsRouter)

// SERVER
const PORT = process.env.PORT ? process.env.PORT : "5001";

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
});
