const inquirer = require("inquirer");
const fs = require("fs");
const { async } = require("rxjs");
const generate = require("./utils/generateMarkdown.js");

// array of license types for use
const license = ["Apache License 2.0", "BSD 3-Clause", "BSD 2-Clause", "GNU General Public", "GNU Library", "MIT", "Mozilla Public License 2.0", "Common Development and Distribution License", "Eclipse Public License v2.0"];

// array of questions for user
const questions = [{
    type: "input",
    message: "What is the name of your project?",
    name: "projectName"
},
{
    type: "input",
    message: "What description would you like for your project",
    name: "description"
},
{
    type: "input",
    message: "What, if any, are the installation instructions for this program?",
    name: "installGuide"
},
{
    type: "input",
    message: "How does the user use this program?",
    name: "usageGuide"
},
{
    type: "input",
    message: "Who, if anyone, helped collaborate on this project? Type their GitHub names (Type nothing to exclude)",
    name: "collaborators"
},
{
    type: "input",
    message: "How does a user test this application?",
    name: "testingGuide"
},
{
    type: "list",
    message: "Which license would you like to use?",
    choices: license,
    name: "selectedLicense"
},
{
    type: "input",
    message: "What is your github name?",
    name: "creatorGithub"
},
{
    type: "input",
    message: "What is your email address?",
    name: "creatorEmail"
},
{
    type:"input",
    message:"Would you like to include a special note in your readme? (Type nothing to exclude)",
    name:"specialMsg"
}
];

// function to write README file
function writeToFile(data) {
    // console.log("LN 60: " + data);
    // console.log("In WriteTo");
    data = generate(data)
    // console.log("Post Generate Data: " + data);
    fs.writeFile("README.md", data, function (err) {
        if (err)
            console.log("Write Error: " + err);
        else
            console.log("File Written");
    });
}

// function to initialize program
// using async instead of .prompt().then()
async function init() {
    // put inquirer inside here
    try {
        const data = await
            inquirer
                .prompt(questions);
        writeToFile(data);
    } catch (err) {
        console.log("Error " + err);
    }
}

// function call to initialize program
init();