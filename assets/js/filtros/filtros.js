export function filtrandoPacientes() {const inputPesquisa = document.querySelector('#filtra-tabela')
inputPesquisa.addEventListener('input',function(){
    const pacientes = document.querySelectorAll('.paciente')
    
    pacientes.forEach(paciente => {
        const nomePaciente = paciente.querySelector('.info-nome').textContent;
        const express = new RegExp(this.value, "i")
        if(this.value == '' || express.test(nomePaciente)){
            paciente.classList.remove('invisible')
        }
        if(!express.test(nomePaciente)){
            paciente.classList.add('invisible')
        } 
    })
})
}