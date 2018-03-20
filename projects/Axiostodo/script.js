document.onload = getTodos();

let todoList = document.getElementById("toDos");
let form = document.getElementById("createTodoList");

var inputData = {};
//create newItem object
    // 
// 

function domStuff(todoItem){
    let listItem = document.createElement("div");
    let title = document.createElement("p");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    
    title.innerHTML = todoItem.title;
    description.innerHTML = todoItem.description;
    price.innerHTML = todoItem.price;
    listItem.appendChild(title);
    listItem.appendChild(description);
    listItem.appendChild(price);
    listItem.appendChild(checkBox);
    todoList.appendChild(listItem);
}
function getTodos(){
    axios.get("https://api.vschool.io/tirzah/todo").then(function (response){
        var data = response.data;
            for (var i = 0; i < data.length; i++) {
                domStuff(data[i]);
            }
        });
}   


form.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputData = { 
                title: form.title.value,
                description: form.description.value,
                price: form.price.value,
                completed: false
            };
    
    axios.post("https://api.vschool.io/tirzah/todo", inputData)
    .then(function (response) {
        getTodos();

    })
    .catch(error => {
        console.error(error);
    })
    form.description.value = "";
    form.price.value = "";
    form.title.value = "";
});

// function setItemTitle(event){
//     newItem.title = event.target.value;   
// }
// function setItemDescription(event){
//     newItem.description = event.target.value;
// }
// function setItemPrice(event){
//     newItem.price = event.target.value;
// }


// newTitle.addEventListener("input", setItemTitle);
// newTitle.addEventListener("input", setItemDescription);
// newTitle.addEventListener("input", setItemPrice);



// axios.delete("https://api.vschool.io/tirzah/todo/id").then(function (response) {
    
//     for (var i = 0; i < response.data.length; i++) {
        
//     }
// });

