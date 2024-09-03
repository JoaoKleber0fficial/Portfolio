document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

let showDetail = false;
let closing = false;

document.addEventListener("DOMContentLoaded", () => {
    const avancaButton = document.getElementById('avanca');
    const voltarButton = document.getElementById('voltar');
    const carousel = document.querySelector('.carousel2'); 
    const listHTML = document.querySelector('.carousel2 .list'); 
    const backButton = document.getElementById('back');

    const showSlider = (type) => {
        if (!avancaButton || !voltarButton || !carousel || !listHTML) return;

        avancaButton.style.pointerEvents = 'none';
        voltarButton.style.pointerEvents = 'none';

        carousel.classList.remove('avanca', 'voltar');
        let items = document.querySelectorAll('.carousel2 .list .item');
        if (type === 'avanca') {
            listHTML.appendChild(items[0]);
            carousel.classList.add('avanca');
        } else {
            listHTML.prepend(items[items.length - 1]);
            carousel.classList.add('voltar');
        }
        setTimeout(() => {
            avancaButton.style.pointerEvents = 'auto';
            voltarButton.style.pointerEvents = 'auto';
        }, 500);
    }

    if (avancaButton && voltarButton) {
        avancaButton.onclick = () => showSlider('avanca');
        voltarButton.onclick = () => showSlider('voltar');
    }

    if (backButton) {
        backButton.onclick = () => {
            carousel.classList.remove('showDetail');
        }
    }
    
});


