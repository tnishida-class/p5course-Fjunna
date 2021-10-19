// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    if(i < 5) {
      stroke(255,0,0);//red
    }
    else {
      stroke(0,0,255)//blue
    }// BLANK[1]
    ellipse(50,50,100 - i * 10);//色を指定してから図形
  }
}
