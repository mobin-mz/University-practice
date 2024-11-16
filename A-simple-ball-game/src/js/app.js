// selector
const startButton = document.getElementById('startButton');
const ball = document.getElementById('ball');

// this function just for eventlistener
function eventlistener() {
    startButton.addEventListener('click', startGame);
}
eventlistener()

// this function for start the game 
function startGame() {
    ball.style.animation = 'none';
    ball.offsetHeight;
    ball.style.opacity = '1';
    ball.style.animation = 'moveBall 5s linear 1, bounce 1s ease-in-out infinite';
}