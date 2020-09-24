// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contribution)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ##  Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}


  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions you can check out my github account: ${data.github}
  or contact me at ${data.email}


`;
  
}

module.exports = generateMarkdown;
