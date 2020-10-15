// function to generate markdown for README
function generateMarkdown(data) {
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
    [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
    ## Description
    ${data.description}
    ## Table of Contents

    ### Installation
    ${data.installGuide}
    ### Usage
    ${data.usageGuide}
    #### License
    ${data.selectedLicense}
    ${data.collaborators ?
            `#### Collaborators \n
    ${data.collaborators.map(collabs => `[${collabs}]("https://github.com/"+${collabs}).join(" ")`)}`
            : ""}
    #### Testing
    ${data.testingGuide}

    #### Questions?
    If you have questions regarding this program:
    Send me a message through GitHub here [githublink] or through email here [email link]
    ##### Credits

`;
}

module.exports = generateMarkdown;