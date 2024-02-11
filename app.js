const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use("/", require("./router/Routes"));

app.use((req, res, next) => {
  res.status(404).render("404", {
    title: "404",
    description: "Page Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening in http://localhost:${PORT}`);
});
