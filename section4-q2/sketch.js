// テキスト「配列を使った描画」練習問題：円グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 円グラフを描くには割合が必要なので合計を計算しておく
  let total = 0;
  for(let i = 0; i < scores.length; i++){ total += scores[i]; }

  // const dx = scores[i] / 100;// BLANK[1]
}
  function drawArcs(c1, c2, r) {
    const cx = width / 2;
    const cy = height / 2;//中心は(cx, cy)
    for (let i = 0; i < 20; i++) {
      let start = TWO_PI / 20 * i;
      let stop = TWO_PI / 20 * (i + 1);
      arc(cx, cy, r, r, start, stop, PIE);
    }
  }
