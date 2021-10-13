// 練習問題：神戸市のマーク
function setup(){
  createCanvas(500, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(0,100,0);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);// BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);

  noStroke();
  fill(14, 47, 146);
  circle(300,100,150);
  fill(255);
  circle(290,93,140);
  fill(22, 131, 46);
  circle(287,92,130);
  fill(255);
  circle(284,102,118);
  fill(77);
  textSize(32);
  textStyle(BOLD);
  textFont('Garamond');
  text('KOBE',239,90);
  textSize(14);
  text('UNIVERSITY',250,110);

}
