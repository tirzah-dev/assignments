var rs = require("readline-sync");
var playerName = rs.question("Welcome, what's your name?   ");
console.log("\n   Hello " + playerName + "!! This is fun!!\n   Let's go for an adventure!\n");

function Game(newPlayerName){
    this.player = {
        name: newPlayerName,
        hp: 200,
        enemiesKilled: 0,
        inventory:["Prance-Fighting Skillz"]
    },
    this.enemy = {
        
    },
    this.gameOver = false;
}
var Enemy = function(){
    this.type = genEnemyType();
    this.power = this.genPower();
    // this.defense = this.power * 3;
    this.weapon = this.genWeapon();
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
Enemy.prototype.genWeapon = function (){
    switch (this.type) {
      case "Ancient Dragon":
          return " Fire Breath";
      case "Prowler":
          return " Stealth Cape";
      case "Mighty Grunt":
          return " Sonic Boomer";
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
            break
        case "d":
        console.log("You chose death over honor, GAME OVER!!\n")
            currentGame.gameOver = true;
            break;
        default:
            let choice = rs.question("  Please make a valid choice, 'r' or 'a' or 's' or 'd'.  ");
            chooseAction(choice);
    }
}
function checkStats(){
    console.log( currentGame.player);
}

function playerAttack(){
    let damage = Math.floor(Math.random()* 20);
    let newEnemyPower = currentGame.enemy.power - damage;
    currentGame.enemy.power = newEnemyPower;
    console.log("~~~~\n   You attacked!! " + currentGame.enemy.type + " lost " + damage + " power points\n and now has a total of: " + newEnemyPower + " power points.\n");
    if(newEnemyPower > 0 ){
        console.log("OOOH NOOOO!! Watch out!")
        enemyAttack();
    } else{
        currentGame.player.enemiesKilled++
        if (currentGame.player.enemiesKilled >= 3){
            console.log("~~~ \n YAY you won! Game Over, play again soon!!");
            currentGame.gameOver = true;
        }else{
            let pointsEarned = Math.floor(Math.random()* 10);
            currentGame.player.inventory.push(currentGame.enemy.weapon);
            console.log("\n  You KILLED " + currentGame.enemy.type + "!!\n  Enemy kill total: " + currentGame.player.enemiesKilled + "\n   You need to lay waste to " + (3 - currentGame.player.enemiesKilled) + " more to win the game.\n\n   Power points earned: " + pointsEarned + ", updated total " + (currentGame.player.hp += pointsEarned) + " power points.\n   You also get to keep " + currentGame.enemy.type + "'s" + currentGame.enemy.weapon + ". \n ");
            // if(postKill === "w" || postKill === "s"){
                // chooseAction(postKill);
            // }else{
                // console.log("Please choose to: walk ('w'), check status ('s') or die ('d')")
            }
    }
}

function enemyAttack(){
    let damage = Math.floor(Math.random()* 20);
    let newPlayerPower = currentGame.player.hp - damage;
    if (newPlayerPower <= 5){
        console.log("\n  " + currentGame.enemy.type + " attacked with fatal force you never had a chance. Sorry to say it but, YOU DEAD! GAME OVER!!\n");
        currentGame.gameOver = true;
    }else{
        currentGame.player.hp = newPlayerPower;
        console.log("\n   " + currentGame.enemy.type + " attacked!!\n You survived but, you lost " + damage + " power points.\n   Your new power points total is: " + newPlayerPower + "\n");
        var postAttack = rs.question("\n Do you want to attack back ('a'), run ('r') or die ('d')? ");
        chooseAction(postAttack);
    }
    
}
function run(input){
    let randNum = Math.floor(Math.random()* 10);
    console.log(randNum)
    if(randNum >= 8){
        console.log("~~~\n You ran like a yellow belly, lilly livered scoundrel but " + currentGame.enemy.type + " attacked anyway and you died! GAME OVER!!\n");
        currentGame.gameOver = true;
    }else if(randNum < 8 && randNum > 5){
         let points = Math.floor(Math.random()* 20);
         let newPlayerPower = currentGame.player.hp + points;    
    console.log("~~~\n  Wow you made a narrow escape and earned " + points + " power points. \n now your power level is: " + newPlayerPower + ".");
    } else {
        console.log("~~~\n\n  You chose to run ... Watch out oh NOOOOOO!! ");
        enemyAttack();
        // let runChoice = rs.question("You chose to run and the enemy attacked now you only have " + currentGame.player.hp + " points. Do you choose to run again ('r'), die ('d') or attack ('a')?  ");
        // chooseAction(runChoice);
    } 
}


let currentGame = new Game(playerName);
while (!currentGame.gameOver){
    var playerCommand = rs.question("Type 'w' to walk or 's' for stats: ");
    if (playerCommand === "w"){
        if(Math.floor(Math.random()* 100) > 75){
            let newEnemy = new Enemy;
            currentGame.enemy = newEnemy;
            console.log("\n\n An enemy has appeared!!\n      Name: " + newEnemy.type + ", \n      Power Points: " + newEnemy.power + ",\n      Defense level: " + newEnemy.defense + ",\n      Weapon: " + newEnemy.weapon + "\n\n   Your current status:\n     Power Points: " + currentGame.player.hp + ",\n     Enemies Killed: " + currentGame.player.enemiesKilled + ", \n     Weapon(s): " + currentGame.player.inventory + "\n");
            var playerChoice = rs.question("\n   Do you want to run ('r'), attack('a') or die ('d')?  ");
            chooseAction(playerChoice);//issue when you choose check stats...
        }
    }else if (playerCommand === "s"){
            chooseAction("s");
    } else{ 
            console.log("Please choose to: walk ('w'), check status ('s') or die ('d')")
    }
}

