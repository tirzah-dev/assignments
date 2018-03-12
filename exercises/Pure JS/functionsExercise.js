// Write a function that accepts two numbers as parameters, and returns the sum.
function add(a, b){
    var sum = a+b;
    return sum
}

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function largestNum(a, b, c){
    if((a > b) && (a > c)){
        return a;
    } else if ((b > a) && (b > c)){
        return b;
    } else {
        return c;
    }
}

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function oddEven(num){
    if (num % 2 === 0){
        return "even";
    } else {
        return "odd";
    }
}

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.
function stringLength(str){
    if(str.length <= 20) {
        return str + str;
    } else {
        var half = str.length/2;
        return str.slice(0, half);
    }
}
console.log(stringLength("aaabbbcccdddeeefffgggh"));

// OPTIONAL EXERCISES
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// 

// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)

// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
