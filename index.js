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
name: 'test',
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
function writeToFile (filename, readMeContent) {
  const filename ='README.md'

  FileSystem.writefile (filename, readMeContent) 
  console.log(`Responses saved to ${filename}`);
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
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
function generateReadMe(anwsers){
  //use back ticks for anwsers
  // use # symbol for headdings 

`  
# ${anwsers.title}

## Description
  ${anwsers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Instillation
  ${anwsers.installation}

  ## Usage
  ${anwsers.usage}

  ## Contributing
  ${anwsers.contributing}

  ## Tests
  ${anwsers.tests} 
  
  ## Questions
  If you have any questions, please contact me at [GitHub](https://github.com/Jbradu2) or via email at Joshua.ry.bradshaw@gmail.com.
  `;
}
// WHEN I enter my project title
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled 
//## Badges
//![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// THEN this is displayed as the title of the README
// WHEN I choose a license for my application from a list of options
//      License that explains which license the application is covered under
//how to add licence?
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// link this to questions cat
// WHEN I click on the links in the Table of Contents
// how to make table of contents?w
// THEN I am taken to the corresponding section of the README

// Function call to initialize app

init();
