// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/License-${data.license}-blue)

  ## Description 
  
  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ##  Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributions}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions you can check out my github account: [${data.github}](https://github.com/${data.github})
  or contact me at ${data.email}

`;
}

module.exports = generateMarkdown;
