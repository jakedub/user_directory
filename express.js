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

function hire(){
  for (let i=0; i<realData.users.job.length; i++)
  if (realData[i].users.job === "null"){
    return "Available for hire";
  }
}

app.get('/template', function (req, res) {
  res.render("template", realData);
});

app.listen(3000, function () {
  console.log('The robots are coming');
})
