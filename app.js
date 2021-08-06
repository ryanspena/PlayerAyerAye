const fs = require('fs')
const path = require('path')
const pageGenerator = require('./src/pageGenerator')
const inquirer = require('inquirer')
const Choices = require('inquirer/lib/objects/choices')

const questionMGR = () => {
 return inquirer.prompt([
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

const questionENG = () => {
 return inquirer.prompt(
  [
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
const questionINT = () => {
 return inquirer.prompt(
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
function startup() {
 questionsMGR()
  .then(menu)
 .then(responses => { console.log(responses) })
}
startup()