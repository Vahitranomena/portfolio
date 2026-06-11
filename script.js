// Attendre que le document HTML soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. ANIMATION INTRODUCTOIRE (HERO) AU CHARGEMENT DE LA PAGE
    const heroElements = document.querySelectorAll('.hero h1, .hero .subtitle, .hero .tagline, .hero .hero-buttons, .profile-img');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Délai progressif pour chaque élément de l'en-tête
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 150 * (index + 1));
    });

    // 2. ANIMATION REVEAL AU SCROLL (APPARITION AU DÉFILEMENT)
    // Sélectionner les éléments à animer
    const sectionsToReveal = document.querySelectorAll('.experience-card, .project-card, #contact .container');
    
    // Ajouter la classe CSS de préparation à tous ces éléments
    sectionsToReveal.forEach(el => el.classList.add('reveal'));

    function checkScroll() {
        const triggerBottom = (window.innerHeight / 5) * 4; // Ligne déclic (80% de la hauteur de l'écran)

        sectionsToReveal.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('active'); // Active l'animation CSS
            }
        });
    }

    // Lancer une première vérification au chargement
    checkScroll();
    
    // Écouter le défilement de la page
    window.addEventListener('scroll', checkScroll);
});