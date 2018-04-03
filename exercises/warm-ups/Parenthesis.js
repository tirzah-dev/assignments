// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

// Also, every closing parentheses needs an opening partner before it.

//check for opening parenthesis.
//if you find closing parens frist, return false.
//when you find opening parens check for closing parens to match if you find a second opening parens before a closing parens store that and look for a second closing parens after finding 1st 
// if no closing parens return false.
//else return true;

const isBalanced = (str) => {
    count = 0;
    for (let i = 0; i < str.length; i++){
        if (str[i] === "(" || str[i] === "{" || str[i] === "["){
            count++;
        } else if (str[i] === ")" || str[i] === "}" || str[i] === "]"){
            count--;
        }
    }
    if (count < 0 ){
        return ("This is imbalanced too many closing parens");
    } else if (count > 0){
        return ("This is imbalanced, opening parens without closing partner");
    }else {
        return ("This is balanced");
    }
}
console.log(isBalanced("sdf{(h)}as[]dg(d)"));