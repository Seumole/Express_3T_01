const express = require("express");
const app = express();

// CRIAÇÂO DA PORTA
const PORT = 3333;

// CRIAÇÃO DA ROTA HOMEPAGE
app.get("/", (req, res) => {
  res.send("Olá, pagina inicial!");
});

// ESCUTANDO UMA PORTA NO SERVIDOR
app.listen(PORT, function () {
  console.log("ESCUTANDO A PORTA " + PORT);
});
