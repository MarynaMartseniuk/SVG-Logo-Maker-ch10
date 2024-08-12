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
        message: "Enter characters color  of your future LOGO:",
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
        message: "Enter shape color of your future LOGO:",
    }
];

let time = 50;
function writeToFile(fileName, data) {
    setTimeout(() => {
        fs.appendFile(fileName, data, (err) =>
            err ? console.error(err) : console.log('Success! Check logo.svg')
        );
    }, time = time + 50);
};

function init() {
    inquirer
    .prompt(questions)
    .then((res) => {
        console.log(res);
        console.log(res.char);
        console.log(res.charColor);
        console.log(res.shape);
        console.log(res.shapeColor);
        fs.writeFile('logo.svg', `<svg width="500" height="500" viewBox="0 0 200 200">`, (err) =>
            err ? console.error(err) : console.log('Success! File logo.svg has been created. Check it!')
        );
        if (res.shape === 'circle') {
            writeToFile('logo.svg', `<circle cx="80" cy="85" r="50" fill="${res.shapeColor}"/>`);
        };
        if (res.shape === 'triangle') {
            writeToFile('logo.svg', `<polygon points="10, 110 190, 110 60, 10" fill="${res.shapeColor}"/>`);
        };
        if (res.shape === 'square') {
            writeToFile('logo.svg', `<rect x="30" y="35" width="100" height="100" fill="${res.shapeColor}"/>`);
        };
        writeToFile('logo.svg', `<text x="37" y="95" fill="white" font-size="35" fill="${res.charColor}">${res.char}</text>`);
        writeToFile('logo.svg', `</svg>`);
    }
    );
};

init();