if(5>3){
    console.log("is greater than");
}

var cat = "tabby";
if(5 === cat.length){
    console.log("is this length");
}

// var cat = "tabby";
var dog = "bull";
if (cat !== dog){
    console.log("not the same");
}

// BRONZE MEDAL
var person = {  
    name: "Bobby",
    age: 12
  }

if (person.name.startsWith("B") && person.age >= 18){
    console.log(person.name + " is allowed to go to the movie");
}else{
    console.log("Sorry " + person.name + " is not allowed to go to the movie.")
}

// Silver Medal
if(1 === "1"){
    console.log("strict");
} else if(1 == "1"){
    console.log("loose");
}else {
    console.log("not equal at all");
}

if (((1 <= 2) && (2 === 4)) || (((3*4)>10) && ((5+10)>10))){
    console.log("yes");
}
// GOLD MEDAL
if (typeof dog === "string") {
    console.log("string");
} else {
    console.log("not a string");
}

if (typeof "true" === "boolean") {
    console.log("boolean");
} else {
    console.log("not boolean");
}

if (typeof cat !== 'undefined') {
    console.log("the variable is defined");
}

if ("g" > 3){
    console.log("g is greater than 3");
}else if( "g" < 3){
    console.log("g is less than 3");
}else {
    console.log("g is not a number");
}

var myNum = 22;  
// Write your ternary here to log if `myNum` is odd or even.
var numIs = myNum % 2 === 0 ? "even" : "odd";
console.log(numIs);
