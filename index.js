#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bold("\n\tWelcome to - Todo List App\n"));
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: chalk.green.bold("What do you want to add ? \n Add Here:"),
        },
        {
            name: "addMore",
            type: "confirm",
            message: chalk.blue.bold("Do you want to add more Todo?"),
            default: "false",
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
