const menu = document.querySelector('.header__nav');
const menuBtn = document.querySelector('.header__hamburger');
const body = document.body;
const html = document.documentElement;

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.removeAttribute('data-aos'); 
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
        html.classList.toggle('lock');
    })

    menu.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('lock');
            html.classList.remove('lock');
        })
    })
}

/*=======================================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})