'use strict';
//複数の単語に対応させよう
{
  const words = [
    'apple',
    'sky',
    'middle',
    'set',
    'const'
  ];
    //打つべき単語とランダムに表示
  let word = words[Math.floor(Math.random() * words.length)];
  //何番目の文字を打つべきか
  let loc = 0;
  //スコアとミスの取得
  let score = 0;
  let miss = 0;

  const target = document.getElementById('target');
  //scoreやmissを表示するための要素取得
  const scoreLavel = document.getElementById('score');
  const missLavel = document.getElementById('miss');

  target.textContent = word;

  //正解したときに「_」にする関数定義
  function updateTarget() {
    //「_」を格納する変数
    let placeholder = "";
    //locと同じ数の「_」を連結
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    //targetの更新と残りの部分文字列の取得
    target.textContent = placeholder + word.substring(loc);

  }

  //ウィンドウ上で入力した時のイベント
  window.addEventListener('keydown', (e) => {
    //打ち込んだキーの取得と入力した時文字が合っていた時の処理
    if (e.key === word[loc]) {
      console.log('score');
      loc++;
      //次の単語に行く処理
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      //正解したときに「_」にする
      updateTarget();
      score++;
      scoreLavel.textContent = score;
    } else {
      console.log('miss');
      miss++;
      missLavel.textContent = miss;
    }
  })
}
