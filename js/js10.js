'use strict';
//タイマー処理をする
{
  const words = [
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  let loc = 0;
  let score = 0;
  let miss = 0;
  //制限時間を管理する変数定義
  const timeLimit = 3 * 1000;
  //ゲーム開始時刻を保持できる様に変数定義
  let startTime;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');


  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  }

  //残り時間を表示させる関数定義
  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);
  }

  window.addEventListener('click', () => {
    target.textContent = word;
    startTime = Date.now();
    //残り時間を表示させる
    updateTimer();
  });

  window.addEventListener('keydown', e => {
    if (e.key === word[loc]) {
      loc++;
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      updateTarget();
      score++;
      scoreLabel.textContent = score;
    } else {
      miss++;
      missLabel.textContent = miss;
    }
  });
}
