const ingredient = require("../model/ingredients");

const getIngredient = (req, res) => {
    ingredient.findOne({ _id: req.params.ingID })
        .then((ingredients) => {
            res.json(ingredients);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
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
    ingredient.findOneAndUpdate(
        { _id: req.params.ingID },
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
const deleteIngredient = (req, res) => {
    ingredient.deleteOne({ _id: req.params.ingID })
        .then((ingredients) => {
            res.json(ingredients);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};
module.exports = {
    getIngredient,
    getIngredients,
    createIngredient,
    updateIngredient,
    deleteIngredient,
};