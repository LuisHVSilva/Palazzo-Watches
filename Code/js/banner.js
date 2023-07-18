const banner1 = {
    img: 'img/banner/banner1.png',
    imgCelular: 'img/banner/banner1-celular.png',
    title: '',
    text: '',       
    button: '',    
}

const banner2 = {
    img: 'img/banner/banner2.png',
    imgCelular: 'img/banner/banner2-celular.png',
    title: 'Esteja no controle do seu tempo com estilo',    
    text: 'CONHEÇA NOSSO CATÁLOGO',
    link: 'catalogo.html',
    button: 'RELÓGIOS',        
}

const banner3 = {
    img: 'img/banner/banner3.png',
    imgCelular: 'img/banner/banner3-celular.png',
    title: 'Descubra a elegância eterna',    
    text: 'UMA HISTÓRIA EM SEU PULSO',
    link: '#',
    button: 'COMPRAR',        
}

const banners = [banner1, banner2, banner3]

var iterator = 0

function bannerChagePlus() {
    if (iterator >= 2) {
        iterator = -1
    }

    iterator++
    banner(banners[iterator])
}

function bannerChageLess() {

    if (iterator <= 0) {
        iterator = 3
    }

    iterator--
    banner(banners[iterator])
}

function transition(div, obj) {
    div.classList.add('oculto');
    setTimeout(function () {
        div.textContent = obj;
        div.classList.remove('oculto');
    }, 500);
}

function banner(obj) {
    const banner = document.getElementsByTagName('header')[0];
    banner.classList.add("fade-out");

    setTimeout(function () {
        banner.style.backgroundImage = "url(" + obj.img + ")"

        if (window.innerWidth < 800) {
            banner.style.backgroundImage = "url(" + obj.imgCelular + ")"
        }
        
        banner.classList.remove("fade-out");
    }, 300);

    const bannerTitle = document.getElementById('bannerTitle');
    bannerTitle.classList.add("fade-out");
    
    setTimeout(function () {
        bannerTitle.textContent = obj.title;
        bannerTitle.classList.remove("fade-out");
    }, 300);

    const bannerText = document.getElementById('bannerText');
    bannerText.classList.add("fade-out");
    
    setTimeout(function () {
        bannerText.textContent = obj.text;
        bannerText.classList.remove("fade-out");
    }, 300);

    const bannerButton = document.getElementById('bannerButton')
    bannerButton.classList.add("fade-out");
    
    setTimeout(function () {
        bannerButton.textContent = obj.button;
        bannerButton.classList.remove("fade-out");
    }, 300);

    
    const bannerLink = document.getElementById('bannerLink')
    bannerLink.href = obj.link;    
};