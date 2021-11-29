// 最終課題を制作しよう
let x, y, vy, img, count, enemies, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10;
let player = [];
let slims = [];
const g = 1;     //重力
const jump = 20; // ジャンプ力
const ground = 20;
const size = 20;
const limit = 30; // 制限時間[秒]
let startTime;
let state;

function preload(){
  img1 = loadImage('character.1.png');
  img2 = loadImage('character.2.png');
  img3 = loadImage('character.3.png');
  img4 = loadImage('character.4.png');
  img5 = loadImage('character.5.png');
  img6 = loadImage('character.6.png');
  img7 = loadImage('slim1.png');
  img8 = loadImage('slim2.png');
  img9 = loadImage('character.7.png');
  img10 = loadImage('cloud.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 20;
  y = height - ground - size / 2;
  vy = 0;
  count = 0;
  enemies = [];
  textAlign(CENTER, CENTER);
  textSize(32);
  state = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする
}

function draw() {
  background(204, 255, 255);
  count++;

  let gy = height - ground;
  noStroke();
  push();
  fill(154, 205, 50);
  rect(0, gy, width, gy);
  fill(139, 69, 19);
  rect(0, gy + 5, width, gy + 5); // 地面
  fill(0, 0);
  rect(x + 6, y - 50, 27, 60);//playerのダミー

  y += vy;
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  image(img10, windowWidth / 15, windowHeight / 10, windowWidth / 5, windowHeight / 5);
  image(img10, windowWidth * 6 / 15, windowHeight / 5, windowWidth / 5, windowHeight / 5);
  image(img10, windowWidth * 2 / 15, windowHeight * 2 / 5, windowWidth / 5, windowHeight / 5);
  image(img10, windowWidth * 6 / 7, windowHeight / 20, windowWidth / 5, windowHeight / 5);
  image(img10, windowWidth * 11 / 15, windowHeight * 4 / 11, windowWidth / 5, windowHeight / 5);

  if(y < height - ground - size / 2){ // 地面より上、つまり空中にいる
    vy += g; // 下方向に重力の影響で加速する
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }

  if(keyIsDown(RIGHT_ARROW)){ x += 4;
    if(count % 6 == 0 || count % 6 == 1){
      image(img3, x, y - 58);
    }
    if(count % 6 == 4 || count % 6 == 5){
      image(img1, x, y - 58);
    }
    else{
      image(img2, x, y - 58);
    }
  }
  if(keyIsDown(LEFT_ARROW)){ x -= 4;
    if(count % 6 == 0 || count % 6 == 1){
      image(img4, x, y - 58);
    }
    if(count % 6 == 4 || count % 6 == 5){
      image(img6, x, y - 58);
    }
    else{
      image(img5, x, y - 58);
    }
  }

  else{
    image(img2, x, y - 58);
  }

  for(let i = 0; i < enemies.length; i++){
    let e = enemies[i];
    if(count % 16 == 0 || count % 16 == 1 || count % 16 == 2 || count % 16 == 3 || count % 16 == 4 || count % 16 == 5 || count % 16 == 6 || count % 16 == 7){
      rect(e.x, e.y, 30, 24)//enemiesのダミー
      image(img7, e.x, e.y);
    }
    else{
      rect(e.x, e.y, 30, 24)
      image(img8, e.x, e.y);
    }
    e.x += e.vx;
    e.y += e.vy;
    if(collisionDetect(x, y, e) && state == 1){
      state = 3;
    }
  }
  if(count % 100 == 0){
    const e1 = { x: width + 10, y: gy - 20, size: 20, vx: random(3) - 4 , vy: 0};
    enemies.push(e1);
  }
  pop();

  if (state == 0) { // ゲーム開始前
    text("Click to start", width / 2, height / 2);
  }
  else if (state == 1) { // ゲーム中
    let ellapsedTime = (millis() - startTime) / 1000;
    if (ellapsedTime > limit) {
      state = 2;
    }
    else {
      let remainingTime = limit - ellapsedTime;
      text(floor(remainingTime), width / 2, height / 2);
    }
  }
  else if (state == 2) { // ゲーム終了後
    text("Clear! \r\n Press 'R' to play again", width / 2, height / 2);
    if(keyIsDown("R".charCodeAt(0))){ state = 0; }//リトライ
  }
  else if (state == 3) { // ゲームオーバー時
    text("Game Over\r\n Press 'R' to continue", width / 2, height / 2);
    if(keyIsDown("R".charCodeAt(0))){ state = 0; }
  }
}

function mouseClicked() {
  if (state == 0) {
    startTime = millis();
    state = 1;
  }
}

function keyPressed(){
  if(key == " " && y >= height - ground - size / 2){ // 地面にいるときだけジャンプできる
    vy = -jump;
  }
}

function collisionDetect(x, y, e){

  const left1 = x + 6;
  const right2 = e.x + 30;
  const top1 = y - 50;
  const bottom2 = e.y + 24;

  const left2 = e.x;
  const right1 = x + 33;
  const top2 = e.y;
  const bottom1 = y + 10

  if(left1 < right2 && top1 < bottom2 && right1 > left2 && bottom1 > top2){
    return true; }
    return false;
  }//当たり判定
