// テキスト「アニメーションの基本」
let x, y, vy, img, count;
const g = 1;     //
const jump = 20; // ジャンプ力
const ground = 20;
const size = 20;

function preload(){
  img1 = loadImage('character.1.png');
  img2 = loadImage('character.2.png');
  img3 = loadImage('character.3.png');
  img4 = loadImage('character.4.png');
  img5 = loadImage('character.5.png');
  img6 = loadImage('character.6.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 20;
  y = height - ground - size / 2;
  vy = 0;
  count = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}

function draw() {
  background(204, 255, 255);
  count++

  let gy = height - ground;
  line(0, gy, width, gy); // 地面の線

  y += vy;
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

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

}

function keyPressed(){
  if(key == " " && y >= height - ground - size / 2){ // 地面にいるときだけジャンプできる
    vy = -jump;
  }
}
