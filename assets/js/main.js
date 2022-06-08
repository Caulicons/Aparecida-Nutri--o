import {calculandoIMC} from "./Adicionando cliente/calculandoIMC.js"
import { mask } from "./Adicionando cliente/mask.js"
import { tirandoErros} from "./Adicionando cliente/mostrandoErrosInput.js"
import { adicionarPacienteDepoisDaTriagem, triagemPaciente} from "./Adicionando cliente/triagemPaciente.js"
import { removendoPaciente } from "./Removendo Cliente//removendo.js" 
import { filtrandoPacientes } from "./filtros/filtros.js" 
import { buscandoPaciente } from "./busca pacientes/busca_pacientes.js" 

//Adicionando Cliente
document.querySelector('#adicionar-paciente')
.addEventListener('click',function adicionarPaciente(e) {

    e.preventDefault()

    const características = document.querySelector('#form-adiciona')
    const pessoa = triagemPaciente(características)
    
    if (tirandoErros()) {
        adicionarPacienteDepoisDaTriagem(pessoa)
        características.reset()
    } 
    return 
})

calculandoIMC()
mask()
removendoPaciente()
filtrandoPacientes()
buscandoPaciente()

