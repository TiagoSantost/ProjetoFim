let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado =   document.querySelector('#logado')

logado.innerHTML = `Olá ${userLogado.nome}`

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado')
    window.location.href = 'http://127.0.0.1:5500/login/index.html'
}


function sair(){
    localStorage.removeItem('token')
    window.location.href = 'http://127.0.0.1:5500/login/index.html'
}

var listaRegistro ={
    ultimoIdGerado: 0,
    usuarios: [
        {id:3, nome:'Marcos', fone:'81'}
    ]
}

function render(){
    const tbody= document.getElementById('listaRegistroBody')
    if(tbody){
        tbody.innerHTML = listaRegistro.usuarios
        .sort( (a,b) => {
            return a.nome <b.nome ? -1 : 1}).map(usuario => {
            
            return `<tr>
                        <td>${usuario.id}</td>
                        <td>${usuario.nome}</td>
                        <td>${usuario.fone}</td>
                    </tr>`
        }).join('')
    }
}

function insertUsuario(nome, fone){
    const id = listaRegistro.ultimoIdGerado + 1;
    listaRegistro.ultimoIdGerado = id;
    listaRegistro.usuarios.push({
        id, nome, fone
    })
    render()
    visualizar('lista')
}

function editUsuario(id,nome,fone){

}

function deleteUsuario(id){

}


function visualizar(pagina){
    document.body.setAttribute('page', pagina)
    if(pagina==='cadastro'){
       document.getElementById('nome').focus()
    }
    
}

function submit(e){
    e.preventDefault()
   const data = {
       id: document.getElementById('id').value,
       nome: document.getElementById('nome').value,
       fone: document.getElementById('fone').value
   }
   if(data.id){
       editUsuario(...data)
   }else{
       insertUsuario(data.nome, data.fone )  
   }

}

window.addEventListener('load', () => {
    render()
    document.getElementById('cadastroRegistro').addEventListener('submit', submit)
})