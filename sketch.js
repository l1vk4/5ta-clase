var x = 0;
var y = 0;
var canvas; 
var a = 100;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  noStroke();
  frameRate(12);
 
}

function draw() {
  background (map(mouseX, 0, windowWidth, 0, 360),map(mouseY, 0, windowHeight, 0, 100),100)
  colorMode(HSB, 360, 100, 100);
  x = lerp(x, mouseX, 1.0);
  y = lerp(y, mouseY, 1.0);
  fill("white");

  if(a === 300){
    a = a - 1;
  } else {
    a = a + 1;
  }

  textSize(random(100,200));
  text("⭐️", x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
