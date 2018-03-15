var todoList = document.getElementById("todo-list");
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status=== 200){
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data.objects[0]);
        for(var i = 0; i< data.length; i++){
         var todoObj = data.objects[i];
         var li = document.createElement("li");
         li.innerHTML = todoObj.title;
         todoList.appendChild(li);
        }
    }
}
xhr.open("GET", "https://api.vschool.io/tirzah/todo", true);
xhr.send();