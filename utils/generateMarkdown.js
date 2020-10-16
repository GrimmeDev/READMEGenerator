const collabList = require("./collabString.js");

// function to generate markdown for README
function generateMarkdown(data) {
        // console.log("In Generate");
        // console.log(data);
        const collabs = data.collaborators.split(/[.,\/ -]/);
        //#region Psuedo Thinking
        // DESTRUCTURE data(?)
        // May want to write checks to see if collaborators is NOT empty, if empty return a different template?
        // If not empty, split(?) data.collaborators into different segments to link to their github profiles?
        // USE TEMPLATE LITERAL
        /*
        Project Title
        Project Description
        Table of Contents
        Installation
        Usage Examples
        Credits
        License
        Badges
        */
        //#endregion
        return `# ${data.projectName}
## Description
${data.description}
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
${collabs!=""?
                        `* [Collaborators](#Collaborators)` : ""}
${data.testingGuide ?
                        `* [Testing](#Testing)` : ""}
* [Questions](#Questions)
${data.specialMsg ?
                        `* [Special](#Special)` : ""}
## Installation
${data.installGuide}
## Usage
${data.usageGuide}
### License
${data.selectedLicense}
${collabs?
                        `### Collaborators
${collabList(collabs)}` : ""}
### Testing
${data.testingGuide}
#### Questions?
If you have questions regarding this program:<br>
Send me a message through GitHub: [![GitHub Link](https://img.shields.io/badge/Github-${data.creatorGithub}-lightgrey.svg)](https://github.com/${data.creatorGithub})<br>
Or through email here: <a href="mailto:${data.creatorEmail}" target="_blank">![Email Link](https://img.shields.io/badge/EMAIL-ME-informational.svg)</a>
${data.specialMsg ?
                        `#### Special Message
${data.specialMsg}` : ""}`;
};
module.exports = generateMarkdown;