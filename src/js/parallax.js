const body = document.querySelector('body')
const sections = document.querySelectorAll('section.author')

// Establish the default parallax settings 
function scrollMovement(){
    const topBrowser = window.pageYOffset; // How much we've scrolled from the top of the browser
    const midBrowser = topBrowser + (window.innerHeight / 2) // To get the middle of anything (add the top to the height / 2)

    sections.forEach((section, index) => {
        const topSection = section.offsetTop; // Top of the section
        const midSection = topSection + (section.offsetHeight / 2)

        const distanceToMid = midBrowser - midSection; // How far are we to the middle of the section 

        // Apply our styling based on the scrolling
        const image = section.querySelector('img')
        const content = section.querySelector('.author__quote')
        const rotation = distanceToMid / 100; // Weigh it down, in order to slow it
        const contentMovement = (distanceToMid / 2) * (-1); // To move the top property by negative;

        // alternate rotation between each section
        if(index % 2 === 0){ // Determine if it's even or not
            rotation = rotation * (-1)
        }

        image.style.transform = `rotate(${rotation}deg)`
        content.style.transform = `rotate(${(-1) * rotation}deg)`
        content.style.top = `${contentMovement}px`

    })
}


scrollMovement();
document.addEventListener('scroll', () => {
    scrollMovement();
})

window.addEventListener('resize', () => {
    scrollMovement()
})