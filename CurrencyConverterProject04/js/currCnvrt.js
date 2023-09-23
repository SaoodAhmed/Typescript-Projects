import inquirer from "inquirer";
// let person:{
//     "name":{
//         first:string,
//         last:string
//     },
//     age:number
// } = {
//     "name":{
//         first:"Saud",
//         last:"Ahmed"
//     },
//     age:23
// }
// console.log(person.name.first)
let conversion = {
    "PKR": {
        "USD": 0.004,
        "GBP": 0.003,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 250.45,
        "GBP": 0.83,
        "USD": 1
    }
};
//console.log(conversion.PKR.USD);
//console.log(conversion.PKR["USD"])
// console.log(cconversion["PKR"]["USD"])
// console.log(conversion["PKR"].USD);
let answers = await inquirer.prompt([
    {
        type: 'list',
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your currency ->"
    },
    {
        type: 'list',
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your convertion currency ->"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount "
    }
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`Your converstion from ${from} to ${to} is ` + result);
}
else {
    console.log("Invalid Input");
}
