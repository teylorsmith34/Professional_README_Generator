// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    const encodedLicense = encodeURIComponent(license);
    return `[![License: ${license}](https://img.shields.io/badge/License-${encodedLicense}-blue.svg)](https://opensource.org/licenses/${encodedLicense})`;
  }
  return "";
}
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    const encodedLicense = encodeURIComponent(license);
    return `[https://choosealicense.com/licenses/${encodedLicense}](https://choosealicense.com/licenses/${encodedLicense})`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
This project is licensed under the ${renderLicenseLink(license)}`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
This project is licensed under the ${renderLicenseLink(license)}`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${data.license !== "none" ? "- [License](#license)" : ""}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
[${data.github}](https://github.com/${data.github})

${data.email}
`;
}

module.exports = generateMarkdown;
