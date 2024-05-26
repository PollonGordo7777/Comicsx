const inputQuantity = document.querySelector('.input-quantity')
const btnIncrement = document.querySelector('#increment')
const btnDecrement = document.querySelector('#decrement')

let valueByDefault = parseInt(inputQuantity.value)

//Funciones

btnIncrement.addEventListener('click', () => {
    valueByDefault += 1
    inputQuantity.value = valueByDefault
})

btnDecrement.addEventListener('click', () => {
    if (valueByDefault === 1) {
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
})

//Toggle
// Constantes Toggle Titles

const toggleDescription = document.querySelector('.title-description')
const toggleAdditionalInformation = document.querySelector('.title-additional-information')
const toggleCharacteristics = document.querySelector('.title-characteristics')

//Constantes Contenido Textos

const contentDescription = document.querySelector('.text-description')
const contentAdditionalInformation = document.querySelector('.text-additional-information')
const contentCharacteristics = document.querySelector('.content-characteristics')

//Funciones

toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
    // Aquí es donde cambiamos la clase de la flecha
    const arrow = toggleDescription.querySelector('i');
    arrow.classList.toggle('arrow-down');
    arrow.classList.toggle('arrow-up');
})

toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
    const arrow = toggleAdditionalInformation.querySelector('i');
    arrow.classList.toggle('arrow-down');
    arrow.classList.toggle('arrow-up');
})

toggleCharacteristics.addEventListener('click', () => {
    contentCharacteristics.classList.toggle('hidden');
    const arrow = toggleCharacteristics.querySelector('i');
    arrow.classList.toggle('arrow-down');
    arrow.classList.toggle('arrow-up');
})
