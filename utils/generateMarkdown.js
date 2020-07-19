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

  return `# ${data.title}
  # ${title}

  ${license}

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

  ##Usage
  ${usage}

  ## License
  This project is covered by the $(license) license.

  ## Contribution
  ${contribution}

  ## Test
  ${test}

  ## Questions
  Visit my GitHub 

  If you have any additional questions not answered here or wish to contact me regarding developments, please email me at ${email}(mailto:${email}).
   
`;
}

module.exports = generateMarkdown;
