const express = require("express");
const app = express();
const port = process.env.PORT ||5000 ;
const session = require('cookie-session');



const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'localhost',
    path: 'foo/bar',
    expires: expiryDate
  }
}));



app.get("/", (req, res) => {
    res.send("Hello World !");
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });