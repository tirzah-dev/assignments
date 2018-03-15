//1a
function sum(x,y){

    if(typeof x !== "number" || typeof y !== "number"){
        throw "Input must be a number.";
    }
    return x + y;
}
//1b
try{
    sum("1","2");
} catch(err){
    console.log(err);
}
try{
    console.log(sum(3, 4));
} catch(err){
    console.log(err);
}
//2a
var user = {username: "sam", password: "123abc"};  
function login(username, password){
    if(username !== "sam" || password !== "123abc"){
        throw "Username and/or Password do not match"
    } else{
        console.log("Login succesful.");
    }
}
//2b
try{
    login("sam","132abc");
} catch(err){
    console.log(err);
}

try{
    login("sam","123abc");
} catch(err){
    console.log(err);
}


