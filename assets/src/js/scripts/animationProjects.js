'use strict';

function animationProjects() {
    const projectCards = document.querySelectorAll('.project-container');

    projectCards.forEach(projectCard => {
        console.log(projectCard);
        // projectCard.classList.add('js-animate-card');
    });
}

export default function(){
    window.addEventListener('load', function(){
        animationProjects();
    });
}