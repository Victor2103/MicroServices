const express = require("express");
const app = express();
const port = 3000;
var fs = require("fs");

date_ob = new Date();

// current date
// adjust 0 before single digit date
date = ("0" + date_ob.getDate()).slice(-2);

// current month
month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
year = date_ob.getFullYear();




const content = date+"/"+month+"/"+year;
var datecourante = fs
  .readFileSync(__dirname + "/data/test.txt")
  .toString()
  .split("\n");

if (datecourante[0]===content){
  const motmystere=datecourante[1]
  console.log(motmystere)
} else {
  fs.writeFile(__dirname+'/data/test.txt', content, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}






var array = fs
  .readFileSync(__dirname + "/data/liste_francais.txt")
  .toString()
  .split("\n");

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/word", (req, res) => {
  res.send(array[127]);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
