function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(120);
  line(100, 0, 100, 300);
  line(200, 0, 200, 300);
  
  if (mouseX > 0 && mouseX <= 100) {
    fill(0, 0, 255);
    ellipse(mouseX, mouseY, 40, 40);
    text ('knock knock ')
  }
  
  else if (mouseX > 100 && mouseX <= 200) {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 40, 40);
  }
  
   else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 40, 40);
  }

else if (mouseX > 200 && mouseX <= 300) {
    fill(0, 255, 0);
    ellipse(mouseX, mouseY, 40, 40);
  }
  




}


