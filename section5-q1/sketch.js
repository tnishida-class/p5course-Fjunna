// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  noStroke();
  textSize(20);
  balloon("I love ''The prince of tennis''.");
}

function balloon(t){
  let w = textWidth(t);//吹き出しの幅
  let h = textAscent() + textDescent();//吹き出しの高さ
  let p = 2;
  fill(220, 255, 100);
  ellipse(w, h + 1, h * 4/5);
  fill(255);
  ellipse(w + 6, h + 1, h * 4/5 - 3);
  fill(220, 255, 100);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(255, 0, 0);
  text(t, p, h + p);
}
