const router = require("express").Router();

const {
    getIngredient,
    getIngredients,
    createIngredient,
    updateIngredient,
    deleteIngredient
} = require("./controllers/ing");

const {
    getRecipe,
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe
} = require("./controllers/rec");


//Paths to the ingredients

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});
router.get("/ingredients", getIngredients);

router.get("/ingredients/:ingID", getIngredient);

router.post("/ingredients", createIngredient);

router.put("/ingredients/:ingID", updateIngredient);

router.delete("/ingredients/:ingID", deleteIngredient);


//paths to the recipes

router.get("/recipes", getRecipes);

router.get("/Recipes/:recID", getRecipe);

router.post("/Recipes", createRecipe);

router.put("/Recipes/:recID", updateRecipe);

router.delete("/Recipes/:recID", deleteRecipe);

module.exports = router;
