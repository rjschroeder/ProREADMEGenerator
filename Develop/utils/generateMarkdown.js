function renderLicenseBadge(license) {
  if(license !== "No license"){
    return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else{
    return "";
  }
}

function renderLicenseLink(license) {
  if(license !== "No license"){
    return `
- [License](#license)`;
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if(license !== "No license"){
    return `
## License

This project is licensed under: ${license}
`;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}
${renderLicenseSection(data.license)}
## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

GitHub Username: ${data.github}

GitHub Profile: [Click Here](https://github.com/${data.github})

Feel free to email me with any questions you may have at my email below:

Email: ${data.email}

`;
}

module.exports = generateMarkdown;
