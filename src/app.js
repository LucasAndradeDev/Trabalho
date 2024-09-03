// Função para mostrar uma seção e ocultar as outras
function showSection(sectionId) {
    // Ocultar todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.remove('fadeIn');
    });

    // Mostrar a seção selecionada com animação
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
    sectionToShow.classList.add('fadeIn');

    // Destacar o link ativo no menu de navegação
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');

    // Fechar o menu de navegação em dispositivos móveis (se aplicável)
    const navMenu = document.querySelector('nav');
    if (navMenu.classList.contains('mobile-menu-open')) {
        navMenu.classList.remove('mobile-menu-open');
    }
}

// Inicializar mostrando a seção "Sobre Mim"
showSection('about');

// Funcionalidade para alternar o menu de navegação em dispositivos móveis
document.querySelector('.nav-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle('mobile-menu-open');
});

/* Adicionar classe body.scrolled quando o usuário rolar a página */
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});