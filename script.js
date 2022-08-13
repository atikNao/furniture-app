const header = document.querySelector('#header');
const headerNav = document.querySelector('#header-nav');
const btnTop = document.querySelector('#top-btn');
const btnClose = document.querySelector('#btn-close');

let pos = header.offsetTop;


window.addEventListener('scroll', () =>{
    if ( window.pageYOffset > pos ) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky')
    }
});

window.addEventListener('click', () => {    
      if(headerNav.contains('show')) {
        headerNav.style.displary = 'none';
      }  
});


btnTop.addEventListener('click', () => {
    headerNav.classList.add('show');
});

btnClose.addEventListener('click', () => {
    headerNav.classList.remove('show');
});
