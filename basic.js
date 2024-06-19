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

