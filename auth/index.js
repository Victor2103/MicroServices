const express = require("express");
const app = express();
const port = process.env.PORT ||5000 ;
const session = require('cookie-session');
const path=require("path");
var fs = require("fs");
var list= ["test","test2"]

app.use('/', express.static(path.join(__dirname, 'www')))

const expiryDate = new Date(Date.now()+60*60) // 1 hour

app.set('trust proxy', 1) // trust first proxy

app.use(session({
  name: 'session',
  keys: ['key1', 'key2'],
  user:undefined,
  cookie: {
    secure: true,
    httpOnly: true,
    domain: 'localhost',
    path: '/cookie',
    expires: expiryDate
  }
}))

app.use((req,res,next)=>{
    if(req.session.user){
      next();
    }else{
      res.redirect("/login.html")
    }
 })

app.get('/cookie', function (req, res, next) {
  // Update views
  console.log(JSON.stringify(req.session.user))
  res.status(201).json({
    session : req.session
  })
})

app.post("/login.html",(req,res)=>{
    if (req.body.login in list){
        res.status(402).json({
            erreur: "C'est une erreur"
        })
    }else {
        req.session.user=req.query.login
        console.log("je suis ici")
    }
})


app.get("/", (req, res) => {
    res.send("Hello World !");
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });