const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector(".gameOver");
const clouds = document.querySelector(".clouds");

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump');
    },400);
}

const loop = setInterval(() => { 

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0 ){

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${pipePosition}px`;

            mario.src = './img/game-over.png'
            mario.style.width = '80px'
            mario.style.marginLeft = '50px'
            mario.style.marginLeft = "50px";
            gameOver.style.display = "flex";
            clouds.style.animation = "none";
            clouds.style.left = `${cloudPosition}px`;
        
        }
    
    },5 );
document.addEventListener('keydown', jump);