// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage instructions?",
  },
  {
    type: "list",
    name: "license",
    message: "Select a license for your project.",
    choices: ["apache 2.0", "mit", "gpl 3.0", "none"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How to contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "What testing framework were used?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("README file created!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const markdownContent = generateMarkdown(responses);
    writeToFile("generatedREADME.md", markdownContent);
  });
}

// Function call to initialize app
init();
