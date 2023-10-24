// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (!license) {
  return '';
}
  // Define the badge URLs for different licenses
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    GPL: '[![License: GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    Apache: '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-lightblue.svg)](https://www.apache.org/licenses/LICENSE-2.0)',
  };
  // Check if the license provided is valid, and return the badge
  return licenseBadges[license] || '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!license) {
    return '';
}
  // Define the license URLs for different licenses
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0',
    Apache: 'https://www.apache.org/licenses/LICENSE-2.0',
  };
    // Check if the license provided is valid, and return the link
    return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) {
  return '';
}

// Return a markdown section with the license information
return `## License

  
  This project's license is [${license} license](${renderLicenseLink(license)}).
  `;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
# ${data.title}

${licenseBadge}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
${licenseSection ? '- [License](#license)' : ''}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${licenseSection}
  `;
}

module.exports = generateMarkdown;
