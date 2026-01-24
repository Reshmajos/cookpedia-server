const express = require('express')
const recipeController = require('../controller/recipeController')
const userController = require('../controller/userController')
const downloadCotroller =require('../controller/downloadController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

const router = new express.Router()

// get all recipes
router.get('/recipes',recipeController.getAllRecipesController)
// register
router.post('/register',userController.registerController)

// login

router.post('/login',userController.loginController)

// ................Authorised user........

// view recipe
router.get('/recipes/:id',jwtMiddleware,recipeController.viewRecipeController)

// get related recipe
router.get('/related-recipes',jwtMiddleware,recipeController.relatedRecipesController)

// add to download
router.post('/downloads/:id',jwtMiddleware,downloadCotroller.addToDownloadsController)

module.exports = router

