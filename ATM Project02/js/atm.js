import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Enter your user_ID name -> "
    },
    {
        type: "number",
        name: "userPassword",
        message: "Enter your PIN code -> ",
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "Select your account type "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast cash", "withdraw"],
        message: "Select your trasaction ",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "withdrawAmount",
        choices: [1000, , 2000, 3000, 10000, 20000],
        message: "Select your amount for withdrawl ",
        when(answers) {
            return answers.transactionType == "fast cash";
        }
    },
    {
        type: 'number',
        name: "amount",
        message: "Enter withdrawl amount",
        when(answers) {
            return answers.transactionType == 'withdraw';
        }
    }
]);
if (answers.userId && answers.userPassword) {
    let balance = Math.floor(Math.random() * 10000);
    console.log("Current balance: " + balance);
    if (balance > answers.amount) {
        let remainingBlnc = balance - answers.amount;
        console.log("your remaining balance is: " + remainingBlnc);
    }
    else {
        console.log("Your Balance is Insuffiecient!!");
    }
}
