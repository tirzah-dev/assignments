const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]] 
const multiD2 = [[true,false,true],[false,false,true]]

const checkTypes = arr => { 
    console.time();
    const test = arr[0][0];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(typeof test !== typeof arr[i][j]){
                return false;
            }
        }
    }
 console.timeEnd();
    return true;
}

const checkDataTypes = arr => {
    console.time();
    const output = arr.every(subArr => 
        subArr.every(item => //item = arr[i], in a for loop
            typeof item === typeof arr[0][0]))
            console.timeEnd();
            return output;
        };
 
        console.log(checkTypes(multiD1)) 
        console.log(checkDataTypes(multiD1)) 
// returns false (inner arrays aren't consistent with each other's data types)


console.log(checkTypes(multiD2))  
console.log(checkDataTypes(multiD2))  
// returns true (each inner array contains the same data type as the others)