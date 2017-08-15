const express = require ("express");
const app = express ();
const realData = require ("./data.js")
const mustacheExpress = require("mustache-express");
app.engine("mustache", mustacheExpress());
app.set("views", "./views")
app.set("view engine", "mustache")

const data = {
users: [
    {id: "", "username": "", "name": "", "avatar": "", "email": "", },
  ]
};

app.get("/robot", (req, res) => {
  res.render("robot", realData);
});

app.listen(3000, function () {
  console.log('The robots are coming');
})
