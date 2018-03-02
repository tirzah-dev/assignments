for (var i = 0; i < 10; i++) {
    console.log(i)
}


for (var i = 10; i >= 0; i--) {
    console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}

// BRONZE
var numArray = [];
for (var i = 0; i < 10; i++){
    numArray.push(i);
}
console.log(numArray)

for (var i = 0; i < 101; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
var altFruit = [];
for (var i = 0; i < fruit.length; i++){
    if(i % 2 === 0){
        altFruit.push(fruit[i]);
    }
}
console.log(altFruit);

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for (var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray[i].name);
  }

  var names = [];
  var occupations = [];
  for (var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
  }
  console.log(names)
  console.log(occupations)

var altPeople = [];
var altOccupations = [];
for (var i = 0; i < peopleArray.length; i++){
    if(i % 2 === 0){
        altPeople.push(peopleArray[i].name);
    } else if(i % 2 !== 0){
        altOccupations.push(peopleArray[i].occupation);
    }
}
console.log(altPeople);
console.log(altOccupations);

// ******GOLD MEDAL******//
// EXCESSIVE CODE MAKES ME SAD:(
// var zeroArrays = [];
// var innerZeroArrayOne = [];
// var innerZeroArrayTwo = [];
// var innerZeroArrayThree = [];
// for (var i = 0; i < 3; i++){
//     innerZeroArrayOne.push(0);
//     innerZeroArrayTwo.push(0);
//     innerZeroArrayThree.push(0);
// }
// zeroArrays.push(innerZeroArrayOne);
// zeroArrays.push(innerZeroArrayTwo);
// zeroArrays.push(innerZeroArrayThree);
// console.log(zeroArrays);

var output = [];
for (var i = 0; i < 3; i++){
    output.push([]);
    for (var j = 0; j <  3; j++){
        output[i].push(0);
    }
}
console.log(output);

var output = [];
for (var i = 0; i < 3; i++){
    output.push([]);
    for (var j = 0; j <  3; j++){
        output[i].push(i);
    }
}
console.log(output);

var output = [];
for (var i = 0; i < 3; i++){
    output.push([]);
    for (var j = 0; j <  3; j++){
        output[i].push(j);
    }
}
console.log(output);

var output = [];
for (var i = 0; i < 3; i++){
    output.push([]);
    for (var j = 0; j <  3; j++){
        output[i].push("x");
    }
}
console.log(output);