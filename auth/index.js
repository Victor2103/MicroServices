const express = require("express");
const app = express();
const port = process.env.PORT ||5000 ;
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const path=require("path");
var list= ["test","test2"]

app.use('/', express.static(path.join(__dirname, 'www')))
app.use(cookieParser());
// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.set('trust proxy', 1) // trust first proxy

//username and password
const myusername = 'user1'
const mypassword = 'mypassword'

// a variable to save a session
var session;

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.get("/",(req,res) => {
  session=req.session;
  if(session.userid){
      res.send("Welcome User <a href=\'/logout'>click to logout</a>");
  }else
  res.sendFile('/login.html',{root:__dirname+"/www"})
});

app.get('/cookie', function (req, res, next) {
  // Update views
  console.log(JSON.stringify(req.session.user))
  res.status(201).json({
    session : req.session
  })
})

app.post('/user',(req,res) => {
  if(req.body.username == myusername && req.body.password == mypassword){
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session)
      res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  }
  else{
      res.send('Invalid username or password');
  }
})

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });