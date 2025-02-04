function initializeGame() {
    randomizeCorrectHeart();
    hearts.forEach((heart, index) => {
        heart.addEventListener('click', function() {
            if (gameOver) return;

            if (index === correctHeart) {
                message.style.display = 'block';
                this.src = './../assets/images/correct.png'; // Ajuste o caminho conforme necessário
                gameOver = true;
                hearts.forEach(h => h.style.pointerEvents = 'none');
            } else {
                this.style.animation = 'shake 0.5s';
                
                setTimeout(() => {
                    this.style.animation = '';
                    this.style.borderColor = '';
                    if (!gameOver) randomizeCorrectHeart();
                }, 500);
            }
        });
    });
}


let correctHeart = Math.floor(Math.random() * 4);
let gameOver = false;

const hearts = document.querySelectorAll('.heart-option');
const message = document.getElementById('message');

hearts.forEach((heart, index) => {
    heart.addEventListener('click', function() {
        if (gameOver) return; // Se o jogo acabou, não faz nada

        if (index === correctHeart) {
            message.style.display = 'block';
            this.src = './assets/images/correct.png'; // Ajuste o caminho conforme necessário
            gameOver = true; // O jogo acaba
            hearts.forEach(h => h.style.pointerEvents = 'none'); // Desativa todos os corações
        } else {
            this.style.animation = 'shake 0.5s';
            this.src = './assets/images/wrong.png'; // Ajuste o caminho conforme necessário
        
            
            setTimeout(() => {
                this.style.animation = '';
                this.style.borderColor = '';
                if (!gameOver) randomizeCorrectHeart();
            }, 500);
        }
    });
});

function randomizeCorrectHeart() {
    correctHeart = Math.floor(Math.random() * 4);
    hearts.forEach((heart, index) => {
        heart.setAttribute('data-correct', index === correctHeart ? 'true' : 'false');
    });
}

let landingPage = document.getElementById('landing-page');
let game = document.getElementById('game');
let heartButton = document.getElementById('btn1').addEventListener('click', showGame);

function showGame() {
    landingPage.classList.add('hidden');
    landingPage.addEventListener('transitionend', () => {
        game.classList.remove('hidden');
        game.style.opacity = '1';
        game.style.visibility = 'visible';
        initializeGame();
    }, { once: true });
}
