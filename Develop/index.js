// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');

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
        type: 'editor',
        name: 'description',
        message: 'Write a description of the project',
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
        name: 'contribution',
        message: 'how others contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'how to test?',
    },
];

// TODO: Create a function to write README file
function writeToFile(allDaAnswers) {
    fs.writeFile('README.md', `# ${allDaAnswers.projectTitle}\n## Description\n${allDaAnswers.description}\n## Table of Contents\n\n[Installation](#installation)\n\n[Usage](#usage)\n\n[License](#license)\n\n[Contribution](#contribution)\n\n[Tests](#tests)\n\n[Questions](#questions)\n\n## Installation\n${allDaAnswers.installation}\n## Usage\n${allDaAnswers.usage}\n## License\n${allDaAnswers.license}\n## How to contribute\n${allDaAnswers.contribution}\n## Tests\n${allDaAnswers.tests}\n## Questions\n If you have any questions please visit my GitHub at https://github.com/${allDaAnswers.userName} or email me at ${allDaAnswers.email}. Thanks to Rob for this amazingly awesome Readme! `, (error) => 
    error ? console.error(error) : console.log('Great Success') )

    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile)
}

// Function call to initialize app
init();
