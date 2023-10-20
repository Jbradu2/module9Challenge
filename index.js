// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title: ',
},
{
    type: 'input',
    name: 'description',
    message: 'Enter project description: ',
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter information: ',
},
];

// TODO: Create a function to write README file
function writeToFile (fileName, data) {
  FileSystem.writefile (fileName, data,) 
};

// TODO: Create a function to initialize app
function init() {
  inquirer
  //.use .prompt to ask and .then for anwsers
  .prompt(questions)
  .then((anwsers) => {
    //use back ticks for anwsers
    const readmeContent = generatReadme();
  }
}

// Function call to initialize app
init();
