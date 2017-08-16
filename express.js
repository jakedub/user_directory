const express = require ("express");
const app = express ();
const realData = require ("./data.js")
const mustacheExpress = require("mustache-express");
app.engine("mustache", mustacheExpress());
app.set("views", "./views")
app.set("view engine", "mustache")
app.use(express.static("public"))

app.get('/user', function (req, res) {
  res.render("user", realData);
});

app.get('/template', function (req, res) {
  // let first = mustache.querySelector(".first")
  // realData.innerHTML = "";
  // realData.innerHTML = `
  // <div class="box">
  // {{user}}
  // <div>`
  // first.appendChild(box);
  res.render("template", realData);
});

app.listen(3000, function () {
  console.log('The robots are coming');
})
