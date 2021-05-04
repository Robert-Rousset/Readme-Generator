// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your Project?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'what yo GitHub name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'what yo email?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'ye',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'how u install?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'how do use?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'u got drivers license?',
        choices: ["Ye i drive", new inquirer.Separator(), "na can't"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'how others contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'how to test?',
    },
    {
        type: 'input',
        name: 'questions',
        message: "any Q's?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
