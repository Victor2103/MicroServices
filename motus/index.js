const express = require("express");
const app = express();
const port = process.env.PORT || 3000 
const router=express.Router();
const os = require("os");
var fs = require("fs");
app.use(express.static("www"))
var array = fs
  .readFileSync(__dirname + "/data/liste_francais.txt")
  .toString()
  .split("\n");

app.get("/", (req, res) => {
  res.send("Hello World !");
});

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
  res.send(array[indicemotmystere]);
});

router.get("/play:name",(req,res)=>{
  console.log(req.params.name)
  res.status(200).json({
    name:req.params.name
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
