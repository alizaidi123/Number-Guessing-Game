import inquirer from "inquirer";
let guessedCorrectly = false;
while (!guessedCorrectly) {
    const sysGennum = Math.floor(Math.random() * 10);
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "UserGuess",
            message: "Kindly Enter Your Guess. Choose Any Number Between 0 to 10  "
        }
    ]);
    const { UserGuess } = answer;
    console.log("Your Guess", UserGuess, "The Actual Number", sysGennum);
    if (UserGuess === sysGennum) {
        guessedCorrectly = true;
        console.log("Congratulation! Your Guessed It Right");
    }
    else {
        console.log("Oh No! You Guess Was Wrong. Better Luck Next Time!");
    }
}
