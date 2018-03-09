
var totalGoombas = document.getElementById("goombas-caught");
totalGoombas.addEventListener("input", sumGoombas);
// //create a function that calculates subtotal for each baddy based on total caught and price per baddy.
function sumBaddy(event){
    var price = 5;
    var subtotalG = event.target.value * price;
}
// console.log(sumGoombas());

//create a function that sums price of baddies caught.
