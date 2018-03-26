const str = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.";

const matchingWords = str => {
    const count = {};
    const output = [];
    const rmSpecial = str.replace(/[^a-z\s]/gi, "").toLowerCase();
    const strArray = rmSpecial.split(" ");
    for (let i = 0; i < strArray.length; i++ ){
        if(count.hasOwnProperty(strArray[i])){
            if(!output.includes(strArray[i])){
                output.push(strArray[i]);
            }
        }else{
            count[strArray[i]] = 1;
        }
    }
    return output;
}
console.log(matchingWords(str));