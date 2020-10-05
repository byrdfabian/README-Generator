const inquirer = require("inquirer"); //imported package from npm

const fs = require("fs");  //The required fileSystem include in nodejs

const util = require ("util"); //imported package from nmp

const generatorMarkdown= require('./generateMarkdown');


 //Constant Question Object with type, message, and name properties and values
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "Title"
},
{
    type: "input",
    message: "Please provide a description of you project?",
    name: "Description"
},
{
    type: "input",
    message: "Table of Contents",
    name: "Table of Contents",
},
{
    type: "input",
    message: "What will the user need to install this applicaction?",
    name: "Installation"
},
{
    type: "input",
    message: "What is the used for?",
    name: "Usage"
},
{
    type: "input",
    message: "What licenses are required?",
    name: "Liscense"
},
{
    type: "input",
    message: "Who are the contributors?",
    name: "Contributors"
},
{
    type: "input",
    message: "How did you test this application?",
    name: "Test"
},
{
    type: "input",
    message: "Do you have any questions?",
    name: "Questions"
}
]


function writeFile(fileName,data){
    
    fs.writeFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }

    })
}

function init(){
    inquirer.prompt(questions)
        .then(function(data){
            //fs.write("README.md", generatorMarkdown(data));
            writeFile("README.md",generatorMarkdown(data));
            console.log(data)
        })
}

init();