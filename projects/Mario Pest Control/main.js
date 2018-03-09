
var totalGoombas = document.getElementById("goombas-caught");
totalGoombas.addEventListener("input", baddySubtotal);
// //create a function that calculates subtotal for each baddy based on total caught and price per baddy.
//identify Baddy
//identify how many of that baddy were caught
//identify price per baddy
//calculate baddy's subtotal

function baddySubtotal(event){
    var target = totalGoombas;
    var subtotal = event.target.value * price;
    if(event.target === totalGoombas){
        var price = 5;
        totalGoombas.innerHTML = subtotal;
    }
    // }else if (event.target === /*Bob-ombs*/){
    //     var price = 7;
    // }else if (event.target === /*Cheep-cheeps*/){
    //     var price = 11;
    // }
    
    return subtotal;
}
console.log(baddySubtotal());

//create a function that sums price of baddies caught.
