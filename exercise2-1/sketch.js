let x = 0;
let y = 0
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    circle(x,y, height / 12);
    x = x +2
    y = y+2;
}