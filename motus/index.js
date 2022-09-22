const express = require('express')
const app = express()
const port = 3000

var fs = require('fs')
var array = fs.readFileSync(__dirname+'/data/liste_francais_utf8.txt').toString().split("\n")
var fichier = fs.readFileSync(__dirname+'/data/mot.json')
var mot = JSON.parse(fichier)

app.use(express.static('www'))

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/www/home.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/word', (req,res)=>{
    if (req.query.id){
        res.send(array[req.query.id])
    }
    else {
        res.send(array[mot.id])
        //console.log(array.length)
    }
})

