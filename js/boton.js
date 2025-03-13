/*Flecha para scroll hacia arriba*/ 
const scrollup = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 500 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)