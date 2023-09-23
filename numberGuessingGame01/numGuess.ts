import inquirer from "inquirer";

let x:number = 0;

while(x<10){
let comGenNum = Math.floor(Math.random()*10)

type ansType = {
    userGuess:number
}

const answer:ansType = await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"What is your guess? "
    },
])

    if(answer.userGuess === comGenNum){
        console.log(`Your guess is ${answer.userGuess} & computer guess is ${comGenNum} --> You Winn!!`)
        break;
    }
    else {
        x++;
        console.log(`Your guess is ${answer.userGuess} & computer guess is ${comGenNum} --> You Loss!!`);
    }

}