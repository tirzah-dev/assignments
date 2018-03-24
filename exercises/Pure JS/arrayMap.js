// Array Map Exercises
// 27 SEPTEMBER 2017
// Use the built-in .map() method on arrays to solve all of these problems

// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
   return arr.map(multNumByTwo);
}
function multNumByTwo(num){
   return num*2;
}
console.log(doubleNumbers([2, 5, 100])); 
// // 2) Take an array of numbers and make them strings
function stringItUp(arr){
    return arr.map(stringIt);
}
function stringIt(num){
    return num.toString();
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]  
// // 3) Capitalize each of an array of names
function capitalizeNames(arr){
    return arr.map(capitals);
}

function capitals(str){
    var newStr = str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    return newStr;
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// // 4) Make an array of strings of the names
function namesOnly(arr){
    return arr.map(getName);
}
function getName(obj){
    return obj.name;
}

console.log(namesOnly([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    return arr.map(canGo);
}

function canGo(obj){
    if (obj.age >= 18){
       return obj.name + " can go to The Matrix";
    } else {
      return obj.name + " is underage!!";
    } 
}

console.log(makeStrings([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    arr.map(addTags);
}

function addTags(obj){
    var newObj = { 
        : name.createElement("h1"),
        : age.createElement("h2")
    };
    return newObj
}
console.log(readyToPutInTheDOM([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])) 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]