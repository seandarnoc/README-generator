// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatMarkdown = require('./Develop/utils/generateMarkdown');
const { type } = require('os');






// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: 'input',
        name: 'project_title',
        message: "What is the title/name of your project?"
    },
    
    {
        type: 'input',
        name: 'description_of_project',
        message: "Describe your project here:"
    },

    {
        type: 'input',
        name: 'installation_instructions',
        message: "how do you run the project? (include any dependencies)"
    },

    {
        type: 'input',
        name: 'usage_information',
        message: "How do you use this project? (provide instructions)"
    },

    {
        type: 'input',
        name: 'contribution_guidelines',
        message: "Explain here what is required if another developer wishes to contribute:"
    },

    {
        type: 'input',
        name: 'test.instructions',
        message: "provide code examples to help another contributor:"
    },

    {
        type: 'list',
        name: 'project_license',
        message: "Choose your license:",
        choices: ['Boost', 'Eclipse', 'MIT', 'Apache'],
        filter(val) {
            return val;
        }
    },

    {
        type: 'input',
        name: 'github username',
        message: "What is your github username?"
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let readme = generatMarkdown(data);
    fs.appendFile(fileName, readme)
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .pr
}

// Function call to initialize app
init();
