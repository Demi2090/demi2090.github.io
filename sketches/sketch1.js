function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //drawhead
  fill('wheat');
   ellipse(200,200,300,300)
  
  //add eyes
  strokeWeight(5);
  fill(0,0,055)
  circle(130,130,40);
  circle(241,132,40);
  
  //mouth
  StrokeWeight(3)
  arc(200,230,80,50,0,PI);
  
  
  
  
  
  

  
  
 
//Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
}
