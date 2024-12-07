function generateReadme(answers) {
  return `
  # ${answers.title}
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  
  ## Description
  ${answers.description}
  //table of contents
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  
  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license. 
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions, you can reach me at [${answers.email}](mailto:${answers.email}) or on GitHub at [${answers.github}](https://github.com/${answers.github})`;
}
export default generateReadme;