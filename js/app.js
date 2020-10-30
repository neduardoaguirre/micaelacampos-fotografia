const menuMovil = document.querySelector('.menu-movil');
const menu = document.querySelector('.menu');
const btnUp = document.querySelector('.ir-arriba');
const portfolio = document.querySelector('#portfolio');
let desplegado = true;
let cerrado = true;

window.addEventListener('load', () => {
    eventosPagina();
});

window.onscroll = function () {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 0) {
        btnUp.style.transform = "scale(1)";
    } else if (scroll < 1) {
        btnUp.style.transform = "scale(0)";
    }
}

function eventosPagina() {
    menuMovil.addEventListener('click', desplegarMenu);
    portfolio.addEventListener('click', desplegarPortfolio);
    btnUp.addEventListener('click', irArriba);
}

function irArriba() {
    let posicion = document.documentElement.scrollTop;

    if (posicion > 0) {
        window.requestAnimationFrame(irArriba);
        window.scrollTo(0, posicion - (posicion / 10));
    }
}

function desplegarPortfolio(e) {
    const itemsPortfolio = document.querySelector('.items-port');
    const flecha = document.querySelector('#flecha');
    flecha.classList.add('rotar-ang');

    if (cerrado) {
        itemsPortfolio.style.display = "block";
        cerrado = false;
    } else {
        cerrado = true;
        itemsPortfolio.style.display = "none";
        flecha.classList.remove('rotar-ang');
    }
}

function desplegarMenu() {
    const icono = document.querySelector('#icono-menu');
    icono.classList.remove('fa-bars');
    icono.classList.add('fa-times', 'rotate');

    if (desplegado) {
        menu.style.left = '0';
        desplegado = false;
    } else {
        desplegado = true;
        menu.style.left = '-100%';
        icono.classList.remove('fa-times', 'rotate');
        icono.classList.add('fa-bars')
    }
}

$('[data-fancybox="images"]').fancybox({
    buttons: [
        'slideShow',
        'share',
        'zoom',
        'fullScreen',
        'close'
    ],
    thumbs: {
        autoStart: false
    }
});