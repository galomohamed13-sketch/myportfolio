// Sélection des sections et des liens du menu
const sections = document.querySelectorAll('.section');
const menuLinks = document.querySelectorAll('.menu a');

// Fonction pour afficher une section
function showSection(id) {
    // Cacher toutes les sections
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Désactiver tous les liens
    menuLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Afficher la section choisie
    document.getElementById(id).style.display = 'block';

    // Activer le lien correspondant
    document.querySelector(`.menu a[href="#${id}"]`)
        .classList.add('active');
}

// Gestion des clics sur le menu
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});

// Section affichée par défaut
showSection('about');