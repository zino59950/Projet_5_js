// Définition de la liste des diapositives du carrousel
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

//---------------------------------------------------------------------------------------------------------------------------------------
// Initialisation de l'indice de la diapositive actuelle
let currentIndex = 0;

// Sélection des éléments DOM nécessaires
const bannerImg = document.querySelector('.banner-img'); // Sélection de l'image du carrousel
const arrowLeft = document.querySelector('.arrow_left'); // Sélection du bouton gauche
const arrowRight = document.querySelector('.arrow_right'); // Sélection du bouton droit
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points indicateurs

//---------------------------------------------------------------------------------------------------------------------------------------
// Fonction pour mettre à jour les indicateurs de point
const updateDots = (index) => {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoute la classe pour indiquer la diapositive actuelle
        } else {
            dot.classList.remove('dot_selected'); // Retire la classe pour les autres diapositives
        }
    });
};

//-------------------------------------------------------------------------------------------------------------------------------------
// Fonction pour mettre à jour le carrousel
const updateCarousel = (index, direction) => {
    // Gestion du rebouclage au début ou à la fin du carrousel
    if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }
    // Si l'index de la diapositive actuelle (currentIndex) est -1 (ce qui signifie que vous êtes au début de la liste) 
    // et que la direction est vers la gauche (c'est-à-dire que vous avez cliqué sur la flèche gauche), 
    // alors le code déplace l'indice currentIndex à la fin de la liste (slides.length - 1).

    // // De même, si l'index de la diapositive actuelle est égal à la longueur totale de la liste de diapositives (slides.length) 
    // et que la direction est vers la droite (c'est-à-dire que vous avez cliqué sur la flèche droite), le code réinitialise l'indice currentIndex à 0 (le début de la liste).

    // Mise à jour de l'image, du texte alternatif et de la ligne de tag
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine; // Met à jour le texte de la diapositive

    //const imagePath = assets/images/slideshow/${slides[currentIndex].image};: Crée le chemin de l'image de 
    //la diapositive actuelle.

    //bannerImg.src = imagePath;: Met à jour l'image du carrousel avec le chemin de l'image actuelle.

    //bannerImg.alt = Slide ${currentIndex + 1};: Définit un texte alternatif pour l'image du carrousel, 

    //indiquant le numéro de la diapositive.

    //const tagLine = slides[currentIndex].tagLine;: Récupère la ligne de tag de la diapositive actuelle.

    //document.querySelector('p').innerHTML = tagLine;: Met à jour le texte de la diapositive avec la ligne 

};

//-----------------------------------------------------------------------------------------------------------------------------------------
// Écouteur d'événement pour le bouton de gauche
arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left'); // Appelle la fonction de mise à jour pour la diapositive précédente
    updateDots(currentIndex); // Met à jour les indicateurs de point
});

//---------------------------------------------------------------------------------------------------------------------------------------
// Écouteur d'événement pour le bouton de droite
arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right'); // Appelle la fonction de mise à jour pour la diapositive suivante
    updateDots(currentIndex); // Met à jour les indicateurs de point
});

//--------------------------------------------------------------------------------------------------------------------------------------
// Initialisation du carrousel et des indicateurs de point lors du démarrage
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex);
