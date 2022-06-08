import { adicionarPacienteDepoisDaTriagem } from "../Adicionando cliente/triagemPaciente.js"

export function buscandoPaciente(){
    const btn = document.querySelector('#busca-paciente')
    btn.addEventListener('click', láBusca)
}

async function láBusca(){
    const url = 'https://api-pacientes.herokuapp.com/pacientes'

     await fetch(url)
    .then(res => {
        if(!res.ok){
            throw new Error("Deu erro em...")
        } return res.json()
    }).then(participantes =>
        participantes.forEach(participante => {
            adicionarPacienteDepoisDaTriagem(participante)
        }))
    .catch(error => {
    const span = document.querySelector('#errorBusca')
       span.textContent = 'Erro na Pesquisa'
       span.classList.remove('invisible')
    })
    
}