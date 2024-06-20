   notes.js
console.log("This is notes files");
var age = 24;
function add(a,b){
    return a+b;
}

module.exports = {
     age,
     add
}
//////////////////////////////////////////////////////////////////
server.js
const notes = require('./notes.js');
console.log("This is server file");

var age = notes.age;

var ans = notes.add(age+20,20);
console.log(ans);
