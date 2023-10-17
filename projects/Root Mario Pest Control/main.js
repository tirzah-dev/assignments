//Goombas
    var totalGoombas = document.getElementById("goombasCaught");
    var goombaSub = document.getElementById("goombaSub");
    totalGoombas.addEventListener("input", goombaSubtotal);
//bob-ombs
    var totalBomOmbs = document.getElementById("bob-omb-caught");
    var bobOmbSub = document.getElementById("bob-omb-sub");
    totalBomOmbs.addEventListener("input", bobOmbsSubtotal);
// cheep-cheeps
    var totalCheeps = document.getElementById("cheepCheepsCaught");
    var cheepSub = document.getElementById("cheepCheepSub");
    totalCheeps.addEventListener("input", cheepCheepSubtotal);

//Grand Total
    var grandTotal = document.getElementById("baddiesGrandTotal");    
// 
    //create a function that calculates subtotal for each baddy based on total caught and price per baddy.
function goombaSubtotal(event){
    var price = 5;
    var subtotal = event.target.value * price;
    goombaSub.value = subtotal + " coins";
    baddiesGrandTotal();
}

function bobOmbsSubtotal(event){
    var price = 7;
    var subtotal = event.target.value * price;
    bobOmbSub.value = subtotal + " coins";
    baddiesGrandTotal();
}

function cheepCheepSubtotal(event){
    var price = 11;
    var subtotal = event.target.value * price;
    cheepSub.value = subtotal + " coins";
    baddiesGrandTotal();
}

//create a function that sums price of baddies caught.
function baddiesGrandTotal(){
    var total = parseInt(goombaSub.value) + parseInt(bobOmbSub.value) + parseInt(cheepSub.value);
    grandTotal.innerHTML = "GRAND TOTAL: " + total + " coins";

}

