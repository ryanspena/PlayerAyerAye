const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const render = require('./src/page-template')

const output_dir = path.resolve(__dirname, 'output')
const output_file = path.join(output_dir, 'team.html')
const team = [];

function menu() {
 inquirer.prompt(
     [
         {
             type: 'confirm',
             name: 'confirmTeam',
             message: 'Would you like to add a member to your business?',
         },
         {
             type: 'list',
             name: 'addTeam',
             message: 'Select any role',
             choices: ['Team Manager', 'Engineer', 'Intern'],
             when: ({ confirmTeam }) => {
                 if (confirmTeam) {
                     return true
                 } else {
                     return false;
                 }
             }
         }
     ]
 )
     .then(menuAnswers => {
         switch (menuAnswers.addTeam) {
             case 'Engineer':
                 questionsENG();
                 break;
             case "Intern":
                 questionsINT();
                 break;
             case "Team Manager":
                 questionsMGR();
                 break;
             default:
                 createTeam()

         }
    
     })
}


function questionMGR() {
 inquirer.prompt([
  {
   type: 'input',
   name: 'managerName',
   message: 'Who is your Team Manager(TM)?',
   validate: nameInput => {
    if (nameInput) {
     return true;
    } else {
     console.log('enter your managers name');
     return false;
    }
   }
  },
  {
   type: 'input',
   name: 'managerId',
   message: 'What is your managers ID?'
  },
  {
   type: 'input',
   name: 'managerEmail',
   message: 'What is your managers email?'
  },
  {
   type: 'input',
   name: 'managerId',
   message: 'What is your managers number?'
  },
 ])
}

function questionENG () {
 inquirer.prompt([
  {
    type: 'input',
    name: 'engineerName',
    message: 'What is the engineers name?',
   },
   {
    type: 'input',
    name: 'engineerID',
    message: 'what is their ID?',
   },
   {
    type: 'input',
    name: 'engineerEmal',
    message: "What is their Email?",
   },
   {
    type: 'input',
    name: 'engineerGithub',
    message: "What is their Github username?",
   },
  ]
 ).then(engineerAnswer => {
  console.log(engineerAnswers)
  return menu()
 })
}
function questionINT() {
 inquirer.prompt(
  [
   {
    type: 'input',
    name: 'internName',
    message: 'what is the interns name?'
   },
   {
    type: 'input',
    name: 'internID',
    message: 'what is their ID'
   },
   {
    type: 'input',
    name: 'internEmail',
    message: 'what is their email'
   },
   {
    type: 'input',
    name: 'internGitHub',
    message: 'What is the name of the school they are attending'
   },
  ]
 ).then(internAnswers => {
  console.log(internAnswers)
  return menu()
 })
}

function writeToFile(fileName, data) {
 return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
menu()