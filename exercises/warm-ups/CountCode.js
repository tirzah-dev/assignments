// function countCode(string) {
//     var count = 0;
//     for(var i = 0; i < str.length; i++){
//         if (str[i]=== "c"){
//             if (str[i+1]=== "o"){
//                 if(str[i+3] === "e")
//                 count++;
//             }
//         }
//     return count;
// }
// console.log(countCode("codexxcode"));
function countTheCode(str){
    var count = 0;
    var regEx = /co\we/g;

    while(regEx.exec(str)){
        
        count++;
    }
    return count;
}
console.log(countTheCode("codecodeycodeercodecore"));


// console.log(regEx.test("ouytcoyegjhglcore"));
// console.log(regEx.exec("ouytcoyegjhglcore"));
// console.log(regEx.exec("ouytcoyeedocgjhglcore"));
// console.log(regEx.exec("ouytcoyegjhglcore"));