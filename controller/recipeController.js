const recipes = require('../models/recipeModel')

// get all recipes
exports.getAllRecipesController = async (req,res)=>{
    console.log('inside getAllRecipesController');
    try{
    const allRecipes = await recipes.find()
    res.status(200).json(allRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}

// view recipe
exports.viewRecipeController = async (req,res)=>{
    console.log('inside viewRecipeController ');
    const {id} = req.params
    try{
    const viewRecipe = await recipes.findById({_id:id})
    res.status(200).json(viewRecipe)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}

// related recipes
exports.relatedRecipesController = async (req,res)=>{
    console.log('inside relatedRecipesController ');
    const cuisine = req.query.cuisine
    try{
    const allRecipes = await recipes.find({cuisine})
    res.status(200).json(allRecipes)
    }catch(error){
        console.log(error);
        res.status(500).json(error)
        
    }
    
}

