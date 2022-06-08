export function removendoPaciente() {
    const pacientes = document.querySelectorAll('#tabela-pacientes')
    pacientes.forEach(paciente => {
        paciente.addEventListener('dblclick', function(event) {
            const pacient = event.target.parentNode

            pacient.classList.add("esmaecendo")

            setTimeout(()=> {
                pacient.remove()
            }, 500)
            
        })
})
} 