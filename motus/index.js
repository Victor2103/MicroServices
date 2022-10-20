const express = require("express");
const app = express();
const port = process.env.PORT || 8080
const os = require("os");
var fs = require("fs");
app.use(express.static("www"));

var array = fs
  .readFileSync(__dirname + "/data/liste_francais_utf8.txt")
  .toString()
  .split("\n");

//Loki pour les logs  
const loki_uri = process.env.LOKI || "http://127.0.0.1:3100";

const { createLogger, transports } = require("winston");
const LokiTransport = require("winston-loki");
const options = {
  transports: [
    new LokiTransport({
      host: loki_uri
    })
  ]
};
const logger = createLogger(options);

function Verification_mot() {
  var fichier = fs.readFileSync(__dirname+'/data/mot.json')
  var mot = JSON.parse(fichier)
  var date_ob = new Date();
  // current date
  // adjust 0 before single digit date
  day = ("0" + date_ob.getDate()).slice(-2);
  // current month
  month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  // current year
  year = date_ob.getFullYear();
  var date_jour = day + "/" + month + "/" + year;
  if (date_jour === mot.date) {
    //ne rien faire
  } else {
    mot.id = Math.floor(Math.random()*22739)
    mot.date = date_jour
  }
  let donnees = JSON.stringify(mot)
  fs.writeFileSync(__dirname+'/data/mot.json', donnees)
}
function get_mot() {
  var fichier = fs.readFileSync(__dirname+'/data/mot.json')
  var mot = JSON.parse(fichier)
  return mot
}

app.get('/', (req, res) => {
  Verification_mot();
  res.sendFile(__dirname+'/www/home.html')
  logger.info({ message: 'URL '+req.url , labels: { 'url': req.url, 'user':'test' } });
  logger.debug({ message: 'test', labels: { 'key': 'value' } });
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

app.get('/word', (req,res)=>{
    if (req.query.id){
        res.send(array[req.query.id])
    }
    else {
        mot = get_mot()
        res.send(array[mot.id])
        //console.log(array.length)
    }
})


app.get('/score', (req, res)=>{
  res.sendFile(__dirname+'/www/score.html')
})

