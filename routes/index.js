const express = require("express");
const router = express.Router();
const PizzaController = require("../controllers/PizzaController");



router.get("/pizzas", PizzaController.listar);

router.post("/pizzas", PizzaController.criarUmaPizza);

router.put("/pizzas/:id", PizzaController.editarUmaPizza);

router.delete("/pizzas/:id", PizzaController.deletarUmaPizza);


module.exports = router;
