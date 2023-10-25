// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title: ',
},
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
{
    type: 'input',
    name: 'description',
    message: 'Enter project description: ',
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter project usage information: ',
},
{
  type: 'input',
  name: 'installation',
  message: 'Enter project installation instructions: ',
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter information: ',
},
{
  type: 'input',
  name: 'contributing',
  message: 'Enter contiubtion guidline information: ',
},
{
type: 'input',
name: 'tests',
message: 'Enter test instructions: ',
},
{
type: 'list',
name: 'license',
message: 'Choose a license for your project:',
choices: ['MIT', 'GPL', 'Apache', 'None'],
}
];
// TODO: Create a function to write README file
function writeToFile(filename, readMeContent) {
  fs.writeFile(filename, readMeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Responses saved to ${filename}`);
    }
  });
}



// TODO: Create a function to initialize app
function init() {
  inquirer
  //.use .prompt to ask and .then for anwsers
  .prompt(questions)
  .then((anwsers) => {

    const readMeContent = generateReadMe(anwsers);

    writeToFile('README.md', readMeContent);
  });
}

function generateReadMe(anwsers){
  return `
# ${anwsers.title}

## Description
  ${anwsers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

  ## Instillation
  ${anwsers.installation}

  ## Usage
  ${anwsers.usage}

  ## Contributing
  ${anwsers.contributing}

  ## Tests
  ${anwsers.tests} 

  ## License
  ${anwsers.license}
  
  ## Questions
  If you have any questions, please contact me at [GitHub](https://github.com/Jbradu2) or via email at Joshua.ry.bradshaw@gmail.com.
  `;
}


init();
