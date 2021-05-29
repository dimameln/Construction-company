//Burger
const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header_nav');

const hideBurger = (event) => {
    const target = event.target;
    const headerNavTar = target.closest('.header_nav');
    const burgerTar = target.closest('.burger');

    if(!headerNavTar && !burgerTar) {
        setTimeout(() => {
            headerNav.style.transform = 'rotateX(90deg)'
        }, 300);
        headerNav.style.transform = 'rotateX(0deg)'
    }
}

burger.addEventListener('click', () => {
    headerNav.style.display = 'block';
    setTimeout(() => {
        headerNav.style.transform = 'rotateX(0deg)'
    }, 300);
})

window.addEventListener('click', hideBurger);


//Modals
const html = document.querySelector('html');
const projectItems = document.querySelectorAll('.projects_item');
const gaspromModal = document.querySelector('.gasprom_modal');

projectItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        gaspromModal.style.display = 'block';
        html.classList.add('no-scroll');
    })
})

gaspromModal.addEventListener('click', event => {
    const target = event.target;
    const modalDialog = target.closest('.modal-dialog');

    if(!modalDialog) {
        gaspromModal.style.display = '';
        html.classList.remove('no-scroll');
    }
})
