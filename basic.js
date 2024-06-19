const person ={
    name:"ranjeet",
    age:20,
    isStudent:false,
    hobbies:["reading","learning","painting"]
};

console.log(person.hobbies);
console.log(person.name);
console.log(person.isStudent);

const ages = [32,22,34,55];
const result = ages.filter(chechage);

function chechage(age){
    return age>18;
}
console.log(result);

const age = prompt("Enter age:");
if (Number(age) < 18) {
    console.log("You get 20% discount");
} else {
    console.log("You will not get 20% discount");
}


// method 1 for creating function
function add(a,b){
    return a+b;
}

// method 2 for creating function
var add = function(a,b){
    return a+b;
}

// // method 3 for creating function
var add = (a,b)=>{
    return a+b;
}

// method 4 for creating function
var add = (a,b)=> a+b;

// method 5 for creating function
(function(){
    console.log("ranjeet");
})();

var result = add(3,7);
console.log(result);

//******function calling another fucntion is call callback******callback fuction method1***********

function callback(){
    console.log("callback fucntion");
}

const add = function(a,b,callback){
    var result = a+b;
    console.log("result:"+result); // main function
    callback(); // callback fucntion
}

add(3,4,callback);


//******function calling another fucntion is call callback******callback fuction method2***********


const add = function(a,b,callback){
    var result = a+b;
    console.log("result:"+result); // main function
    callback(); // callback fucntion
}
add(2,3,function(){
    console.log("add completed")
});

add(2,3,()=>console.log("add completed"));

