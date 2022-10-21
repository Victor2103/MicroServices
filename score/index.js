const express = require("express");
const app = express();
const store = require("store2");
const port = process.env.PORT || 4000;
const path = require("path");
const jwt = require("jsonwebtoken");
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

app.post("/score", (req, res) => {
  console.log(req.body.token);
  jwt.verify(req.body.token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(user);
    if (err) {
      return res.sendStatus(401);
    } else {
      console.log(user);
      var fichier = fs.readFileSync(__dirname + "/data/mot.json");
      var mot = JSON.parse(fichier);
      store.each((value, key) => {
        if (value === user["username"]) {
        }
      });
    }
  });
  store.set("user", { name: "Adam", age: 34 });
  store.set("user1", { name: "user1", age: 35 });
  res.status(201).json({
    ok: "ok",
  });
});

app.get("score", (req, res) => {
  if (req.query.token) {
    var fichier = fs.readFileSync(__dirname + "/data/mot.json");
    var all = JSON.parse(fichier);
    jwt.verify(
      req.query.token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, user) => {
        if (err) {
          res.sendStatus(401);
        } else {
        }
      }
    );
  }
});

app.use("/static", express.static(path.join(__dirname, "www")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
