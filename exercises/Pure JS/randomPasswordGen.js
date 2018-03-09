var genRandomPassword = function(num) {
    var random = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789:;.,!#&<>?/";
    for (var i = 0; i < num; i++){
        random += possible.charAt((Math.floor(Math.random() * possible.length)));
    }
    return random;
}
console.log(genRandomPassword(10));