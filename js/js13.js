'use strict';
//イベント発生時の誤動作を防止しよう
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
  const timeLimit = 3 * 1000;
  let startTime;
  //冒頭でゲームが始まっているかどうかを管理する変数定義
  let isPlaying = false;

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

  function updateTimer() {
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 10);

    if (timeLeft < 0) {
      //isPlayingがfalseになるタイミング
      isPlaying = false;
      clearTimeout(timeoutId);
      timerLabel.textContent = '0.00';
      setTimeout(() => {
        alert('Game Over');
      }, 100);
    }
  }

  window.addEventListener('click', () => {
    //ゲームがすでに始まっていたら、以降の処理をさせない
    if (isPlaying === true) {
      return;
    }
    isPlaying = true;
    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  });

  window.addEventListener('keydown', e => {
    //ゲームが始まっていなかったら以降の処理をしない
    if (isPlaying !== true) {
      return;
    }
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
