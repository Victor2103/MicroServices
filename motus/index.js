const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const os = require("os");
var fs = require("fs");
app.use(express.static("www"));
const sessions = require("express-session");



var array = fs
  .readFileSync(__dirname + "/data/liste_francais_utf8.txt")
  .toString()
  .split("\n");


//Use express session to control the authentification
  const oneDay = 1000 * 60 * 60 * 24;
  app.use(
    sessions({
      secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
      saveUninitialized: true,
      cookie: { maxAge: oneDay },
      resave: false,
    })
  );
  
  app.get("*", (req, res, next) => {
    session = req.session;
    if (session.userid || req.url == "/register") {
      next();
    } /*else {
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      console.log(fullUrl)
      res.sendFile("/login.html", { root: __dirname + "/www" });
    }*/
    else {
      var client_id="PGv4V2jvbZRZSZ6";
      var redirectUri=req.protocol + '://' + req.get('host') + req.originalUrl;
      res.status(302).redirect("http://localhost:5000/authorize?client_id="+client_id+"&scope=motus_app&redirect_uri="+redirectUri)
    }
  });



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
