const express = require("express");
const app = express();
const store = require("store2");
const port = process.env.PORT || 4000;
const path = require("path");
var userScore;

app.use(express.static("www"));

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/score", (req, res) => {
  // Setting store key and data
  /*fetch("http:localhost:8080/score").then(score => {
    store.each()
    score["score"]
  })*/
  store.set("user", { name: "Adam", age: 34 });
  store.set("user1", { name: "user1", age: 35 });
  store.each(function (value, key) {
    console.log(key, "==", value);
    console.log(typeof key);
    console.log(typeof value);
  });
  res.status(201).json({
    ok: "ok",
  });
});

app.use("/static", express.static(path.join(__dirname, "www")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
