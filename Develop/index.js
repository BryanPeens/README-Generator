// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
// WHEN I enter a description, installation instructions, usage information, 
// contribution guidelines, and test instructions
const questions = () => inquirer.prompt([
    // title
    {
        type:"input",
        name:"title",
        question:"Please enter a project title",
        // if there is no title given
        validate: (ask) =>
        ask === "" ? "Please enter a project title" : true,
    },
    // description
    {
        type:"input",
        name:"description",
        question:"Please enter a project description",
        // if there is no title given
        validate: (ask) =>
        ask === "" ? "Please enter a project description" : true,
    },
    // installation
    {
        type:"input",
        name:"installation-instructions",
        question:"Please enter a project installation instructions",
        // if there is no title given
        validate: (ask) =>
        ask === "" ? "Please enter a project installation instructions" : true,
    },
    // usage
    {
        type:"input",
        name:"usage-information",
        question:"Please enter a project usage information",
        // if there is no title given
        validate: (ask) =>
        ask === "" ? "Please enter a project usage information" : true,
    },
    // contribution
    {
        type:"input",
        name:"contribution-guidelines",
        question:"Please enter a project contribution guidelines",
        // if there is no title given
        validate: (ask) =>
        ask === "" ? "Please enter a project contribution guidelines" : true,
    },
    // tests
    {
        type:"input",
        name:"test-instructions",
        question:"Please enter a project test instructions",
        // if there is no title given
        validate: (ask) =>
        ask === "" ? "Please enter a project test instructions" : true,
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();

