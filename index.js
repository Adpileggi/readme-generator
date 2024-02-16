// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the installation process'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the intended usage of this project'
        },
        {
            type: 'checkbox',
            name: 'liscense',
            message: 'Please choose the liscense for the project',
            choices: ['None', 'Apache', 'GNU', 'MIT', 'BSD-2', 'BSD-3', 'Boost', 'Creative Commons Zero', 'Eclipse', 'GNU Affero', 'GNU', 'Mozilla', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Name any contributions made to the project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide testing instructions'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please state your email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your github username'
        },
    ])
    // TODO: Create a function to write README file
    .then((data) => {
        console.log(data)
        // fs.writeFile('ReadMeInfo', JSON.stringify(data, null, '/t'), (err) =>
        // err ? console.log(err) : console.log('Success')
        // )
    }) 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
