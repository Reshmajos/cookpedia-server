const express = require('express')
const recipeController = require('../controller/recipeController')
const userController = require('../controller/userController')
const downloadCotroller =require('../controller/downloadController')
const saveController = require('../controller/saveController')
const feedbackController = require('../controller/feedbackController')
const jwtMiddleware = require('../middleware/jwtMiddleware')
const multerMiddleware = require('../middleware/multerMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')


const router = new express.Router()

// get all recipes
router.get('/recipes',recipeController.getAllRecipesController)
// register
router.post('/register',userController.registerController)

// login

router.post('/login',userController.loginController)

// add feedback

router.post('/feedback',feedbackController.addFeedbackController)

// get approve feedback

router.get('/feedbacks-approve',feedbackController.getApproveFeedbackController)



// ..........................................................Authorised user.......................................................................




// view recipe
router.get('/recipes/:id',jwtMiddleware,recipeController.viewRecipeController)

// get related recipe
router.get('/related-recipes',jwtMiddleware,recipeController.relatedRecipesController)

// add to download
router.post('/downloads/:id',jwtMiddleware,downloadCotroller.addToDownloadsController)

// add to save
router.post('/recipes/:id/save',jwtMiddleware,saveController.addToSaveRecipeController)

// get user save recipe
 router.get('/recipe-collection',jwtMiddleware,saveController.getUserSaveRecipesController)

 // remove user save recipe

 router.delete('/recipe-collection/:id',jwtMiddleware,saveController.removeUserRecipeItemController)

// get user download recipe list
 router.get('/user-downloads',jwtMiddleware,downloadCotroller.getUserDownloadListController)

 // edit user picture

 router.put('/user-edit',jwtMiddleware,multerMiddleware.single('picture'),userController.editUserPictureController)

 // get user list
 router.get('/user-list',adminMiddleware,userController.getAllUsersController)

 // get user download recipe list
 router.get('/downloads',adminMiddleware,downloadCotroller.getDownloadListController)

 // get all feedbacks list
 router.get('/feedbacks',adminMiddleware,feedbackController.getAllFeedbackController)

  // update feedbacks
 router.put('/feedbacks/:id',adminMiddleware,feedbackController.updateFeedbackStatusController)


module.exports = router

