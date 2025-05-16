let deadCount = 0;
let lostCount = 0;
let gameOver = false;
let currentTimerId = null;
let lastHoleIndex = null;

const deadElem = document.getElementById('dead');
const lostElem = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function startGame() {
    deadCount = 0;
    lostCount = 0;
    gameOver = false;
    lastHoleIndex = null;
    deadElem.textContent = deadCount;
    lostElem.textContent = lostCount;

    showRandomMole();
}

function showRandomMole() {
    if (gameOver) return;

    document.querySelectorAll('.hole').forEach(hole => hole.classList.remove('hole_has-mole'));

    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * 9) + 1;
    } while (newIndex === lastHoleIndex);

    lastHoleIndex = newIndex;
    const hole = getHole(newIndex);
    hole.classList.add('hole_has-mole');

    currentTimerId = setTimeout(showRandomMole, 1000);
}

document.querySelectorAll('.hole').forEach(hole => {
    hole.addEventListener('click', (event) => {
        if (gameOver) return;
        event.stopPropagation(); 

        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            deadElem.textContent = deadCount;
            hole.classList.remove('hole_has-mole');

            if (deadCount >= 10) {
                gameOver = true;
                clearTimeout(currentTimerId);
                alert('Вы победили!');
                setTimeout(startGame, 1000);
            }
        } else {
            lostCount++;
            lostElem.textContent = lostCount;

            if (lostCount >= 5) {
                gameOver = true;
                clearTimeout(currentTimerId);
                alert('Вы проиграли!');
                setTimeout(startGame, 1000);
            }
        }
    });
});

document.querySelector('.hole-game').addEventListener('click', () => {
    if (gameOver) return;

    lostCount++;
    lostElem.textContent = lostCount;

    if (lostCount >= 5) {
        gameOver = true;
        clearTimeout(currentTimerId);
        alert('Вы проиграли!');
        setTimeout(startGame, 1000);
    }
});

window.onload = startGame;