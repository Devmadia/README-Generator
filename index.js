/* Questions: the title of project and sections entitled "Description", "Table of Contents", 
"Installation", "Usage", "License", "Contributing", "Tests", and "Questions" */


// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username? (Required)",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "what is your email address?",
        default: true
    },
    {
        type: "input",
        name: "projectname",
        message: "What is your project's name? (Required)",
        validate: projectnameInput => {
            if (projectnameInput) {
                return true;
            } else {
                console.log("Please enter your project's name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project. (Required)",
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
        name: "license",
        message: "What kind of license should your project have?",
        default: true
    },
    {
        type: "input",
        name: "command",
        message: "What command should be run to install dependencies?",
        default: true
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to initiate tests?",
        default: true
    },
    {
        type: "input",
        name: "faq",
        message: "What does the user need to know about using the repo?",
        default: true
    },
    {
        type: "input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?",
        default: true
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
