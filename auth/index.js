const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const path = require("path");
const store = require("store2");
store.set("test", { firstname: "test", lastname: "test", password: "test" });

app.use("/", express.static(path.join(__dirname, "www")));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
  if (req.query.client_id!="PGv4V2jvbZRZSZ6"){
    res.status(403).send("Error 403 : non authorized")
  }
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
  var check = false;
  store.each((value, key) => {
    if (value === req.body.username && key.password === req.body.password) {
      check = true;
    }
  });
  if (check) {
    session = req.session;
    session.userid = req.body.username;
    console.log(req.session);
    //res.redirect("http://localhost:3000/");
    res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
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
  var check = false;
  store.each((value, key) => {
    if (value === req.body.username) {
      check = true;
    }
  });
  if (check) {
    res.status(201).json({
      erreur: "Il existe déjà cet username",
    });
  } else {
    if (req.body.password != req.body.password2) {
      res.status(201).json({
        erreur: "Mauvais mot de passe pour cette session",
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
