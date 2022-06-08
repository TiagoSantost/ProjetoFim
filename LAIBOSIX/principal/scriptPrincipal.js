let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá ${userLogado.nome}`

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado')
    window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/login/index.html'
}

function acessarCadastro(){
    window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/consultas/paginaConsultas.html'
}
function sair(){
    localStorage.removeItem('token')
    window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/login/index.html'
}

