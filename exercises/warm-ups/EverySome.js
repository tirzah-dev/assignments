// Write two functions that mimic the .every and .some array methods.

// every(arr, callback): Given an array and a callback function, return true or false based on whether each element of the array, when inserted as a parameter to the callback, returns true.

// Example:  
// every([1,2,"3"], (num)=>{  
//   return typeof num === "number";
// });
// // returns false
// some(arr, callback): Given an array and a callback function, return true or false based on whether at least ONE element of the array, when inserted as a parameter to the callback, returns true.

// Example:  
// some(["ben", "jacob", "bob"], (name)=>{  
//   return name === "jacob";
// });
// returns true

//EVERY
// check every item in the array against the callback
//bail as soon as one is false

//else return true

const every = (arr, cb) => {
    for(let i = 0; i<arr.length; i++){
        if(!cb(arr[i])) return false;
    }
    return true;
}
console.log(every([1,3, 5, 7], num => num % 2));

// SOME
// check each item again]bail as soon as one is true
// return false

const some = (arr, cb) => {
    for(let i = 0; i<arr.length; i++){
        if(cb(arr[i])) return true;
    }
    return false;
}
console.log(every([1,3, 4, 8], num => num % 2));