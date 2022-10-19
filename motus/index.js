const express = require("express");
const app = express();
const port = process.env.PORT || 3000 
const os = require("os");
var fs = require("fs");
app.use(express.static("www"))
var array = fs
  .readFileSync(__dirname + "/data/liste_francais_utf8.txt")
  .toString()
  .split("\n");
var fichier = fs.readFileSync(__dirname+'/data/mot.json')
var mot = JSON.parse(fichier)

app.get("/word", (req, res) => {
  date_ob = new Date();

  // current date
  // adjust 0 before single digit date
  date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  year = date_ob.getFullYear();

  const content = date + "/" + month + "/" + year;
  var datecourante = fs
    .readFileSync(__dirname + "/data/test.txt")
    .toString()
    .split("\n");

  if (datecourante[0] === content) {
  } else {
    fs.writeFile(
      __dirname + "/data/test.txt",
      content + "\n" + Math.floor(Math.random() * 22739),
      (err) => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      }
    );
  }

  const indicemotmystere = datecourante[1];
  res.status(201).json({
    word_of_the_day : array[indicemotmystere]
  })
});

app.get("/play",(req,res)=>{
  console.log(req.query.name);
  res.status(200).json({
    name:req.query.name
  })
})


app.get("/port",(req,res)=>{
  res.status(200).json({
    serveur : "Motus app working on : ",
    hostname : os.hostname(),
    port : port
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




app.use(express.static('www'))

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/www/home.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*app.get('/word', (req,res)=>{
    if (req.query.id){
        res.send(array[req.query.id])
    }
    else {
        res.send(array[mot.id])
        //console.log(array.length)
    }
})
*/

app.get('/score', (req, res)=>{
  res.sendFile(__dirname+'/www/score.html')
})


