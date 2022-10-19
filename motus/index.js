const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const os = require("os");
var fs = require("fs");
app.use(express.static("www"));

var array = fs
  .readFileSync(__dirname + "/data/liste_francais_utf8.txt")
  .toString()
  .split("\n");

function Verification_mot() {
  var fichier = fs.readFileSync(__dirname + "/data/mot.json");
  var mot = JSON.parse(fichier);
  var date_ob = new Date();
  // current date
  // adjust 0 before single digit date
  day = ("0" + date_ob.getDate()).slice(-2);
  // current month
  month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  // current year
  year = date_ob.getFullYear();
  var date_jour = day + "/" + month + "/" + year;
  var date_mot = mot.date;
  if (date_jour === date_mot) {
  } else {
    mot.id = Math.floor(Math.random() * 22739);
  }
  let donnees = JSON.stringify(mot);
  fs.writeFileSync(__dirname + "/data/mot.json", donnees);
}
function get_mot() {
  var fichier = fs.readFileSync(__dirname + "/data/mot.json");
  var mot = JSON.parse(fichier);
  return mot;
}

app.get("*", (req, res, next) => {
  session = req.session;
  if (session.userid || req.url == "/register") {
    next();
  } else res.sendFile("/login.html", { root: __dirname + "/www" });
});

app.get("/", (req, res) => {
  Verification_mot();
  res.sendFile(__dirname + "/www/home.html");
});

app.get("/port", (req, res) => {
  res.status(200).json({
    serveur: "Motus app working on : ",
    hostname: os.hostname(),
    port: port,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/word", (req, res) => {
  if (req.query.id) {
    res.send(array[req.query.id]);
  } else {
    mot = get_mot();
    res.send(array[mot.id]);
    //console.log(array.length)
  }
});

app.get("/score", (req, res) => {
  res.sendFile(__dirname + "/www/score.html");
});
