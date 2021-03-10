'use strict';

function toggleHamburger() {
    const sideMenu = document.querySelector('.side-menu');
    if(sideMenu.classList.contains('is--active')) {
        sideMenu.classList.remove('is--active');
    } else {
        sideMenu.classList.add('is--active');
    }
}

export default function(){
    const hamburgers = document.querySelectorAll('.js-nav-menu-toggle');
    hamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault;
            toggleHamburger();
        });
    });
}