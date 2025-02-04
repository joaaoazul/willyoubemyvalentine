document.querySelectorAll('.heart-option').forEach(heart => {
    heart.addEventListener('click', function() {
        if (this.getAttribute('data-correct') === 'true') {
            document.getElementById('message').style.display = 'block';
            this.style.border = '3px solid green';
        } else {
            // Adicionar feedback de erro
            this.style.animation = 'shake 0.5s';
            this.style.borderColor = 'red';
            
            // Remover a animação após terminar
            setTimeout(() => {
                this.style.animation = '';
                this.style.borderColor = '';
            }, 500);
        }
    });
});

let correctHeart = Math.floor(Math.random() * 3);
let gameOver = false;

const hearts = document.querySelectorAll('.heart-option');
const message = document.getElementById('message');

hearts.forEach((heart, index) => {
    heart.addEventListener('click', function() {
        if (gameOver) return; // Se o jogo acabou, não faz nada

        if (index === correctHeart) {
            message.style.display = 'block';
            this.src = './../assets';
            this.style.border = '3px solid green';
            gameOver = true; // O jogo acaba
            hearts.forEach(h => h.style.pointerEvents = 'none'); // Desativa todos os corações
        } else {
            this.style.animation = 'shake 0.5s';
            this.style.borderColor = 'red';
            
            setTimeout(() => {
                this.style.animation = '';
                this.style.borderColor = '';
                if (!gameOver) randomizeCorrectHeart();
            }, 500);
        }
    });
});

function randomizeCorrectHeart() {
    correctHeart = Math.floor(Math.random() * 3);
    hearts.forEach((heart, index) => {
        heart.setAttribute('data-correct', index === correctHeart ? 'true' : 'false');
    });
}

let landingPage = document.getElementById('landing-page');
let game = document.getElementById('game');
let heartButton = document.getElementById('btn1').addEventListener('click', showGame);

function showGame() {
    if (!landingPage.classList.contains('hidden')) {
        landingPage.classList.add('hidden');
        game.classList.remove('hidden');
    }

    setTimeout(() => {
        game.style.display = "block";
      }, 300); // Duração igual à transição (0.3s)

}
