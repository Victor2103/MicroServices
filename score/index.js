const express = require("express");
const app = express();
const store = require("store2");
const port = process.env.PORT || 4000;
const path = require("path");
const cors = require("cors");
var userScore;

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
  if (req.body.username) {
    var fichier = fs.readFileSync(__dirname + "/score.json");
    var all = JSON.parse(fichier);
    all.array.forEach((element) => {
      if (element.username === req.body.username) {
        element.score = element.score += req.body.score;
      }
    });
    fs.writeFileSync(__dirname + "/score.json", all);
    next();
  } else {
    res.send("non authorize");
  }
});

app.get("/score", (req, res) => {});

app.use("/static", express.static(path.join(__dirname, "www")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
