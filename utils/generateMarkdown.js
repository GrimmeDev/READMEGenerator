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