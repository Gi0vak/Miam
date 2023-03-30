const Recipe = require("../model/recipes");

const getRecipe = (req, res) => {
    Recipe.findOne({ _id: req.params.recID })
        .then((Recipes) => {
            res.json(Recipes);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const getRecipes = (req, res) => {
    Recipe.find()
        .then((Recipes) => {
            res.json(Recipes);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const createRecipe = (req, res) => {
    const ing = new Recipe({
        name: req.body.name,
        quantity: req.body.quantity,
        expirationDate: req.body.expirationDate,
    });
    ing.save()
        .then((Recipe) => {
            res.json(Recipe);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate(
        { _id: req.params.recID },
        {
            $set: {
                name: req.body.name,
                quantity: req.body.quantity,
                expirationDate: req.body.expirationDate,
            },
        },
        { new: true })
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const deleteRecipe = (req, res) => {
    Recipe.deleteOne({ _id: req.params.recID })
        .then((Recipes) => {
            res.json(Recipes);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
module.exports = {
    getRecipe,
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};