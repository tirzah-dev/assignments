//create container to hold nested arrays
//fill each subarray with 10 numbers
// return output array

const genMultTable = () => {
    const output = []; 
    for (let i = 1; i < 11; i++){
        const row = [];
        for (let j = 1; j < 11; j++){
            row.push(j*i);
        }
        output.push(row);
    }
    return output;
}
console.log(genMultTable());  