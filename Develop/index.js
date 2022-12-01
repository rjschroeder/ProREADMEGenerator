const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        name: "title",
        message: "What is the project title?",
        type: "input"
    },
    {
        name: "description",
        message: "What is the project description?",
        type: "input"
    },
    {
        name: "install",
        message: "What are the instructions for installation?",
        type: "input"
    },
    {
        name: "contributing",
        message: "What are the contribution guidelines?",
        type: "input"
    },
    {
        name: "tests",
        message: "What are the test instructions?",
        type: "input"
    },
    {
        name: "license",
        message: "Choose your license:",
        choices: ["Apache License 2.0", "GNU GPL", "MIT", "ISC"],
        type: "list"
    },
    {
        name: "github",
        message: "Enter your GitHub username:",
        type: "input"
    },
    {
        name: "email",
        message: "Enter your Email:",
        type: "input"
    }
];

function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data)
}

function init() {
    inquirer.prompt(questions)
        .then((enteredValues) => {
            writeToFile("README.md", generateMarkdown(enteredValues))
        })
}

init();
