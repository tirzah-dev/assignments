var pokemList = document.getElementById("pokemlist");
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status=== 200){
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data);
        var pokemonList = data.objects[0].pokemon;
        console.log(pokemonList);
        for(var i = 0; i < pokemonList.length; i++){
         var pokemObj = pokemonList[i];
         var li = document.createElement("li");
         li.innerHTML = pokemObj.name;
         pokemList.appendChild(li);
        }
    }
}
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();