// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  // noStroke();
  background(255);
  noStroke()

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if(i % 2 == 0){
      fill(blue)
    }
    else{
      fill(255)
    }
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(size * 2/5, 0, size / 5, size)
  rect(0, size * 2/5, size, size / 5)
}
