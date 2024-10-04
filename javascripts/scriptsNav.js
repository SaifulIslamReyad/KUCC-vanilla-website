const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

const currentLocation = window.location.href;
const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
