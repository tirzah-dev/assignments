Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length-1; i>=0; i--){
        var randomIndex = Math.floor(Math.random()*(i+1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

const shuffleArr = (arr) => {
    return arr.shuffle();
}
console.log(shuffleArr([1,2,3,4,5,6,7,8,9]));