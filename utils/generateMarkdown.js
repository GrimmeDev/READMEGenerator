// function to generate markdown for README
function generateMarkdown(data) {
    // DESTRUCTURE data(?)
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

    #### Questions?
    If you have questions regarding this program:
    Send me a message through GitHub here [githublink] or through email here [email link]
    ##### Credits
    ${data.collaborators}

`;
}

module.exports = generateMarkdown;