const body = document.querySelector('body')
const sections = document.querySelectorAll('section.author')

function addProgressIndicatorElement(){
    let progressElement = document.createElement('div')
    progressElement.classList.add('progress-indicator')
    body.appendChild(progressElement)
}

function runProgressIndicator(){
    const pixelScrolled = window.pageYOffset; // How much we've scrolled
    const pageHeight = body.getBoundingClientRect().height;
    const browserHeight = window.innerHeight;
    const scrollableHeight = pageHeight - browserHeight; // The actual scrollable height

    const percentScrolled = (pixelScrolled / scrollableHeight) * 100;
    const progressIndicator = document.querySelector('.progress-indicator')
    progressIndicator.style.width = `${percentScrolled}%`

    sections.forEach((section, index) => {
        const indicatorColor = section.getAttribute('data-indicatorColor')
        if(window.pageYOffset > (section.offsetTop - 50)){
            if(section.hasAttribute('data-indicatorColor')){
                progressIndicator.style.backgroundColor = indicatorColor
            }
        }
    })
}


document.addEventListener('scroll', () => {
    runProgressIndicator();

})

window.addEventListener('DOMContentLoaded', () => {
    addProgressIndicatorElement();
})
