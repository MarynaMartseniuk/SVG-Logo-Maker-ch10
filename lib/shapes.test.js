const { Square, Circle, Triangle } = require('./shapes.js');

describe('Square', () => {

    describe('createSquare', () => {
        it('should returns a <rect> tag with a square data for the SVG file with the given color', () => {
            const shape = new Square ('square', 'red');
            expect(shape.createSquare()).toEqual(`<rect x="40" y="10" width="150" height="150" fill="red"/>`);
          });
    });

});

describe('Circle', () => {
    describe('createCircle', () => {
        it('should returns a <polygon> tag with a triangle data for the SVG file with the given color', () => {
            const shape = new Circle ('circle', 'blue');
            expect(shape.createCircle()).toEqual(`<circle cx="140" cy="100" r="90" fill="blue"/>`);
          });
    });
});

describe('Triangle', () => {
    describe('createTriangle', () => {
        it('should returns a <polygon> tag with a triangle data for the SVG file with the given color', () => {
            const shape = new Triangle('triangle', 'green');
            expect(shape.createTriangle()).toEqual(`<polygon points="10, 150 290, 190 100, 10" fill="green"/>`);
          });
    });
});
