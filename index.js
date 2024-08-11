// packages needed for this application
// add 'fs' to be able to work with files (to create our professional readme file).
const fs = require('fs');
// add 'inquire' library to make this app user -friendly and easier coding
const inquirer = require('inquirer');
// add 'shapes.js' file to use this models
const shape = require('./lib/shapes.js');

//sourse: my code and UofU starter code from the challenge 09 (Professional-README-Generator-ch09)
const questions = [
    {
        type: 'input',
        name: 'char',
        message: "Enter characters of your future LOGO (up to 3 characters):",
    },
    {
        type: 'input',
        name: 'charColor',
        message: "Enter color for characters of your future LOGO:",
    },
    {
        type: 'list',
        message: 'Select a Shape Type:',
        name: 'shape',
        choices: [ "circle", "triangle", "square"],
        validate(answer) {
          if (answer.length === 0) {
            return 'You must choose a shape';
          }
           return true;
        },
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Enter color for shape of your future LOGO:",
    }
];

// let time = 50;
// function writeToFile(fileName, data) {
//     setTimeout(() => {
//         fs.appendFile(fileName, data, (err) =>
//             err ? console.error(err) : console.log('Success! Check readme.md')
//         );
//     }, time = time + 50);
// };

function init() {
    // Description, Instalation, Usage, Credits sections:
    inquirer
    .prompt(questions)
    .then((res) => {
        console.log(res);
        console.log(res.char);
        console.log(res.charColor);
        console.log(res.shape);
        console.log(res.shapeColor);
        // fs.writeFile('logo.svg', `${res.char}`, (err) =>
        //     err ? console.error(err) : console.log('Success! Check readme.md')
        // );
        // writeToFile('logo.svg', `${res.github}`);
        // writeToFile('logo.svg', `${res.email}`);
    }
    );
};

init();