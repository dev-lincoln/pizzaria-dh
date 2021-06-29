const pizzas = require("../database/pizzas.json");
const fs = require("fs");

const PizzaModel = {
  findAll: () => {
    return pizzas;
  },
  create: (pizza) => {
    pizzas.push(pizza);
    fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));
  },
  update: (pizza) => {
    fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));
  },
  destroy: (pizza) => {
    pizzas.splice(pizza, 1);
    fs.writeFileSync("./database/pizzas.json", JSON.stringify(pizzas));
  },
};

module.exports = PizzaModel;
