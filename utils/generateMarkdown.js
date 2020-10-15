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
<ol>
<li>[Description](#Description)</li>
<li>[Installation](#Installation)</li>
<li>[Usage](#Usage)</li>
<li>[License](#License)</li>
${collabs != "" ?
                        `<li>[Collaborators](#Collaborators)</li>` : ""}
<li>[Testing](#Testing)</li>
<li>[Questions](#Questions)</li>
${data.specialMsg ?
                        `<li>[Special](#Special)</li>` : ""}
</ol>

## Installation
${data.installGuide}
## Usage
${data.usageGuide}
### License
${data.selectedLicense}
${collabs != "" ?
                        `#### Collaborators
${collabs.map(collabs => `[${" " + collabs}]("https://github.com/"${collabs})`)}` : ""}
### Testing
${data.testingGuide}
#### Questions?
If you have questions regarding this program:
Send me a message through GitHub here [![GitHub Link](https://img.shields.io/badge/Github-${data.creatorGithub}-lightgrey.svg)](https://github.com/${data.creatorGithub}) or through email here [![Email Link](https://img.shields.io/badge/EMAIL-ME-lightgrey.svg)](${data.creatorEmail})
${data.specialMsg ?
                        `#### Special Message\n
${data.specialMsg}}` : ""}

`;
}
module.exports = generateMarkdown;