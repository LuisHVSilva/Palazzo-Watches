/* ***** MENU RESPONSIVO ***** */
if (document.querySelector(".navbar_toggle")) {
    const navToggle = document.querySelector(".navbar_toggle");
    const links = document.querySelector(".main_nav");

    navToggle.addEventListener('click', function () {
        links.classList.toggle("main_nav");
    });
}

/* ***** TROCAR IMAGEM COM MOUSE PASSANDO EM CIMA ***** */
social = {
    insta: {
        oldImage: "img/icons/Instagram.svg",
        newImage: "img/icons/instagram-hover.svg",
        div: document.getElementById("instagram")
    },

    whatss: {
        oldImage: "img/icons/Whatss.svg",
        newImage: "img/icons/whatss-hover.svg",
        div: document.getElementById("whatssapp")
    }
}

// Troca para a segunda imagem ao passar o mouse */
function newImage(div) {
    var location = social[div].div
    location.src = social[div].newImage
}

// Restaura a primeira imagem ao retirar o mouse 
function oldImage(div) {
    var location = social[div].div
    location.src = social[div].oldImage
}


/* ***** ZOOM IMAGE ***** */

function zoomImage(event) {
    const img = event.target;
    const container = img.parentNode;

    container.classList.add("zoomed");

    // Obter posição do mouse relativa à imagem
    const rect = img.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Ajustar a posição da imagem para centralizar o ponto de zoom
    img.style.transformOrigin = `${x}px ${y}px`;
}

function resetZoom() {
    const containers = document.getElementsByClassName("image-zoom-container");

    for (let i = 0; i < containers.length; i++) {
        containers[i].classList.remove("zoomed");
    }
}


/* ***** URL DAS IMAGENS ***** */

watchLink = {
    b1: 'Breitiling 1',
    b2: 'Breitiling 2',
    b3: 'Breitiling 3',
    b4: 'Breitiling 4',
    b5: 'Breitiling 5',
    b6: 'Breitiling 6',
    b7: 'Breitiling 7',

    bv1: 'Bvltari 1',
    bv2: 'Bvltari 2',
    bv3: 'Bvltari 3',
    bv4: 'Bvltari 4',

    r2: 'Rolex 1',
    r3: 'Rolex 2',
    r4: 'Rolex 3',
    r5: 'Rolex 4',
    r6: 'Rolex 5',

    o1: 'Patek Philippe',
    o2: 'Chopard',
    o3: 'Tag Heuer',
}

function redirecionarLink(watch) {
    const basicText = "https://api.whatsapp.com/send?phone=+5543991771914&text=Olá, Palazzo. Me interessei pelo "
    var url = basicText + watchLink[watch]
    window.open(url, "_blank")
}

/* ***** CARROSEL ***** */
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3, // Número de itens visíveis no carousel
        loop: false, // Repetir o carousel em loop
        margin: 200, // Margem entre os itens
        nav: false, // Exibir botões de navegação                  
        responsive: {
            0: {
                items: 2 // Número de itens visíveis no carousel em telas menores
            },
            1000: {
                items: 4 // Número de itens visíveis no carousel em telas maiores
            }
        },
        onInitialized: function (event) {
            $(event.target).find(".owl-stage").css("display", "flex");
            $(event.target).find(".owl-stage").css("align-items", "center");
        }
    });
});