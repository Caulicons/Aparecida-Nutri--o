import {calculandoIMC} from "../Adicionando cliente/calculandoIMC.js"

//Arrumando Inputs
export function triagemPaciente(inputs) {
    const pessoa = {
    nome : inputs[0].value ,
    peso : inputs[1].value ,
    altura : inputs[2].value ,
    gordura : inputs[3].value
   }

   return pessoa 
}

//Prevenindo duplicada
function existePaciente(pessoa){
    let res = false
    const pacientes = document.querySelectorAll(".paciente")

    //Avisando que está tudo ok!
    const span = document.querySelector('#errorBusca')
       span.textContent = 'Clientes Atualizados !'
       span.classList.add('invisible')

    pacientes.forEach(paciente => {
        const nome = paciente.querySelector('.info-nome').textContent
        if(nome == pessoa.nome){
            res = true;
        }
    })
    return res
}

export function adicionarPacienteDepoisDaTriagem(pessoa){
   const tabela = document.querySelector('#tabela-pacientes')

   if(!existePaciente(pessoa)){
    tabela.innerHTML += `<tr class="paciente">
    <td class="info-nome">${pessoa.nome}</td>
    <td class="info-peso">${pessoa.peso}</td>
    <td class="info-altura">${pessoa.altura}</td>
    <td class="info-gordura">${pessoa.gordura}</td>
    <td class="info-imc"></td>
    </tr>`
    calculandoIMC()
   } else {
       //Avisando que está tudo ok!
       const span = document.querySelector('#errorBusca')
       span.textContent = 'Clientes Atualizados !'
       span.classList.remove('invisible')
   }
    
}
