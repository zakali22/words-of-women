const headerLogo = document.querySelector('.header__logo');
const authors = document.querySelectorAll('.author')

// Shrink logo on reaching the threshold
document.addEventListener('scroll', () => {
    const pixelScrolled = window.pageYOffset;
    const firstAuthorSection = authors[0].offsetTop;


    if(pixelScrolled > (firstAuthorSection - 20)){
        headerLogo.classList.add('scaleDown');
    } else {
        headerLogo.classList.remove('scaleDown');
    }
})