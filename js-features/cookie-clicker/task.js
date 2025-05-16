const counter = document.getElementById('clicker__counter');
const speedDisplay = document.getElementById('clicker__speed');
const cookie = document.getElementById('cookie');

let count = 0;
let lastClickTime = Date.now();

cookie.onclick = function () {
  count++;
  counter.textContent = count;

  if (cookie.width === 200) {
    cookie.width = 170;
  } else {
    cookie.width = 200;
  }

  const currentTime = Date.now();
  const diff = (currentTime - lastClickTime) / 1000;
  const speed = diff > 0 ? (1 / diff).toFixed(2) : '∞';
  speedDisplay.textContent = speed;

  lastClickTime = currentTime;
};
