const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

const os = require('os')
const fs = require('fs')

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

app.get('/score', (req, res)=>{
  res.sendFile(__dirname+'/www/score.html')
})

app.get('/hostname', (req,res)=>{
    res.send(os.hostname())
})
