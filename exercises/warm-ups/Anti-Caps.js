function antiCaps(str){
    var noCapsStr = "";
    for (var i = 0; i < str.length; i++){
        if (isCaps(str[i])){
            // console.log(isCaps(str[i]));
           noCapsStr += str[i].toLowerCase();
        }
        else {
           noCapsStr += str[i].toUpperCase();
        }
    }
    return noCapsStr;
}

function isCaps(letter) {  
    return letter === letter.toUpperCase();
}
console.log(antiCaps("Hello"));