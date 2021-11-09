//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count = 0;

}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
    count = count + 1
  }

  if(count % 30 == 0){
    const b1 = { x: 0, y: 0, size: 20, vx: random(5), vy: random(5) };
    balls.push(b1);
  }

}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  const s = random(10, 50);
  if(mag(dx, dy) > 5){
    const b2 = { x: mouseX, y: mouseY, size: s, vx: dx, vy: dy };
    balls.push(b2);
  }
  if(b.x > width | b.y > height){balls.pop(b)}
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
