function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  push();
  translate(mouseX - 400, mouseY - 400);
  drawCharacterOriginal();
  pop();
}


function drawCharacterOriginal() {
  fill(0);
  push();
  noStroke();
  fill(0);
  ellipse(300, 300, 12, 12); 
  ellipse(470, 300, 12, 12); 
  pop();

  // face
  { fill(20,20,200);
    triangle(300, 300, 370, 390, 360, 400);
    triangle(430, 400, 440, 400, 470, 300);
    ellipse(400, 400, 100, 100);
  }

  // legs
  { fill(20,20,200);
    rect(409, 540, 40, 150, 50);
    rect(350, 540, 40, 150, 50);
  }

  // body
  { fill(20,20,200);
    rect(388, 440, 25, 70, 100);
    rect(350, 452, 100, 150, 100);
  }

  push();
  noStroke();
  fill(30, 120, 255);
  rect(380, 470, 40, 55, 10);
  pop();

  // eyes
  push();
  noStroke();
  fill(255);
  ellipse(385, 395, 18, 22); 
  ellipse(415, 395, 18, 22); 
  fill(0);
  ellipse(385, 398, 8, 10); 
  ellipse(415, 398, 8, 10); 
  pop();

  // arms
  push();
  strokeWeight(30);
  stroke(20,20,200);
  strokeCap(ROUND); 
  line(360, 490, 290, 540);  
  line(520, 560, 440, 490); 
  pop();

  // smile
  push();
  noFill();
  stroke(0);
  strokeWeight(4);
  arc(400, 415, 26, 16, 0, PI);
  pop();
}
