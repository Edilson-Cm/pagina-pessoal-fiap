const toggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

toggle.addEventListener('click', function() {
    nav.classList.toggle('aberto');
});

const btnTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', function() {
    window.scrollTo(0, 0);
});