import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    let answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What you want to add in your TOdo? "
        },
        {
            type: 'confirm',
            name: "addMore",
            message: "Do you want to add more todo? ",
            default: false
        }
    ]);
    const { TODO, addMore } = answers;
    console.log(answers);
    loop = addMore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input...!!");
    }
}
if (todos.length > 0) {
    console.log("your TOdo List is: ");
    todos.forEach(todo => console.log(todo));
}
else {
    console.log("No todos Found..!");
}
