#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "View Todo-list",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
// Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :",
        },
    ]);
    todos.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-list`);
};
// Function to view all Todos task
let viewTask = () => {
    console.log("\n your todos: \n");
    todos.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// Function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no.` of the task you want to delete :",
        },
    ]);
    let deletedTask = todos.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfully from your todos\n`);
};
//Function to update a task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index no`of the task you want to update :",
        },
        {
            name: "newTask",
            type: "input",
            message: "Now Enter the new task name :",
        },
    ]);
    todos[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [For updated list Check option: "View Todo-list"]`);
};
main();
