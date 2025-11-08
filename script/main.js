const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if(window.scrollY > 50) {
        header.classList.add('horizontal');
    } else {
        header.classList.remove('horizontal');
    }
});