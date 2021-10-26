// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  if(keyIsDown(" ".charCodeAt(0))){
    count = (count + 2) % cycle;
  }
  else{
    count = (count + 1) % cycle;
  }

  if(count < 45){
    ellipse(width / 2, height / 2, count * 1/2);
  }
  else if(count >= 45 && count < 50){
    ellipse(width / 2, height / 2, count * 3/2);
  }
  else if(count >= 50 && count < 60){
    ellipse(width / 2, height / 2, 100 - count * 1/2);
  }
  else{
    ellipse(width / 2, height / 2, 100 - count);
  }

  fill(255, 153, 153);//ff9999
}
