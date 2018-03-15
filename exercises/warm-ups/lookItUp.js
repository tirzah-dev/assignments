// var word = document.getElementById("word");
// var def = document.getElementById("definition");
// var submitButton = document.getElementById("submit");

// submitButton.addEventListener("click", lookItUp());
//
// create an empty object called Dictionary to store new words
// get new word from user
// compare new word to word in the dictionary already.
// if the word is already in the dictionary return a message to the user this word(or a variation) already exists
// searching: 
// if not create a new word property with definition as a value.
// if your feelin' fancy add a comparison to make sure no variation of a word can be saved if the word already exists.



function lookItUp(word, dictionary, def){
    if (dictionary.hasOwnProperty(word)){
    //or you could write it like so:
    //(dictionary[word] !== undefined){
        return dictionary[word];
        }else{
            dictionary[word] = def;
            return true;
        } 
}
var dictionaryEng =  {};
console.log(lookItUp("absquatulate", dictionaryEng, "verb: to leave abruptly"));
console.log(lookItUp("absquatulate", dictionaryEng));

// var Dictionary = function(language){
//     this.language = language;
//     this.content = {};
// }
// Dictionary.prototype.addword = function(word, def){
//     if(this.content.hasOwnProperty(word)){
//         throw "This word already exists"
//     } else {
//         this.content[word] = def;
//     }
// }