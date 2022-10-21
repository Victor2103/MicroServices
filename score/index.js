const express = require("express");
const app = express();
const store = require("store2");
const port = process.env.PORT || 4000;
const path = require("path");
const cors = require("cors");
var fs = require("fs");
const { response } = require("express");

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));

app.use(express.static("www"));

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/update", (req, res) => {
  if (req.query.username) {
    var fichier = fs.readFileSync(__dirname + "/score.json");
    var all = JSON.parse(fichier);
    all.forEach(element => {
      if (element.username===req.query.username) {
        element.score = element.score + req.query.score;
        element.nbTentative = element.nbTentative + 1;
      }
    });
    let donnees = JSON.stringify(all);
    fs.writeFileSync(__dirname + "/score.json", donnees);
    res.send('ok')}
  else{
    res.send('error')
  }
});

app.get("/score", (req, res) => {
  if (req.query.username) {
    var fichier = fs.readFileSync(__dirname + "/score.json");
    var all = JSON.parse(fichier);
    all.forEach(element => {
      if (element.username===req.query.username) {
        var reponse = element
        res.send(reponse)
      }
    })
    
  }
  else{
    res.send('error')
  }
});

app.use("/static", express.static(path.join(__dirname, "www")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
