const Engineer = require('../engineer');
const Intern = require('../intern');
const Manager = require('../manager');
const fs = require('fs');
const inquirer = require("inquirer");


const teamMembers = [];

const questionsManager = [
    "What is the team Manager's name?",
    "What is the team Manager's ID? Enter integers only.",
    "What is the team Manager's email?",
    "What is the team manager's office number?"
];

const questionsEngineer = [
    "What is the engineer's name?",
    "What is the engineer's ID? Enter integers only.",
    "What is the engineer's email?",
    "What is the engineer's Github?"
];

const questionsIntern = [
    "What is the intern's name?",
    "What is the intern's ID? Enter integers only.",
    "What is the intern's email?",
    "What is the intern's school?"
];

function generateHtml(filename, data) {
    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log("Created!"));
}

function init() {
    console.log("Hello world!");
    console.log("----------------");
    console.log("This program will ask you some questions to generate an html file that will display your team. Ready? Let's begin.");

    addManager();
    addTeamMembers();
}

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: questionsManager[0],
            },
            {
                type: 'input',
                name: 'managerID',
                message: questionsManager[1],
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: questionsManager[2],
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: questionsManager[3],
            },
        ])
        .then((answers) => {
            const teamManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);

            teamMembers.push(teamManager);
        })
}

function addTeamMembers() {
    console.log("Great, let's continue.");
    console.log("------------");
    inquirer
        .prompt([
            {
                type: 'List',
                name: 'addTeamMember',
                message: 'Choose which team member you would like to add, or choose "Complete" if you are finished adding your team members.',
                choices: ['Engineer', 'Intern', 'Complete'],
            }
        ])
        .then((answer) => {
            if (answer === 'Engineer') {
                addEngineer();
            } else if (answer === 'Intern') {
                addIntern();
            }
            else {
                endProgram();
            }
        })
}

function addEngineer() {
    console.log("We will now add an engineer.");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: questionsEngineer[0],
            },
            {
                type: 'input',
                name: 'engineerID',
                message: questionsEngineer[1],
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: questionsEngineer[2],
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: questionsEngineer[3],
            },
        ])
        .then((answers) => {
            const teamEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);

            teamMembers.push(teamEngineer);
            addTeamMembers();
        })
};

function addIntern() {
    console.log("We will now add an intern.");
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: questionsIntern[0],
            },
            {
                type: 'input',
                name: 'internID',
                message: questionsIntern[1],
            },
            {
                type: 'input',
                name: 'internEmail',
                message: questionsIntern[2],
            },
            {
                type: 'input',
                name: 'internSchool',
                message: questionsIntern[3],
            },
        ])
        .then((answers) => {
            const teamIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);

            teamMembers.push(teamIntern);
            addTeamMembers();
        })
};

function endProgram(){
    console.log("Thank you for using this program! Your team page will now be generated...");
    generateHtml('team.html', teamMembers);
};