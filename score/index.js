const express = require("express");
const app = express();
const store = require("store");
const port = process.env.PORT ||4000 

app.get("/", (req, res) => {
    res.send("Hello World !");
  });

app.get("/",(req,res)=> {
    // Store current user 
store.set('user', { name:'Marcus' })

// Get current user 
store.get('user')


// Loop over all stored values 
store.each(function(value, key) {
    console.log(key, '==', value)
})
res.send("Check console")
})

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });