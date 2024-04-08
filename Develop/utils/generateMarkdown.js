// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return '';
  }
  else {
    const licenseLink = renderLicenseLink(license);
    if (license === "GNU AGPLv3") {
      return `[![Static Badge](https://img.shields.io/badge/License-GNU_AGPLv3-green)](${licenseLink})`
    }
    if (license === "GNU GPLv3") {
      return `[![Static Badge](https://img.shields.io/badge/License-GNU_GPLv3-blue)](${licenseLink})`
    }
    if (license === "GNU LGPLv3") {
      return `[![Static Badge](https://img.shields.io/badge/License-GNU_LGPLv3-red)](${licenseLink})`
    }
    if (license === "Mozilla") {
      return `[![Static Badge](https://img.shields.io/badge/License-Mozilla-purple)](${licenseLink})`
    }
    if (license === "MIT") {
      return `[![Static Badge](https://img.shields.io/badge/License-MIT-yellow)](${licenseLink})`
    }
    if (license === "Apache") {
      return `[![Static Badge](https://img.shields.io/badge/License-Apache-silver)](${licenseLink})`
    }
    if (license === "Boost") {
      return `[![Static Badge](https://img.shields.io/badge/License-Boost-gold)](${licenseLink})`
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return '';
  }
  else {
    if (license === "GNU AGPLv3") {
      return 'https://www.gnu.org/licenses/agpl-3.0.en.html'
    }
    if (license === "GNU GPLv3") {
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    }
    if (license === "GNU LGPLv3") {
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    }
    if (license === "Mozilla") {
      return 'https://www.mozilla.org/en-US/MPL/'
    }
    if (license === "MIT") {
      return 'https://opensource.org/license/mit'
    }
    if (license === "Apache") {
      return 'https://www.apache.org/licenses/LICENSE-2.0'
    }
    if (license === "Boost") {
      return 'https://www.boost.org/users/license.html'
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    console.log("No License specified");
    return '';
  }
  else {
    // Print the notice, markdown only works in github
    return `
  ## License
  > [!NOTE]  
  > This project uses the [${license}](${renderLicenseLink(license)}) open source license.`
  }
}

// Create Table of content with or without license
function renderTableOfContent(license) {
  if (license === "None") {
    return `
  ## Table of Contents
  1. [Installation Instructions](#installation-instructions)
  2. [Usage Information](#usage-information)
  3. [Contribution Guidelines](#contribution-guidelines)
  4. [Test Instructions](#test-instructions)
  5. [Questions](#questions)
    `
  }
  else {
    return `
  ## Table of Contents
  1. [Installation Instructions](#installation-instructions)
  2. [Usage Information](#usage-information)
  3. [Contribution Guidelines](#contribution-guidelines)
  4. [Test Instructions](#test-instructions)
  5. [Questions](#questions)
  6. [License](#license)
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Markdown structure
  return `
  # ${data['title']}

  ${renderLicenseBadge(data['license'])}
  
  ## Description
  ${data['description']}
  
  ${renderTableOfContent(data['license'])}
  
  ## Installation Instructions
  ${data['installation-instructions']}
  
  ## Usage Information
  ${data['usage-information']}
  
  ## Contribution Guidelines
  ${data['contribution-guidelines']}
  
  ## Test Instructions
  ${data['test-instructions']}
  
  ## Questions
  For any questions, please reach out to [${data['username']}](https://github.com/${data['username']}) via email at ${data['email']}

  ${renderLicenseSection(data['license'])}

`}

module.exports = generateMarkdown;
