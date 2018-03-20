var testStr = "I'm learning all these amazing methods to use on strings.";
var moreTesting = "I'll keep it short.";
var duplicates = "This string, this string, is full of duplicates duplicates!!";

// upper and lower case methods
function changeCase(str){
    var newStr = '';
    for(var i = 0; i<str.length;i++){
        if(str[i] === str[i].toUpperCase()){
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}
console.log(changeCase(moreTesting));

var str1 = "hello";
var str2 = " world";
function putEmTogether(a, b){
    return a.concat(b);
}
console.log(putEmTogether(str1, str2));

// working but try to refactor.
function intoPieces(str){
    if(str.length < 20){
        var eIndex = str.indexOf("e");
        console.log("The index postion of the first 'e' in the string is " + eIndex + ".");
        if (eIndex > 5){
            // console.log(str.split(" "));
            return str.split(" ");
        } else{
            return str;
        }
    } else {
        var halfLength = str.length/2;
        // console.log(str.slice(halfLength));
        return str.slice(halfLength); 
    }
    return str;
}
console.log(testStr);
console.log(intoPieces(testStr));
console.log(moreTesting);
console.log(intoPieces(moreTesting));




function findDuplicates(str){
    var eMatches = str.match(/e/gi);
    return eMatches;
}
console.log(findDuplicates(testStr));

function findDuplicates(str){
    var newEs = str.replace(/e/gi, "ROCK-ON");
    return newEs;
}
console.log(findDuplicates(moreTesting));

function theLastOne(str){
    return str.substr(4, str.lastIndexOf("on"));
}
console.log(theLastOne(testStr));
// 
