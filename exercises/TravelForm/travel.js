var form = document.getElementById("travel-form");
// var firstName = form.firstName;
// var age =  form.age;
// var gender = form.gender;
// var destination = form.destination;
var diet = form.diet;


function retrieveDiet(diet) {
    var special = document.getElementsByName("diet");
    var specialDiet = "";
    for (var i = 0; i < special.length; i++) {
        if (special[i].checked) {
            specialDiet += special[i].value;
        }
    }
    return specialDiet;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
        "First Name: " + form.firstName.value +
        "\nLast Name: " + form.lastName.value +
        "\nAge: " + form.age.value +
        "\nGender: " + form.gender.value +
        "\nDestination: " + form.destination.value +
        "\nSpecial Diet: " + retrieveDiet()
    )
});




//notes
// var newTodo = {
// title: todoform.title.value,
// price: todoForm.price.value,
// description: todo.description.value
// }
//axios.post("url", newTodo).then(function(response){
//document.getElementById(todos).innerHTML += "<li>" + response.data.title + "</li>"
//});
// axios.put("url/id", {title: "Buy Whole Milk"});