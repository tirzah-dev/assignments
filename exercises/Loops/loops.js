// Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without using Math.min()

var numbers = [17, 24, 36, 14, 55, 6, 71, 8, 99, 10];


function small(arr) {
    var num = arr[0];
   for (var i = 0; i < arr.length; i++) {
       if (arr[i] < num) {
           num = arr[i];
       }
   }
   return num;
}
console.log(small(numbers));