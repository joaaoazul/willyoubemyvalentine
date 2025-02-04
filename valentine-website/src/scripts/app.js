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





