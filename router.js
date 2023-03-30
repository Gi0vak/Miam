const router = require("express").Router();

const { getIngredients, createIngredient, updateIngredient, deleteIngredient } = require("./controllers/ing");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get("/ingredients", getIngredients);

router.post("/ingredients", createIngredient);

router.put("/ingredients/:ingID", updateIngredient);

router.delete("/ingredients/:ingID", deleteIngredient);

module.exports = router;
