var fs = require('fs');
var array = fs.readFileSync('liste_francais.txt').toString().split("\n");
for(i in array) {
    console.log(array[i]);
}