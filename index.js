// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateReadme from "./generateReadme.js";
import path from "path";



// TODO: Create an array of questions for user input
 
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of your project?"
},
{
    type: "input",
    name: "description",
    message: "Please provide a description of your project."
},
{
    type: "input",
    name: "installation",
    message: "Please provide installation instructions."
},
{
    type: "input",
    name: "usage",
    message: "Please provide usage information."
},
{
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines."
},
{
    type: "input",
    name: "test",
    message: "Please provide test instructions."
},
{
    type: "list",
    name: "license",
    message: "Please select a license.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"]
},
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "questions",
    message: "Please provide instructions for how to reach you with additional questions."
}
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return  fs.writeFileSync(path.join(process.cwd(),fileName), data, (err) =>
    err ? console.error(err) : console.log("Success! Your README.md file has been generated")
);

}


// Function to initialize app
function init () {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generateReadme(answers));
    });
}

// Function call to initialize app
init();
