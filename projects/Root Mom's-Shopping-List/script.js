
let shoppingList = document.getElementById("shoppingList");
let form = document.getElementById("addToShoppingList");

function domStuff(toBuyItem){
    let listItem = document.createElement("div");
    let title = document.createElement("p");
    title.innerHTML = toBuyItem.title;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function(event){
        shoppingList.removeChild(listItem);
    });
    
    listItem.appendChild(title);
    listItem.appendChild(deleteButton);
    shoppingList.appendChild(listItem);
}  

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var inputData = { 
        title: form.title.value,
    };
        domStuff(inputData);
        form.title.value = "";

});

