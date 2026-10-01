let y = 100
let speed = 8;

function setup() {

  createCanvas(600, 400);
}
function draw() {

  background(135, 206, 235);

  fill(252, 246, 174)
  stroke (214, 175, 90)
circle(500,y,50);
 

  fill("green");
  rect(0, 200, 600, 200);
 
//emojis
  textSize(75)
  text("🌸", 100, 250) 
  text("🐞", mouseX, mouseY)
  
  y = y + speed;
  if(y > 250){
    speed = speed - 1;
  }
  if (y < -4){
    speed = speed + 3;
    
  }
}