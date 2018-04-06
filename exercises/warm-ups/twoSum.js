// Two Sum Warm-up
// Given an array of integers and a target integer, return the indices of the FIRST two numbers which add up to the target.

// Assume the same element may not be used twice.

// twoSum([1,2,3], 4);  
//returns [0, 2] because 1 + 3 equals 4

const twoSum = (arr, target) => {
    //loop through array and 
    //add together by 2's until they sum target
    //return their indexes
   
    for(i=0; i < arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++)
            if(arr[i] + arr[j] === target){
            return [i, j];
            }
        }
    return "Sorry, no combination of the numbers provided add up to " + target;
} 

console.log(twoSum([1,7,4], 9));