const watch1 = {
    text: 'A brisa suave acariciava os campos verdejantes enquanto o sol se punha no horizonte. O crepúsculo pintava o céu com tons quentes de laranja e rosa, criando uma paisagem deslumbrante. As árvores balançavam ao ritmo da brisa, sussurrando melodias suaves. No ar, um aroma doce de flores selvagens enchia os sentidos',
    img: 'img/banner/watch1.png',
    brand: 'VICTORINOX',
    model: 'SWISS ARMY MAVERICK',
}

const watch2 = {
    text: 'Os pássaros cantavam em harmonia, celebrando a chegada da noite. As estrelas começavam a pontilhar o céu escuro, como pequenos diamantes brilhantes. Uma sensação de serenidade envolvia tudo ao redor, como se o mundo estivesse em perfeita harmonia.',
    img: 'img/banner/watch2.png',
    brand: 'TAG HEUER FORMULA 1',
    model: 'GRAND DATE BLACK DIAL',
}

const watch3 = {
    text: 'Em meio a essa cena tranquila, uma figura solitária caminhava pela estrada de terra. Seus passos eram calmos e determinados, enquanto sua mente vagava por pensamentos profundos. As memórias do passado misturavam-se com sonhos do futuro, criando uma tapeçaria de esperança e nostalgia.',
    img: 'img/banner/watch3.png',
    brand: 'VICTORINOX SWISS',
    model: 'ARMY INFANTRY',    
}

const watch4 = {
    text: 'Cada passo era uma jornada, cada respiração uma conexão com a vida. A figura solitária sentia uma profunda gratidão pelo momento presente e uma fome insaciável pela aventura que o futuro reservava.',
    img: 'img/banner/watch4.png',
    brand: 'TISSOT PRC 200 BLUE',
    model: ' DIAL CHRONOGRAPH',
}

const watch5 = {
    text: 'Enquanto a noite avançava e o mundo descansava, a figura solitária continuava sua caminhada, mergulhando no desconhecido com coragem e determinação. Pois, no coração daquela pessoa, havia uma centelha de curiosidade e um desejo incessante de descobrir o mundo ao seu redor.',
    img: 'img/banner/watch5.png',
    brand: 'MIDO BARONCELLI',
    model: 'AUTOMÁTICO',
}

const watches = [watch1, watch2, watch3, watch4, watch5]

var iterator = 0

function bannerChagePlus() {
    if (iterator >= 4) {
        iterator = -1
    }

    iterator++

    console.log(iterator)
    banner(watches[iterator])

}

function bannerChageLess() {

    if (iterator <= 0) {
        iterator = 5
    }

    iterator--

    console.log(iterator)
    banner(watches[iterator])
}

function banner(obj) {
    const bannerText = document.getElementById('bannerText');
    bannerText.textContent = obj.text;

    const bannerImg = document.getElementById('bannerImg');
    bannerImg.src = obj.img;
    bannerImg.alt = obj.brand + obj.model;

    const bannerBrand = document.getElementById('bannerBrand');
    bannerBrand.textContent = obj.brand;

    const bannerModel = document.getElementById('bannerModel');
    bannerModel.textContent = obj.model;
};

window.onload = banner(watch1)