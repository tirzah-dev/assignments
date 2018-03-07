// Return true if the given string contains between 1 and 3 'e' chars.

var stringE = function(str){ 
    var charCount = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] === "e"){
            charCount++;
        }
    }
    if (charCount > 0 && charCount < 4){
        return true;
    } else {
        return false;
    }
}
