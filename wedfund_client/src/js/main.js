function closeMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}

// const navLinks = document.querySelectorAll('.navbar-nav a.nav-link')
// for (let i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener('click',closeMenu)    
// }

// function checkWindowSize() {
//     if (window.innerWidth <= 991) {
//         for (let i = 0; i < navLinks.length; i++) {
//             navLinks[i].addEventListener('click', closeMenu)
//         }
//     }
// }

// checkWindowSize()

// window.addEventListener('resize', checkWindowSize)