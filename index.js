const Engineer = require('./engineer');
const Intern = require('./intern');
const Manager = require('./manager');
const fs = require('fs');
const inquirer = require("inquirer");
const generateHtml = require('./generatehtml');


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

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log("Created!"));
};

function init() {
    console.log("Hello world!");
    console.log("----------------");
    console.log("This program will ask you some questions to generate an html file that will display your team. Ready? Let's begin.");

    addManager();
};

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: questionsManager[0],
            },
            {
                type: 'input',
                name: 'ID',
                message: questionsManager[1],
            },
            {
                type: 'input',
                name: 'email',
                message: questionsManager[2],
            },
            {
                type: 'input',
                name: 'office',
                message: questionsManager[3],
            },
        ])
        .then((answers) => {
            const teamManager = new Manager(answers.name, answers.ID, answers.email, answers.office);

            teamMembers.push(teamManager);
            addTeamMembers();
        })
}

function addTeamMembers() {
    console.log("Great, let's continue.");
    console.log("------------");
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'addTeamMember',
                message: 'Choose which team member you would like to add, or choose "Complete" if you are finished adding your team members.',
                choices: ['Engineer', 'Intern', 'Complete'],
            }
        ])
        .then((answer) => {
            console.log(answer);
            if (answer.addTeamMember === 'Engineer') {
                addEngineer();
            } else if (answer.addTeamMember === 'Intern') {
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
                name: 'name',
                message: questionsEngineer[0],
            },
            {
                type: 'input',
                name: 'ID',
                message: questionsEngineer[1],
            },
            {
                type: 'input',
                name: 'email',
                message: questionsEngineer[2],
            },
            {
                type: 'input',
                name: 'github',
                message: questionsEngineer[3],
            },
        ])
        .then((answers) => {
            const teamEngineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);

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
                name: 'name',
                message: questionsIntern[0],
            },
            {
                type: 'input',
                name: 'ID',
                message: questionsIntern[1],
            },
            {
                type: 'input',
                name: 'email',
                message: questionsIntern[2],
            },
            {
                type: 'input',
                name: 'school',
                message: questionsIntern[3],
            },
        ])
        .then((answers) => {
            const teamIntern = new Intern(answers.name, answers.ID, answers.email, answers.school);

            teamMembers.push(teamIntern);
            addTeamMembers();
        })
};

function endProgram(){
    console.log("Thank you for using this program! Your team page will now be generated...");
    console.log(teamMembers);
    const myHTML = generateHtml(teamMembers);
    writeToFile('team.html', myHTML);
};

init();