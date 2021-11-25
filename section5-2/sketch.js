// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(300, 100);
  background(200);
  fill(0);
  crossmark(10, 10, 90, 90);
  ngmark(150, 50, 80);
  let n = random(3, 50);
  let N = round(n);//nを整数にするプログラム
  regularPolygon(N, 250, 50, 40);
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r){
  push();//今までの描画スタイルを覚えておく
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();//覚えておいたスタイルに戻す
}

function regularPolygon(N, cx, cy, r){
  beginShape();//点つなぎを始める
  for(var i = 0; i < N; i++){
    let theta = TWO_PI * i * 1 / N - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);//次に繋ぐ点を1つ増やす
  }
  endShape(CLOSE);//点つなぎを終える
}
