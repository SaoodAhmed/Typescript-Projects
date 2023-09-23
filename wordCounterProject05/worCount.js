import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "string",
        message: "Enter a senetence to count the words "
    }
]);
let words = answers.Sentence.trim().split(" "); //trim is used to remove inital or last spaces
console.log(`Your sentence word count is ${words.length}`);
