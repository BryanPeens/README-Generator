// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
// Markdown structure
  return `
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  1. [Installation Instructions](#installation-instructions)
  2. [Usage Information](#usage-information)
  3. [Contribution Guidelines](#contribution-guidelines)
  4. [Test Instructions](#test-instructions)
  
  ## Installation Instructions
  ${data['installation-instructions']}
  
  ## Usage Information
  ${data['usage-information']}
  
  ## Contribution Guidelines
  ${data['contribution-guidelines']}
  
  ## Test Instructions
  ${data['test-instructions']}
  `;
}

module.exports = generateMarkdown;
