

const express = require('express')
const app = express()
const port = 3000

var fs = require('fs');
var array = fs.readFileSync(__dirname+'/liste_francais.txt').toString().split("\n");


app.get('/', (req, res) => {
  res.send('Hello World !')
})


app.get('/word',(req,res)=>{
  res.send(array[127])
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})