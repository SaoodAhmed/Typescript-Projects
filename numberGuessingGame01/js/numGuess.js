import inquirer from "inquirer";
let x = 0;
while (x < 10) {
    let comGenNum = Math.floor(Math.random() * 10);
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "What is your guess? "
        },
    ]);
    if (answer.userGuess === comGenNum) {
        console.log(`Your guess is ${answer.userGuess} & computer guess is ${comGenNum} --> You Winn!!`);
        break;
    }
    else {
        x++;
        console.log(`Your guess is ${answer.userGuess} & computer guess is ${comGenNum} --> You Loss!!`);
    }
}
