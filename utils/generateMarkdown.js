// function to generate markdown for README
function generateMarkdown(data) {
        // console.log("In Generate");
        // console.log(data);
        const collabs = data.collaborators.split(/[.,\/ -]/);
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
        return `# ${data.projectName}
## Description
${data.description}
## Table of Contents

### Installation
${data.installGuide}
### Usage
${data.usageGuide}
#### License
${data.selectedLicense}
${collabs != "" ?
                        `#### Collaborators \n
${collabs.map(collabs => `[${" " + collabs}]("https://github.com/"${collabs})`)}` : ""}
#### Testing
${data.testingGuide}
#### Questions?
If you have questions regarding this program:
Send me a message through GitHub here [![GitHub Link](https://img.shields.io/badge/Github-${data.creatorGithub}-lightgrey.svg)](https://github.com/${data.creatorGithub}) or through email here [email link]
##### Credits

`;
}
module.exports = generateMarkdown;