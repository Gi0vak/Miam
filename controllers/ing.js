const ingredient = require("../model/ingredients");

const getIngredients = (req, res) => {
    ingredient.find()
        .then((ingredients) => {
            res.json(ingredients);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const createIngredient = (req, res) => {
    const ing = new ingredient({
        name: req.body.name,
        quantity: req.body.quantity,
        expirationDate: req.body.expirationDate,
    });
    ing.save()
        .then((ingredient) => {
            res.json(ingredient);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const updateIngredient = (req, res) => {
    ingredient.find()
        .then((ingredients) => {
            res.json(ingredients);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
const deleteIngredient = (req, res) => {
    ingredient.find()
        .then((ingredients) => {
            res.json(ingredients);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
module.exports = {
    getIngredients,
    createIngredient,
    updateIngredient,
    deleteIngredient,
};