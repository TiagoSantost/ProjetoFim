
var jsonTarefa = localStorage.getItem('KEY');
var tarefa = JSON.parse(jsonTarefa);







render()


function render(){
    const tbody = document.getElementById('listaRegistroBody')
    if(tbody){
        var data = tarefa;
        console.log(data)
        data.map( medico => {
                return `<tr>
                        <td>${medico.nome}</td>
                        <td>${medico.especialidade}</td>
                        <td>${medico.horario}</td>
                        <td>
                            
                        </td>
                    </tr>`
            } )
        tbody.innerHTML = data.join('')
    }
}