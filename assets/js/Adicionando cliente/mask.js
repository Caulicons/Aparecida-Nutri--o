export function mask(){
const inputs = document.querySelectorAll('[data-form]')


//Adicionando Mascaras
inputs.forEach(input => {

    input.addEventListener('input', () => {

        const tiposInputs = input.dataset.form
        input.classList.remove('inputError') 

       input.value = mask[tiposInputs](input.value)
    })
}) 

//Configurando mascaras
const mask = {
    nome : value => value
    .replace(/\d/, ''),
    
    peso : value => value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/g, '$1'),

    altura : value => value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})/g, '$1.$2')
    .replace(/(\d{2})(\d)/g, '$1'),

    gordura : value => value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/g, '$1'),
}
}