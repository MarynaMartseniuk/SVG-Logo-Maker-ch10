// packages needed for this application
// add 'fs' to be able to work with files (to create our professional readme file).
const fs = require('fs');
// add 'inquire' library to make this app user -friendly and easier coding
const inquirer = require('inquirer');
// add 'shapes.js' file to use this models
const { Square, Circle, Triangle } = require('./lib/shapes.js');

//sourse: my code and UofU starter code from the challenge 09 (Professional-README-Generator-ch09)
const questions = [
    {
        type: 'input',
        name: 'char',
        message: "Enter characters of your future LOGO (up to 3 characters):",
        validate(answer) {
            if (answer.length > 3) {
              return 'You can choose no more then 3 characters. Please, type your characters again.';
            }
             return true;
          },
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
            err ? console.error(err) : console.log('Generated logo.svg')
        );
    }, time = time + 50);
};

function init() {
    inquirer
    .prompt(questions)
    .then((res) => {
        // console.log(res);
        // console.log(res.char);
        // console.log(res.charColor);
        // console.log(res.shape);
        // console.log(res.shapeColor);

        //write the <svg> open tag to logo.svg
        
        fs.writeFile('logo.svg', `<svg width="500" height="500" viewBox="0 0 200 200">`, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')
        );

        // write a requested by user shape data to logo.svg
        if (res.shape === 'square') {
            const shape = new Square(res.shape, res.shapeColor);
            // console.log(`created: ${shape.createSquare()}`);
            writeToFile('logo.svg', `${shape.createSquare()}`);
        };

        if (res.shape === 'circle') {
            const shape = new Circle(res.shape, res.shapeColor);
            // console.log(`created: ${shape.createCircle()}`);
            writeToFile('logo.svg', `${shape.createCircle()}`);
        };

        if (res.shape === 'triangle') {
            const shape = new Triangle(res.shape, res.shapeColor);
            // console.log(`created: ${shape.createTriangle()}`);
            writeToFile('logo.svg', `${shape.createTriangle()}`);
        };
        
        // write a requested by user character data  to logo.svg
        writeToFile('logo.svg', `<text x="37" y="95" font-size="35" fill="${res.charColor}">${res.char}</text>`);

        // write the <svg> close tag to logo.svg
        writeToFile('logo.svg', `</svg>`);
    }
    );
};

init();