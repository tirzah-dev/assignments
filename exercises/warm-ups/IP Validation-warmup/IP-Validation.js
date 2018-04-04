// IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots, e.g., 172.16.254.1


const isValidIP = str => {
    let arr = str.split(".");
    if (arr.length !== 4) return false;
    return arr.every(str => {
        let num = parseInt(str, i);
        if(str !== num.toString())
        return false;
        if (i === 0){
            return (Number(str)> 0 && Number(str) < 256)
        } else{
            if (i === 3){
                return(Number(str) > 1 && Number(str)<255)
            }
        }
    })
}
console.log(isValidIP("023.54.245.3"));
console.log(isValid("0.123.254.123"));
console.log(isValidIP("255.245.245.0"));
console.log(isValidIP("234.234.234.234"));
// console.log()