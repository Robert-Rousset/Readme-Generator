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
        message: 'What is your GitHub name?',
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of the project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license',
        choices: ["Apache", "BSD", "Eclipse", "GNU", "IBM", "MIT", "Mozilla", "Zlib", new inquirer.Separator()]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test the project?',
    },
];

// TODO: Create a function to write README file
function writeToFile(allDaAnswers) {
    switch(allDaAnswers.license){
    case "Apache":
        allDaAnswers.licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
    case "BSD":
        allDaAnswers.licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        break;
    case "Eclipse":
        allDaAnswers.licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
        break;
    case "GNU":
        allDaAnswers.licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
        break;
    case "IBM":
        allDaAnswers.licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
        break;
    case "MIT":
        allDaAnswers.licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        break;
    case "Mozilla":
        allDaAnswers.licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        break;
    case "Zlib":
        allDaAnswers.licenseBadge = `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`
        break;
    }
    
    fs.writeFile('README.md', `${allDaAnswers.licenseBadge}\n # ${allDaAnswers.projectTitle}\n## Description\n${allDaAnswers.description}\n## Table of Contents\n\n[Installation](#installation)\n\n[Usage](#usage)\n\n[License](#license)\n\n[Contribution](#contribution)\n\n[Tests](#tests)\n\n[Questions](#questions)\n\n## Installation\n${allDaAnswers.installation}\n## Usage\n${allDaAnswers.usage}\n## License\nThis project is licensed under the ${allDaAnswers.license} license.\n## How to contribute\n${allDaAnswers.contribution}\n## Tests\n${allDaAnswers.tests}\n## Questions\n If you have any questions please visit my GitHub at https://github.com/${allDaAnswers.userName} or email me at ${allDaAnswers.email}.`, (error) => 
    error ? console.error(error) : console.log('Great Success')) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(writeToFile)
}

// Function call to initialize app
init();
