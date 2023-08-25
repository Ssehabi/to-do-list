const express = require("express");
const app = express();
const Port = 3000;

//   init pug
app.set("view engine", "pug");
app.set("view ", "./views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const listTasks = [];

app.get("/", (req, res) => {
  res.render("page");
});
app.post("/add", (req, res) => {
  const Task = req.body.Task;

  res.redirect("/");
});

app.listen(Port, () => {
  console.log(`server is running on port ${Port},`);
});
