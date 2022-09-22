const express = require('express')
const app = express()
const port = 3000

var fs = require('fs')
var array = fs.readFileSync(__dirname+'/data/liste_francais_utf8.txt').toString().split("\n");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/word', (req,res)=>{
    res.send(array[req.query.id])
})