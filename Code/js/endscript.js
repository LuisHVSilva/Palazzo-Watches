// Abrir e fechar o Menu Responsivo Toggle


if (document.querySelector(".navbar_toggle")) {
    const navToggle = document.querySelector(".navbar_toggle");
    const links = document.querySelector(".main_nav");

    navToggle.addEventListener('click', function () {
        links.classList.toggle("main_nav");
    });
}    
