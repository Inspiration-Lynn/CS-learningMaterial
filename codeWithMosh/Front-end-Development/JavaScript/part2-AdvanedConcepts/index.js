// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

// const circle = createCircle(1);


// Constructor function
function Circle(radius) {
    this.radiu = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();