function setup() {
    createCanvas(600,600)
}
function draw(){
    background(0)
    rectMode(CENTER)
    rect(width/2,height/2,(mouseX-300)*2,(mouseY-300)*2)
}