const { fstat } = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {

    },
    {

    },
    {

    },
];

// function to write README file
function writeToFile(fileName, data) {
    fstat.writeFile("GENERATED.md", data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers) {
        generateMarkdown(answers);
    })
}

// function call to initialize program
init();
