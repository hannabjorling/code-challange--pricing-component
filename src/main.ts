import './styles.css'

const slider = document.querySelector('input[type=checkbox]') as HTMLElement

slider.addEventListener('click', () => {
    // read current prices showing
    const price = document.querySelector('.price')
    const basicEl = document.querySelector('#basic-price')
    const professionalEl = document.querySelector('#prefessional-price')
    const masterEl = document.querySelector('#master-price');

    // annually = default, switch to monthly
    if (price?.innerHTML == '$199.99') {
        basicEl!.innerHTML = `&dollar;19.99`
        professionalEl!.innerHTML = `&dollar;24.99`
        masterEl!.innerHTML = `&dollar;39.99`
    } else if (price?.innerHTML === '$19.99') {
        basicEl!.innerHTML = `&dollar;199.99`
        professionalEl!.innerHTML = `&dollar;249.99`
        masterEl!.innerHTML = `&dollar;399.99`
    }
})