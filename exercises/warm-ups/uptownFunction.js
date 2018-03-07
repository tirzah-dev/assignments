var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function getSong(arr){
    var song = arr.join(" ");
    return song;
}
console.log(getSong(lyrics));

function reverseSong(arr){
    arr.reverse();
    return getSong(arr);
}
console.log(reverseSong(lyrics));

function everyOtherWord(arr){
    var song = [];
    for (var i = 0; i < arr.length; i+=2){
        song.push(arr[i]);
    }
    return getSong(song);
} console.log(everyOtherWord(lyrics))