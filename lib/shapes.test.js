const { Square, Circle, Triangle } = require('./shapes.js');

describe('Square', () => {

    describe('createSquare', () => {
        it('should returns a <rect> tag with a square data for the SVG file with the given color', () => {
            const shape = new Square ('square', 'red');
            expect(shape.createSquare()).toEqual(`<rect x="30" y="35" width="100" height="100" fill="red"/>`);
          });
    });

});

describe('Circle', () => {
    describe('createCircle', () => {
        it('should returns a <polygon> tag with a triangle data for the SVG file with the given color', () => {
            const shape = new Circle ('circle', 'blue');
            expect(shape.createCircle()).toEqual(`<circle cx="80" cy="85" r="50" fill="blue"/>`);
          });
    });
});

describe('Triangle', () => {
    describe('createTriangle', () => {
        it('should returns a <polygon> tag with a triangle data for the SVG file with the given color', () => {
            const shape = new Triangle('triangle', 'green');
            expect(shape.createTriangle()).toEqual(`<polygon points="10, 110 190, 110 60, 10" fill="green"/>`);
          });
    });
});
