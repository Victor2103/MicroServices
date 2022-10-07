const express = require("express");
const app = express();
const store = require("store2");
const port = process.env.PORT ||4000 
const path = require('path');
const session = require('cookie-session');

app.use(express.static("www"));



app.get("/", (req, res) => {
    res.send("Hello World !");
  });

app.get("/score",(req,res)=> {
    // Setting store key and data
store('Score', {name: 'Adam', age: 27, salary: 3452}); 
store.setAll({name: 'Adam', age: 34});
console.log(store("name"))

});


app.use('/static', express.static(path.join(__dirname, 'www')))


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });