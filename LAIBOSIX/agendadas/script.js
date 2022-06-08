let ConsultasList = JSON.parse(localStorage.getItem('ConsultasList'))
 
console.log(ConsultasList)
function render(){
    const tbody = document.getElementById('listaRegistroBody')
    if(tbody){
        var data = listaRegistros.usuarios;

        
        data = data
            .sort( (a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map( usuario => {
                return `<tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.fone}</td>
                        <td>
                            <button onclick='visualizar("cadastro",false,${usuario.id})'>Editar</button>
                            <button class='vermelho' onclick='querDeletar(${usuario.id})'>Deletar</button>
                        </td>
                    </tr>`
            } )
        tbody.innerHTML = data.join('')
    }
}