window.onload = function (){
let butao = document.querySelector('.fa-eye')

butao.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})
}
function acessarCadastro(){
  window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/cadastro/TelaCadastro.html'
}

function entrar(){
  let usuario = document.querySelector("#usuario")
  let userLabel = document.querySelector("#labelUsuario")

  let senha = document.querySelector("#senha")
  let senhaLabel = document.querySelector("#labelSenha")

  let msgError = document.querySelector('#msgError')
  let listUser = []

  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  

  listUser = JSON.parse(localStorage.getItem('listUser'))
  
  listUser.forEach((item)=> {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
        userValid ={
          nome: item.nomeCad,
          user: item.userCad,
          senha: item.senhaCad
        }
    }
  })
  
 
  if(usuario.value == userValid.user && senha.value == userValid.senha){
     window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/principal/paginaPrincipal.html'

     let token = Math.random().toString(16).substr(2)
     localStorage.setItem('token', token)
     localStorage.setItem('userLogado', JSON.stringify(userValid))
  }else{
    userLabel.setAttribute('style', 'color: red' )
    usuario.setAttribute('style', 'border-color: red' )
    senhaLabel.setAttribute('style', 'color: red' )
    senha.setAttribute('style', 'border-color: red' )
    msgError.setAttribute('style', "display:block")
    msgError.innerHTML = 'Usuario ou senha incorretos'
    usuario.focus()
  }
}
