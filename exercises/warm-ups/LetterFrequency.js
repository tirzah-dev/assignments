//loop the string
// for each letter, add to it's count
function letterFrequency(str){
    var output = {};
    for(var i = 0; i < str.length; i++){
        if (output.hasOwnProperty(str[i])){
            output[str[i]]++;
        } else {
            output[str[i]] = 1;
        }
    }
    return output;
}
var phrase = 'slimy smelly solution';
console.log(letterFrequency(phrase));