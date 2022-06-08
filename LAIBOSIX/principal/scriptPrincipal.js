let userLogado = JSON.parse(localStorage.getItem('userLogado'))

console.log(userLogado)
 
console.log(userLogado)
let logado = document.querySelector('#logado')

logado.innerHTML = `Olá ${userLogado.nome}`

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado')
    window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/login/index.html'
}

function acessarCadastro(){
    window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/consultas/index.html'
}
function sair(){
    localStorage.removeItem('token')
    window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/login/index.html'
}

const KEY = '@UsuarioList'
var BUSCA = ''

var listaRegistros = {
    ultimoIdGerado: 0,
    usuarios:[]

}

function gravarBD(){
    localStorage.setItem(KEY, JSON.stringify(listaRegistros) )
}

function lerBD(){
    const data = localStorage.getItem(KEY)
    if(data){
        listaRegistros = JSON.parse(data)
    }
    render()
}


function pesquisar(value){
    BUSCA = value
    render()
}

// Exibir a tabela do usuario na tela
function render(){
    const tbody = document.getElementById('listaRegistroBody')
    if(tbody){
        var data = listaRegistros.usuarios;
        if(BUSCA.trim()){
            const expReg = eval(`/${BUSCA.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter( usuario => {
                return expReg.test( usuario.nome ) || expReg.test( usuario.fone )
            } )
        }
        
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


function insertUsuario(nome, fone){
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id, nome, fone
    })
    gravarBD()
    render()
    visualizar('lista')
}

function editUsuario(id,nome,fone){
    var usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
    usuario.nome = nome;
    usuario.fone = fone;
    gravarBD()
    render()
    visualizar('lista')
}

function deleteUsuario(id){
    listaRegistros.usuarios = listaRegistros.usuarios.filter( usuario => {
        return usuario.id != id
    } )
    gravarBD()
    render()
}

function querDeletar(id){
    if(confirm('Quer deletar o registro de id '+id)){
        deleteUsuario(id)
    }
}

function limparEdicao(){
    document.getElementById('nome').value = ''
    document.getElementById('fone').value = ''
    document.getElementById('id').value = ''
}


function visualizar(pagina, novo=false, id=null){
    document.body.setAttribute('page',pagina)
    if(pagina === 'cadastro'){
        if(novo) limparEdicao()
        if(id){
            const usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
            if(usuario){
                document.getElementById('id').value = usuario.id
                document.getElementById('nome').value = usuario.nome
                document.getElementById('fone').value = usuario.fone
            }
        }
        document.getElementById('nome').focus()
    }
    
}

function submite(e){
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        fone: document.getElementById('fone').value,
    }
    if(data.id){
        editUsuario(data.id, data.nome, data.fone)
    }else{
        insertUsuario( data.nome, data.fone )
    }

}

window.addEventListener('load', () => {
    lerBD()
    document.getElementById('cadastroRegistro').addEventListener('submit', submite)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })
})