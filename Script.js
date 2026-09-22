
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
});

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
let x = canvas.width / 2;
let y = canvas.height / 2;

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp': y -= 10; break;
        case 'ArrowDown': y += 10; break;
        case 'ArrowLeft': x -= 10; break;
        case 'ArrowRight': x += 10; break;
    }
    draw();
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00F';
    ctx.fillRect(x, y, 50, 50);
}
draw();

