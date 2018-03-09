var ask = require("readline-sync");
console.log("Hello My Friend!!");

var name = ask.question("Q: What's your name?\n\t");
console.log("\nHello " + name.toUpperCase() + "! Thanks for coming by.\n\n")

var favColor = ask.question("Q: What is your favorite color?\n\t");
console.log("\nOoohhhh " + favColor + " is a good one. Bonus Fact: " + favColor + " has " + favColor.length + " letters.\n\n")

var food1 = ask.question("Q: What is your favorite food?\n\t");
var food2 = ask.question("\nQ: What kind of " + food1 + " do you like?\n\t");
var favFood = [food2, food1]; favFood.join(" ");
console.log("\n" + name + " loves " + food2 + " " + food1 + "!\n\n");

var age = ask.question("Q: How old are you?\n\t");
console.log("\n");
var story = ask.question("Q: Tell me a mini story from your " + age + " years.\n\n\t");

var lastHalfStory = story.substr(Math.floor(story.length/2));
console.log("\nSorry I missed the first part, this is what I remember:\n\t'" + lastHalfStory + "'\n");

if (ask.keyInYN("Q: Can you repeat that, Y or N?\n\t")) {
    // 'Y' key was pressed.
    console.log("\n\n\t" + story + "\n\nThat was pretty cool, thanks for sharing.\n");
    // Do something...
  } else {
    // Another key was pressed.
    console.log("\n\nOh wait, I remember! You said: \n\t'" + story + "' \n\nThat was pretty cool, thanks for sharing.\n");
  }

var invite = ask.question("\nQ: How about a game?\n\t")

var randStartPoint = ask.question("\nQ: Pick a number between 0 and " + story.length + "!");

console.log("ok here's the last " + (story.length-randStartPoint) + " characters of your story.\n\t ")

console.log(story.substr(randStartPoint));
