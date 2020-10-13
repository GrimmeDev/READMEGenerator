// function to generate markdown for README
function generateMarkdown(data) {
    // DESTRUCTURE data
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
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;