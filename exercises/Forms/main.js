// var form = document.getElementById("submit");
// var p = document.getElementById("output");
// // var input = document.getElementById("input");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log(event.target.input1.value);
// });
var nameInput = document.getElementById("firstName");
var form = document.getElementById("submit");
var peanutBox = document.getElementById("peanuts");
var pollenBox = document.getElementById("pollen-dust");
var wheatBox = document.getElementById("wheat");
var noAllergy = document.getElementById("none");

// this is an object to store user input data
// we define it in terms of what is meaningfull to use as humans
var data = {
    firstName:"",
    allergies: []
}
// console.log(nameInput)
// these event listeners just track the user activity and add the data to the appropriate part of an object
nameInput.addEventListener("input", function(event){
    data.firstName = event.target.value;
    // console.log(data);
});

function setAllergy(event){
    if (event.target.checked){
        data.allergies.push(event.target.name);
    } else {
        var index = data.allergies.indexOf(event.target.name)
        data.allergies.splice(index, 1);
    }
    console.log(data.allergies);
}
peanutBox.addEventListener("input", setAllergy)
pollenBox.addEventListener("input", setAllergy)
wheatBox.addEventListener("input", setAllergy)
noAllergy.addEventListener("input", setAllergy)


form.addEventListener("submit", function(){
    alert("First Name: " + data.firstName + "\n");

});