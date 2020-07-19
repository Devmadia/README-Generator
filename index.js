const fs = require('fs'); // in order to use File System, the aside constant is necessary
const inquirer = require('inquirer');

// receiving module.exports from generateMarkdown.js
const generateMarkdown = require('./utils/generateMarkdown.js');

/* Questions: the title of project and sections entitled "Description", "Table of Contents", 
"Installation", "Usage", "License", "Contributing", "Tests", and "Questions" */

// array of questions for user
const questions = [
    {
        // README.md title
        type: "input",
        name: "title",  
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please enter the title of your project!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please provide a short description of your project.")
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions for your project?",
        default: true
    },
    {
        /* a badge for that license is added near the top of the README and 
        a notice is added to the section of the README entitled License that 
        explains which license the application is covered under */
        type: "input",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "MIT",
			"GNU AGPLv3",
			"GNU GPLv3",
			"GNU LGPLv3",
			"Mozilla Public 2.0",
			"Apache 2.0",
			"Boost Software 1.0",
			"The Unlicense"
        ],
        // default: 0
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?",
        default: true
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to initiate tests?",
        default: true
    },
    {
        /* added to the section of the README entitled Questions, 
        with a link to a GitHub profile*/
        type: "input",
        name: "github", 
        message: "What is your GitHub username? (Required)",
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username to continue.");
                return false;
            }
        }
    },
    {
        /* added to the section of the README entitled Questions, 
        with instructions on how to reach me with additional questions*/
        type: "input",
        name: "email",
        message: "What is your email address? (Required)",
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter your email address to contine.");
                return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("README.md generated successfully!");
    });
}

// function to initialize program
function init() {
    inquirier
        .prompt(questions)
        .then((data) => {
            return generateMarkdown(data);
        })
        .then((markdown) => {
            writeToFile("README.md", markdown);
        })
        .catch((err) => {
            console.log(err);
        });
}

// function call to initialize program
init();
