export function calculandoIMC() {
    const pacientes = document.querySelectorAll('.paciente')

    pacientes.forEach(paciente => {
        let peso = Number(paciente.querySelector('.info-peso').innerHTML)
        let altura = Number(paciente.querySelector('.info-altura').innerHTML)
        let IMC = paciente.querySelector('.info-imc')
        
        let res = peso / (altura * 2)
    
        IMC.textContent = res.toFixed(1)
    })
}   