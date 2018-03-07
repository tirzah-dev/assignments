function fizzBuzzFill(){
    var fizzBuzzArr = [];
    // var fizz = (num % 3 === 0);
    // var buzz = (num % 5 === 0);
    for (var i = 1; i < 101; i++){
        if ( i % 3 === 0 && i % 5 === 0){
            fizzBuzzArr.push("fizzbuzz");
        } else if (i % 3 === 0){
            fizzBuzzArr.push("fizz");
        } else if (i % 5 === 0){
            fizzBuzzArr.push("buzz");
        }else {
            fizzBuzzArr.push(i);
        }
    }
    return fizzBuzzArr;
}
console.log(fizzbuzzFill());

