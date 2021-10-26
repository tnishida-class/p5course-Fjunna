// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if([i + j] % 2 == 1 && j < 3){
        fill(128);//gray
        rect(size * i, size * j, size, size);
        fill(255,0, 0);//red
        ellipse(size * i + 12, size * j + 12, size * 6/7);
      }
      else if([i + j] % 2 == 1 && j > 2 && j < 5){
        fill(128);//gray
        rect(size * i, size * j, size, size);
      }
      else if([i + j] % 2 == 1 && j > 4){
        fill(128);//gray
        rect(size * i, size * j, size, size);
        fill(0);//black
        ellipse(size * i + size / 2, size * j + size / 2, size * 6/7);
      }
      else{
        fill(255);
        rect(size * i, size * j, size, size);
      }// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)


    }
  }
}
