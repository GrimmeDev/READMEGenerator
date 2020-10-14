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

    ## Installation
    ${data.installGuide}
    ## Usage
    ${data.usageGuide}
    ## Credits
    ${data.collaborators}
    ## License
    ${data.selectedLicense}

`;
}

module.exports = generateMarkdown;