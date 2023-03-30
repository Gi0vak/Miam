
// Importe le module mongoose
const mongoose = require("mongoose");

// Définit le schéma de données pour une "Todo"
const ingredientSchema = new mongoose.Schema({
    name: { // name of the ingredient
        type: String,
        required: true, // La propriété est requise (elle doit être fournie)
    },
    quantity: { // quantity in the fridge of this ingredient
        type: Number,
        required: true,
    },
    expirationDate: { // expiration date of the ingredient
        type: Date,
        default: function () {
            const date = new Date(); // Obtient la date actuelle
            date.setDate(date.getDate() + 1); // Décale la date d'un jour
            return date; // Retourne la date décalée
        },
    }
});

// Exporte le modèle "Todo", basé sur le schéma de données "TodoSchema"
module.exports = mongoose.model("ingredient", ingredientSchema);



// En utilisant ce schéma de données, nous pouvons créer des documents "Todo" dans une base de données MongoDB en utilisant Mongoose. Le schéma de données garantit que les documents créés auront les propriétés "title", "description", "completed" et "createdAt", et que ces propriétés ont les types de données appropriés. En outre, certaines propriétés sont marquées comme étant requises, ce qui signifie que la création d'un document "Todo" échouera si ces propriétés ne sont pas fournies.