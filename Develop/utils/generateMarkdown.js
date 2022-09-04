// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Boost') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license == 'Eclipse') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license === 'Boost') {
    return '[![license]](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license === 'Eclipse') {
    return '[![license]](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'MIT') {
    return '[![license]](https://opensource.org/licenses/MIT)'
  }else if (license === 'Apache') {
    return '[![license]](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'No License') {
    return '"This project does not require a license"';
  } else {
    return ""

  }
}
 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
      if (license !== 'no license') {
        return `
        ## [License](#table-of-contents)
        This project is covered under this license:
        ${renderLicenseLink(license)}
        `;
      } else {
        return ' ';
      }
      }

function renderLicenseInTableOfContents(license) {
  if (license !== "no license") {
    return `
    * [License](#license)
    `;
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project_title}
  
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.description_of_project}
  
  ## [Installation](#table-of-contents)
  ${data.installation_instructions}
  ## [Usage](#table-of-contents)
  ${data.usage_information}
  
  For more information on how to add screenshots or other enhancements to this README, visit the following website:
  
  [Mark Down Tutorial](https://ghost.org/changelog/markdown/)
  
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ## [Contributing](#table-of-contents)
  ${data.contribution_guidelines}
  ## [Tests](#table-of-contents)
  ${data.test_instructions} 
  
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.github_username})
  [Email: ${data.email}](mailto:${data.email})
`;
}
  


module.exports = generateMarkdown;
