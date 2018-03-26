var rs = require("readline-sync");
var playerName = rs.question("Welcome, what's your name? ");
console.log("Hello " + playerName + "!! This is fun!! If you want to see your status at any time press 's'");

function Game(newPlayerName){
    this.player = {
        name: newPlayerName,
        hp: 100,
        attack: undefined,
        enemiesKilled: 0,
        inventory:[""]
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
            playerAttack();
            break;
        case "s":
            checkStats();
        case "d":
        console.log("You chose death over honor, GAME OVER!!")
            currentGame.gameOver = true;//correct syntax??
        default:
            let choice = rs.question("Make a valid choice, 'r' or 'a' or 's' or 'd'");
            chooseAction(choice);
    }
}
// function postAttackChoice(input){
//     switch (input){
//         case "w":
//             var playerCommand = rs.question("Type 'w' to walk, then press enter: ");
//         case "s":
//             playerStats();        
//     }
// }
    // console.log(chooseAction("w"));

// function walk(input){
//     if(input = "w"){
//     console.log("You chose to walk.");
//     }
// }
function playerAttack(){
    let damage = Math.floor(Math.random()* 10);
    let newEnemyPower = currentGame.enemy.power - damage;
    currentGame.enemy.power = newEnemyPower;
    console.log("You attacked, " + currentGame.enemy.type + " now has power level: " + newEnemyPower + "\n\n");
        if(newEnemyPower > 0 ){
            enemyAttack();
        } else{
            currentGame.player.enemiesKilled++
            if (currentGame.player.enemiesKilled >= 3){
                console.log("yay you won!");
            }else{
                let postKill = rs.question(currentGame.enemy.type + "has died you now have killed " + currentGame.player.enemiesKilled + "enemies only " + (currentGame.player.enemiesKilled - 3) + " left. Do you want to start walking ('w') or check your stats('s')?");
            }
        }
}
function enemyAttack(){
    let damage = Math.floor(Math.random()* 10);
    let newPlayerPower = currentGame.player.hp - damage;
    currentGame.player.hp = newPlayerPower;
    console.log(currentGame.enemy.type + " attacked!! You survived but, you lost " + damage + " Hit Points.\nYou now have a power level: " + newPlayerPower + "\n\n");
    var postAttack = rs.question(" Do you want to keep fighting ('a'), run ('r'), die ('d'), or check your stats ('s')?\n");
    chooseAction(postAttack);
}
function run(input){
    // console.log("You chose to run.\n\n");
    if(Math.floor(Math.random()* 10) > 5){
        console.log("you chose run enemy attacked and you died! GAME OVER!!");
        currentGame.gameOver = true; ////////WHY ISNT THIS KICKING ME OUT why does it run the else portion?????????? WHAT's Missing? how do I reset the game or log ou to of the console?///////
    }else{
        var damage = enemyAttack();
        ;
        // console.log(postAttackChoice(postAttack));
        let runChoice = rs.question("You chose to run and the enemy attacked now you only have " + currentGame.player.hp + " points. Do you choose to run again ('r'), die ('d') or attack ('a')?");
        chooseAction(runChoice);
    } 
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
            currentGame.enemy = newEnemy;
            console.log("\n\n New enemy appeared his name is: " + newEnemy.type + ", \n  " + newEnemy.type +"'s power level is: " + newEnemy.power + ",\n and " + newEnemy.type +"'s defense level is: " + newEnemy.defense +"\n Your power level is: " + currentGame.player.hp + ",\n and you have killed " + currentGame.player.enemiesKilled +" enemies.\n");
            var playerChoice = rs.question("Do you want to want to run, attack or die \n (press 'r' to run or 'a' to attack or 'd' to die)? \n");
            chooseAction(playerChoice);
            
            // 
                // fight function 
                    // when attacked player needs to lose point
                    // when the enemy is attacked he needs to lose points
                    // if they win cool message add 1 to enemy death toll and ask player to walk again
                    // if they lose cool death message and end game.

        }
    }
}
