var Enemy = function(){
    this.type = genEnemyType();
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints * 3;
}


var genEnemyType = function(){
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[randIndex];
}

Enemy.prototype.genHitPoints = function (){
  switch (this.type) {
    case "Ancient Dragon":
        return Math.floor(Math.random() * (100-80)) + 80;
    case "Prowler":
        return Math.floor(Math.random() * (79-50)) + 79;
    case "Mighty Grunt":
        return Math.floor(Math.random() * (49-20)) + 49;
  } 
}
function printEnemies(){
    for (var i = 0; i < 100; i++){
        console.log(new Enemy());
    }
}
printEnemies();