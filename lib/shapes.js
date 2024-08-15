// source: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes
// source: https://www.w3schools.com/graphics/svg_inhtml.asp

// The <rect> element draws a rectangle on the screen. 
// squer: width=height

//<rect x="30" y="35" width="100" height="100" fill="${data.color}"/>
// The <circle> element draws a circle on the screen.
//<circle cx="80" cy="85" r="50" fill="${data.color}"/>

// A <polygon> is composed of straight line segments connecting a list of points.
// triangle: polygon with three points
//<polygon points="10, 110 190, 110 60, 10" fill="${data.color}"/>

// source: module 10, activity 05 UofU bootcamp
class ShapeColor {
    constructor(shapeColor) {
        this.color = shapeColor; 
    }
};

class Square extends ShapeColor {
    constructor(squareSh, shapeColor) {
        super (shapeColor);
        this.shape = squareSh;
    };
    createSquare(){
        return `<rect x="30" y="35" width="100" height="100" fill="${this.color}"/>`;
    };
};

class Circle extends ShapeColor {
    constructor(circleSh, shapeColor) {
        super (shapeColor);
        console.log(shapeColor);
        this.shape = circleSh;
    };
    createCircle(){
        return `<circle cx="80" cy="85" r="50" fill="${this.color}"/>`;
    };
};

class Triangle extends ShapeColor {
    constructor(triangleSh, shapeColor) {
        super (shapeColor);
        this.shape = triangleSh;
    };
    createTriangle(){
        return `<polygon points="10, 110 190, 110 60, 10" fill="${this.color}"/>`;
    };
};

module.exports = { Square, Circle, Triangle };