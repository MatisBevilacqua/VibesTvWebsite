let menuOpen = false;
let btnNav = document.querySelectorAll('.header_nav_mobile_button');

function clickNav() {
    if (!menuOpen) {
        document.querySelector('.header_nav_mobile').className = "header_nav_mobile-active";
        menuOpen = true;
    } else {
        document.querySelector('.header_nav_mobile-active').className = 'header_nav_mobile';
        menuOpen = false;
    }
}

for (let i = 0; i < btnNav.length; i++) {
    btnNav[i].addEventListener('click', clickNav);
}

