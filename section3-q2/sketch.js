const g = 1;     //
const jump = 20; // ジャンプ力
const ground = 20;
const size = 20;

let x, y, vy;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 20;
  y = height - ground - size / 2;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}

function draw() {
  background(204, 255, 255);

  let gy = height - ground;
  line(0, gy, width, gy); // 地面の線

  ellipse(x, y, size, size);

  y += vy;


  if(y < height - ground - size / 2){ // 地面より上、つまり空中にいる
    vy += g; // 下方向に重力の影響で加速する
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
  if(keyIsDown(LEFT_ARROW)){ x -= 3; }
  if(keyIsDown(RIGHT_ARROW)){ x += 3; }
}

function keyPressed(){
  if(key == " " && y >= height - ground - size / 2){ // 地面にいるときだけジャンプできる
    vy = -jump;
  }
}
