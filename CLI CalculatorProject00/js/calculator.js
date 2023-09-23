import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "number",
        name: "firstNum",
        message: "Enter the first number: "
    },
    {
        type: "number",
        name: "secondNum",
        message: "Enter the second number: "
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Select the Operation, what you want to perform "
    }
]);
if (answer.firstNum && answer.secondNum && answer.operator) {
    let result = 0;
    if (answer.operator === "+") {
        result = answer.firstNum + answer.secondNum;
        console.log("Additon is: " + result);
    }
    if (answer.operator === "-") {
        result = answer.firstNum - answer.secondNum;
        console.log(`Subtraction is: ${result}`);
    }
    if (answer.operator === "*") {
        result = answer.firstNum * answer.secondNum;
        console.log(`Multiplication is: ${result}`);
    }
    if (answer.operator === "/") {
        result = answer.firstNum / answer.secondNum;
        console.log(`Division is: ${result}`);
    }
}
