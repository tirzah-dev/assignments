funstion isPalindrome(str){
    function isPalindrome(str){
        // make lower case
        str.tolowerCase();
        // remove spaces
        str.split(" ").join("");
        //remove punctuation
        // with regex --> str.replace(/\W+/g, "");
        var alphabet="abcdefghijklmnopqrstuvwxyz";
        var normalized = "";
        for (var i =0; i<str.length; i++){
            if (alphabet.includes(str[i])
            // if (alphabet.indexOf(str[i])
            ){
                normalized += str[i];
            }
        }
        var reverseStr = str.split("").reverse().join;
    
        if (normalized = reverseStr){
            return "'" + str + "' is a Palindrome";
        }  
    }
}
module.exports = isPalindrome;