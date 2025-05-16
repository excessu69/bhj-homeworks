const timerElement = document.getElementById('timer');
let time = Number(timerElement.textContent); 

function formatTime(totalSeconds) {
  const h = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const s = String(totalSeconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

timerElement.textContent = formatTime(time); 

const countdown = setInterval(() => {
  time--;

  timerElement.textContent = formatTime(time);

  if (time <= 0) {
    clearInterval(countdown);
    alert('Вы победили в конкурсе!');
  }
}, 1000);
