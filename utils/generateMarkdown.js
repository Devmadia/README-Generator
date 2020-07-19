// function to generate markdown for README
function generateMarkdown(data) {
  // destructuring the array
  const {
      title,
      description,
      installation,
      usage,
      contribution,
      test,
      license,
      github,
      email
  } = data;
    
  /* Questions: WHEN I enter my GitHub username
  THEN this is added to the section of the README 
  entitled Questions, with a link to my GitHub profile */

  return `
  # ${title}

  ## Description

  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Questions](#questions) 
  
  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  This project is covered by the ${license} license. 
  
  ![${license} license badge](https://img.shields.io/badge/license-${license}-brightgreen)
  
  ## Contribution
  ${contribution}

  ## Test
  ${test}

  ## Questions
  Visit my GitHub [${github}](https://github.com/${github})

  If you have any additional questions not answered here or wish to contact me regarding developments, please email me at 
  [${email}](mailto:${email})
  `;
}

module.exports = generateMarkdown;
