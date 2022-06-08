const inputs = document.querySelectorAll('input')

//Verificando Erro na formatação
 export function tirandoErros() {
    let soma = 0

    inputs
    .forEach(input => {
        verificandoErro(input)

        if(input.validity.valid){
            soma++
        }
    })

    return soma == 5 ? true : false
}

//-------------------------------------------------------------------------------------------------------------

inputs.forEach(input => input.addEventListener('blur', (event) => verificandoErro(event.target)))

export function verificandoErro(input) {
    
    const tipoInput = input.dataset.form;

    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }

    if(input.validity.valid) 
        input.parentElement.children[2].innerHTML = ''

} 


/* Mapeando os erros.*/
const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

/* Personalizando as mensagens de error segundo ao erro.*/

const mensagemDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode está vazio.',
        customError: 'O campo de nome não pode está vazio.'

    },
    peso: {
        valueMissing: 'O campo de peso não pode está vazio.',
        customError: 'O peso deve ser no máximo 200KG'
    },
    altura: {
        valueMissing: 'O campo de altura não pode está vazio.',
        customError: 'A altura deve ser no máximo 2.50M'
    },
    gordura: {
        valueMissing: 'O campo de gordura não pode está vazio.',
        customError: 'O campo de gordura não pode está vazio.',
    },
    
}


const validadores = {
    peso: input => validandoPeso(input),
    altura: input => validandoAltura(input),
    nome: input => validandoNome(input),
    gordura: input => validandoGordura(input),
}

function validandoPeso(input) {

    const peso = input.value 

    if(peso > 200 || peso < 3) {
        input.classList.add('inputError')
        mostrandoMensagemError(input) 
        input.setCustomValidity('O peso deve ser no máximo 200KG.')
        return
    }

    input.classList.remove('inputError')
    input.setCustomValidity('')
}

function validandoAltura(input) {

    const altura = input.value 

    if(altura > 2.50 || altura == '') {
        input.classList.add('inputError')
         mostrandoMensagemError(input)
        input.setCustomValidity('A altura deve ser no máximo 2.50M')
        return
    }

    input.classList.remove('inputError')
    input.setCustomValidity('')
}

function validandoNome(input) {

    const nome = input.value 

    if(nome == '') {
        input.classList.add('inputError')
         mostrandoMensagemError(input)
        input.setCustomValidity('O campo nome deve ser preenchido.')
        return
    }

    input.classList.remove('inputError')
    input.setCustomValidity('')
}

function validandoGordura(input) {

    const gordura = input.value 

    if(gordura == '') {
        input.classList.add('inputError')
         mostrandoMensagemError(input)
        input.setCustomValidity('O campo gordura deve ser preenchido.')
        return
    }

    input.classList.remove('inputError')
    input.setCustomValidity('')
}

function mostrandoMensagemError(input) {

    tiposDeErros.forEach(error => {

        if(input.validity[error]) {
            document.querySelector(`[data-span='${input.dataset.form}']`).innerHTML = mensagemDeErro[input.dataset.form][error] 
        }
    })
}
