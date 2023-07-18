const watch1 = {
    text: 'A brisa suave acariciava os campos verdejantes enquanto o sol se punha no horizonte. O crepúsculo pintava o céu com tons quentes de laranja e rosa, criando uma paisagem deslumbrante. As árvores balançavam ao ritmo da brisa, sussurrando melodias suaves. No ar, um aroma doce de flores selvagens enchia os sentidos',
    img: 'img/banner/watch1.png',
    brand: 'VICTORINOX SWISS ARMY MAVERICK',
}

const watch2 = {
    text: 'Os pássaros cantavam em harmonia, celebrando a chegada da noite. As estrelas começavam a pontilhar o céu escuro, como pequenos diamantes brilhantes. Uma sensação de serenidade envolvia tudo ao redor, como se o mundo estivesse em perfeita harmonia.',
    img: 'img/banner/watch2.png',
    brand: 'TAG HEUER FORMULA 1 GRAND DATE BLACK DIAL',
}

const watch3 = {
    text: 'Em meio a essa cena tranquila, uma figura solitária caminhava pela estrada de terra. Seus passos eram calmos e determinados, enquanto sua mente vagava por pensamentos profundos. As memórias do passado misturavam-se com sonhos do futuro, criando uma tapeçaria de esperança e nostalgia.',
    img: 'img/banner/watch3.png',
    brand: 'VICTORINOX SWISS ARMY INFANTRY',
    model: '',
}

const watch4 = {
    text: 'Cada passo era uma jornada, cada respiração uma conexão com a vida. A figura solitária sentia uma profunda gratidão pelo momento presente e uma fome insaciável pela aventura que o futuro reservava.',
    img: 'img/banner/watch4.png',
    brand: 'TISSOT PRC 200 BLUE DIAL CHRONOGRAPH',
}

const watch5 = {
    text: 'Enquanto a noite avançava e o mundo descansava, a figura solitária continuava sua caminhada, mergulhando no desconhecido com coragem e determinação. Pois, no coração daquela pessoa, havia uma centelha de curiosidade e um desejo incessante de descobrir o mundo ao seu redor.',
    img: 'img/banner/watch5.png',
    brand: 'MIDO BARONCELLI AUTOMÁTICO',
}

const watches = [watch1, watch2, watch3, watch4, watch5]

var iterator = 0

function bannerChagePlus() {
    if (iterator >= 4) {
        iterator = -1
    }

    iterator++
    banner(watches[iterator])
}

function bannerChageLess() {

    if (iterator <= 0) {
        iterator = 5
    }

    iterator--
    banner(watches[iterator])
}

function transition(div, obj) {
    div.classList.add('oculto');
    setTimeout(function () {
        div.textContent = obj;
        div.classList.remove('oculto');
    }, 500);
}

function banner(obj) {
    const bannerImg = document.getElementById('bannerImg');    
    bannerImg.classList.add('oculto');
    setTimeout(function () {
        bannerImg.src = obj.img;
        bannerImg.classList.remove('oculto');
    }, 500);    
    bannerImg.alt = obj.brand + obj.model;

    /*
    const bannerText = document.getElementById('bannerText');
    bannerText.classList.add('oculto');
    setTimeout(function () {
        bannerText.textContent = obj.text;
        bannerText.classList.remove('oculto');
    }, 500);

    const bannerBrand = document.getElementById('bannerBrand');
    bannerBrand.classList.add('oculto');
    setTimeout(function () {
        bannerBrand.textContent = obj.brand;
        bannerBrand.classList.remove('oculto');
    }, 500);    

    const bannerModel = document.getElementById('bannerModel');
    bannerModel.classList.add('oculto');
    setTimeout(function () {
        bannerModel.textContent = obj.model;
        bannerModel.classList.remove('oculto');
    }, 500);    
    */
};

function bannerOnLoad(obj) {
    const bannerImg = document.getElementById('bannerImg');
    bannerImg.src = obj.img;
    bannerImg.alt = obj.brand + obj.model;

    /*
    const bannerText = document.getElementById('bannerText');
    bannerText.textContent = obj.text;

    const bannerBrand = document.getElementById('bannerBrand');
    bannerBrand.textContent = obj.brand;

    const bannerModel = document.getElementById('bannerModel');
    bannerModel.textContent = obj.model;
    */
}

window.onload = bannerOnLoad(watch1)