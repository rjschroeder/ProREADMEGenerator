function renderLicenseBadge(license) {
  if(license !== "No license"){
    //return license badge here
  } else{
    return "";
  }
}

function renderLicenseLink(license) {
  if(license !== "No license"){
    return `- [License](#license)`;
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if(license !== "No license"){
    return `## License

    Project License: ${data.license}`;
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
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
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
