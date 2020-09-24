const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your projects title?"
    },
    {
        type: "input",
        name: "description",
        message: "enter a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "enter in any installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "provide instruction and examples for use"
    },
    {
        type: "input",
        name: "contributions",
        message: "do you have any contributions?"
    },
    {
        type: "input",
        name: "test",
        message: "enter in any tests for your application"
    },
    {
        type: "list",
        name: "license",
        message: "choose a license for your application",
        choices: ["MIT", "Apache", "GNU", "ISC"]
    },
    {
        type:"input",
        name: "github",
        message: "enter in your GitHub account"
    },
    {
        type:"input",
        name: "email",
        message: "enter in your email"
    },
];

// function to write README file
const writeToFile = data => {
  fs.writeFile("GeneratedReadMe.md", data,(err) => 
        err ? console.log(err) : console.log("Success!")
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers);
        writeToFile(generateMarkdown(answers));
    })
}
// function call to initialize program
init();
