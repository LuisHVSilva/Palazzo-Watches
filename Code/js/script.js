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
    r2: 'Rolex Explorer, ref: 16570, 40mm',
    r3: 'Rolex GMT-MASTER I Pepsi, ref: 1675, 40mm',    
    r4: 'Rolex Oyster Perpetual, ref: 114200, 34mm',
    r5: 'Rolex Oyster Perpetual, ref: 6551, 31mm',
    r6: '',

    b1: 'Breitling Chronographe Evolution, ref: A13356, 43mm',
    b2: 'Breitling Navitimer Montbrillant Legende White Dial, ref: A23340, 47mm', //PERGUNTAR
    b3: 'Breitling Breitling Bentley Motors, A25362, 48mm',
    b4: 'Breitling SuperOcean Chronometre automatic, ref: A17360, 42mm',
    b5: 'Breitling Avenger Seawolf, ref: A73390, 45.4mm',
    b6: 'Breitling Colt, ref: A17380, 41mm',
    b7: 'Breitling Chronograph Two Tone Steel Gold Black Automatic Wristwatch, ref: B13050, 40mm',

    bv1: 'Bvlgari Diagono Scuba GMT, ref: SD38S GMT, 38mm',
    bv2: 'Bvlgari Titanium, ref: TI38TA, 38mm',
    bv3: 'Bvlgari Aluminium, ref: AL38TA, 38mm',
    bv4: '',    

    o1: 'Patek Phillippe Ellipse, ref: 3545, 32 x 27 mm',
    o2: 'Chopard Mille Miglia Chronograph, ref: 8331, 39mm',
    o3: 'Tag Heuer Formula 1, ref: caz101e, 43mm',

    // FALTO OMEGA
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