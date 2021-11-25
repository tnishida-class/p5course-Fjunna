function setup() {
  createCanvas(128,128);
}

function draw() {
  background(256);
  strokeWeight(4);
  noStroke();
  fill(170, 44, 191);
  triangle(12,120,116,120,116,10);
  strokeWeight(2);
  stroke(251, 192, 249);
  fill(256);
  triangle(2,106,104,106,104,2);
  strokeWeight(4);
  fill(251, 192, 249);
  noStroke();
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
