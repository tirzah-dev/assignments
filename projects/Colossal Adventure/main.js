var rs = require("readline-sync");
var playerName = rs.question("Welcome, what's your name? ");
console.log("Hello " + playerName + "!! This is fun!! If you want to see your status at any time press 's'");

function Game(newPlayerName){
    this.player = {
        name: newPlayerName,
        hp: 100,
        attack: undefined,
        enemiesKilled: 0,
        invetory:[""]
    },
    this.enemy = {
        
    },
    this.gameOver = false;
}

// var enemies = function(){
//     this.attack = Math.floor(Math.random()*20)+10;
//     this.hp = 50;
//     //etc.
// }
var Enemy = function(){
    this.type = genEnemyType();
    this.power = this.genPower();
    this.defense = this.power * 3;
}


var genEnemyType = function(){
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}

Enemy.prototype.genPower = function (){
  switch (this.type) {
    case "Ancient Dragon":
        return Math.floor(Math.random() * (100-80)) + 80;
    case "Prowler":
        return Math.floor(Math.random() * (79-50)) + 79;
    case "Mighty Grunt":
        return Math.floor(Math.random() * (49-20)) + 49;
  } 
}

function chooseAction(input){
    switch (input){
        case "r":
            run();
            break;
        case "a":
            attack();
            break;
        case "d":
            this.gameOver = true;//correct syntax??
        default:
            console.log("Make a valid choice, 'r' or 'a' or 'd'");
    }
}
function postAttackChoice(input){
    switch (input){
        case "w":
            var playerCommand = rs.question("Type 'w' to walk, then press enter: ");
        case "s":
            playerStats();        
    }
}
    // console.log(chooseAction("w"));

// function walk(input){
//     if(input = "w"){
//     console.log("You chose to walk.");
//     }
// }
function attack(){
    let damage = Math.floor(Math.random()* 10);
    let newEnemyPower = enemy.power - damage;
    console.log("You attacked " + this.enemy + "now has power level: " + newEnemyPower + "\n\n");
    chooseAction(); 
}
function run(input){
    console.log("You chose to run.\n\n");
    if(Math.floor(Math.random()* 10) > 5){
        //set death message to player and set gameOver to true;

    }else{
        var damage = attack();
        var postAttack = rs.question = ("You ran, but " + enemy.type + " still attacked!! You survived but, you lost " + damage + " Hit Points.\n Do you want to walk ('w'), or check your stats ('s')");
        console.log(postAttackChoice(postAttack))
    }

   
    //enemy attacks and inflicts random damage amount reducing player hp by the random amount
        // if they get away they will be told to walk again
        // else if they don't get away notify them they got caught and run fight function.
}


let currentGame = new Game(playerName);
// while loop continues until - if win console.log("yay you won!") 
// or
// if loose console.log("so sad, play again!")
while (!currentGame.gameOver){
    var playerCommand = rs.question("Type 'w' to walk, then press enter: ");
    if (playerCommand === "w"){
        if(Math.floor(Math.random()* 100) > 75){
            let newEnemy = new Enemy;
            console.log("\n\n New enemy appeared his name is: " + newEnemy.type + ", \n  " + newEnemy.type +"'s power level is: " + newEnemy.power + ",\n and " + newEnemy.type +"'s defense level is: " + newEnemy.defense +"\n");
            var playerChoice = rs.question("Do you want to want to run, attack or die \n (press 'r' to run or 'a' to attack or 'd' to die)? ");
            chooseAction(playerChoice);
            
            // 
                // fight function 
                    // when attacked player needs to lose point
                    // when the enemy is attacked he needs to lose points
                    // if they win cool message add 1 to enemy death toll and ask player to walk again
                    // if they lose cool death message and end game.

        }
    }

    // if (player.hp < 1){
    //     console.log("so sad, play again!");
    //     //set currentGame to Game over
    // } else (enemiesKilled >= 3){
    //     console.log("yay you won! Play again");
    // }
}
