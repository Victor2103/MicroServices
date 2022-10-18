const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const path = require("path");
const store = require("store2");
var list = ["test", "test2"];
store.set("user", { name: "hello" });

app.use("/", express.static(path.join(__dirname, "www")));
app.use(cookieParser());
// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.set('trust proxy', 1) // trust first proxy

//username and password
const myusername = "user1";
const mypassword = "mypassword";

var listUtilisateur;
listUtilisateur = [myusername];

// a variable to save a session
var session;

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
  } else res.sendFile("/login.html", { root: __dirname + "/www" });
});

app.get("/", (req, res) => {
  res.send("Hey there, welcome <a href='/logout'>click to logout</a>");
});

app.get("/session", function (req, res, next) {
  // Update views
  session = req.session;
  if (session.userid) {
    console.log(JSON.stringify(req.session.user));
    res.status(201).json({
      session: req.session,
    });
  } else res.redirect("/");
});

app.post("/user", (req, res) => {
  if (req.body.username == myusername && req.body.password == mypassword) {
    session = req.session;
    session.userid = req.body.username;
    console.log(req.session);
    res.redirect("http://localhost:3000/");
    //res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  } else {
    res.send("Invalid username or password");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.get("/register", (req, res) => {
  res.sendFile("/register.html", { root: __dirname + "/www" });
});

app.post("/test", (req, res) => {
  store.set("user", { name: "hello" });
  store.each(function (value, key) {
    console.log(value);
    if (value === req.body.username) {
      res.status(201).json({
        erreur: "Username already is the database",
      });
    } else {
      if (req.body.password != req.body.password2) {
        res.status(201).json({
          erreur: "Please enter the same password",
        });
      } else {
        store.set(req.body.username, {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          password: req.body.password,
        });
        console.log(store.get(req.body.username));
        res.status(201).json({
          message: "Vous pouvez vous connecter ",
        });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
