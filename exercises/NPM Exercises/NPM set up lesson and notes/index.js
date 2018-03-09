//at the beginning of the js file you must set required pkg to a variable to reference throughout the code.
var readlineSync = require("readline-sync");

//prompts
    //get one num
    var num1 = readlineSync.question("Pick an integer");
    //get another num
    var num2 = readlineSync.question("Pick another integer");
    //choose operation
    var operations = ["+", "-", "/", "*"];
    var index = readlineSync.keyInSelect(operations, "Choose the operations you wish to perform.");

//chooser function - chooses which function to call based on 
    //selects which arithmetic function to perform and call it using numbers as parameters(arguments)
    
    


//arithmetic functions

function add(x, y){
    return x + y;
}
   
