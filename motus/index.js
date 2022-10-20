const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const os = require("os");
var fs = require("fs");
app.use(express.static("www"));
const sessions = require("express-session");
const jwt = require("jsonwebtoken");
var session;
require("dotenv").config({ path: `${__dirname}/../.env` });
const cors=require("cors");

app.use(cors())

// Gestion of the token and middleware
function authenticateToken(req, res, next) {
  if (req.query.token) {
    jwt.verify(req.query.token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(user);
      if (err) {
        return res.sendStatus(401);
      }
      session=req.session
      req.user = user;
      session.userid = user;
      next();
    });
  }else {
    var redirectUri = req.protocol + "://" + req.get("host") + req.url;
    res
      .status(302)
      .redirect(
        "http://localhost:5000/authorize?client_id=" +
          process.env.CLIENT_ID +
          "&scope=motus_app&redirect_uri=" +
          redirectUri
      );
}
}


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
/*
app.get("*", authenticateToken, (req, res, next) => {
  session = req.session;
  if (session.userid) {
    next();
  } /*else {
      var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
      console.log(fullUrl)
      res.sendFile("/login.html", { root: __dirname + "/www" });
    }*/ /*else {
    var redirectUri = req.protocol + "://" + req.get("host") + req.url;
    res
      .status(302)
      .redirect(
        "http://localhost:5000/authorize?client_id=" +
          process.env.CLIENT_ID +
          "&scope=motus_app&redirect_uri=" +
          redirectUri
      );
  }
});
*/

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



app.get("/",authenticateToken, (req, res) => {
  Verification_mot();
  res.sendFile(__dirname + "/www/home.html");
});

app.get("/port", authenticateToken,(req, res) => {
  res.status(200).json({
    serveur: "Motus app working on : ",
    hostname: os.hostname(),
    port: port,
  });
});



app.get("/word",authenticateToken, (req, res) => {
  if (req.query.id) {
    res.send(array[req.query.id]);
  } else {
    mot = get_mot();
    res.send(array[mot.id]);
    //console.log(array.length)
  }
});

app.get("/score", authenticateToken,(req, res) => {
  res.sendFile(__dirname + "/www/score.html");
});

//Handle the 404 error before send this to the localhost:5000
app.use((req, res, next) => {
  const error = new Error("Page web non trouvé");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
