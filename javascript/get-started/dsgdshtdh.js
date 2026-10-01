let y = 100
let speed = 8;
let x = 500
speed2 = 3

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(164, 234, 245);
  fill(91, 115, 92)
    rect (0, 300, 800, 600);

  fill(252, 246, 174)
  stroke (214, 175, 90)
circle(500,y,50);

  y = y + speed;
  if(y > 250){
    speed = speed - 1;
  }
  if (y < -4){
    speed = speed + 3;
    
  }
fill(252, 246, 174)
  stroke (214, 175, 90)
circle(100,y,50);
  
  
  fill(252, 246, 174)
  stroke (214, 175, 90)
circle(100,x,50);


}