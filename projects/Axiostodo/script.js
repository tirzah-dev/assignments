document.onload = getTodos();

let todoList = document.getElementById("toDos");
let form = document.getElementById("createTodoList");

function domStuff(todoItem){
    var id = todoItem._id;
    let listItem = document.createElement("div");
    let title = document.createElement("p");
    let description = document.createElement("p");
    let price = document.createElement("p");
    // let image = document.createElement("input");
    // image.type = 
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todoItem.completed;
        if(checkBox.checked){
            title.style.textDecoration = "line-through";
            description.style.textDecoration = "line-through";
        }
    checkBox.addEventListener("change", function(event){
        var id = todoItem._id;
        var ckIt = event.target.checked;
        axios.put("https://api.vschool.io/tirzah/todo/" + id, {completed: ckIt }).then(function (response){
            if(ckIt){
                title.style.textDecoration = "line-through";
                description.style.textDecoration = "line-through";
                price.style.textDecoration = "line-through";
            } else{
                title.style.textDecoration = "none";
                description.style.textDecoration = "none";
                price.style.textDecoration = "none";
            }
        }) 
    });

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function(event){
        todoList.removeChild(listItem);
        axios.delete("https://api.vschool.io/tirzah/todo/" + id, {id: event.target.value}).then(function (response){
        })
    });
        
    
    title.innerHTML = todoItem.title;
    description.innerHTML = "Description: " + todoItem.description;
    price.innerHTML = "Price: $" + todoItem.price;
    
    listItem.appendChild(title);
    listItem.appendChild(description);
    listItem.appendChild(price);
    listItem.appendChild(checkBox);
    listItem.appendChild(deleteButton);
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

    domStuff(inputData);
    
    axios.post("https://api.vschool.io/tirzah/todo", inputData)
    .then(function (response) {
    })
    .catch(error => {
        console.error(error);
    })
    form.description.value = "";
    form.price.value = "";
    form.title.value = "";
});

