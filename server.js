const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  const items = [
    {
      title: "E",
      message: "JS renderiza HTML com JS",
    },
    {
      title: "J",
      message: "avascript é o futuro!",
    },
    {
      title: "S",
      message: "imples e leve",
    },
  ];
  const subtitle =
    "Uma linguagem de modelagem, para criação de página HTML usando JS";
  response.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", (request, response) => {
  response.render("pages/about");
});

app.use((request, response) => {
  response.status(404).render("pages/404");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
