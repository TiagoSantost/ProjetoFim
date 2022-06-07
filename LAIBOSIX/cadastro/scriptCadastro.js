window.onload = function (){
  let butao = document.querySelector('#verSenha')
  var el = document.getElementById('confSenha');

  //Olhar Senha
  butao.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  }) 
//Confirmar senha 
  el.addEventListener('click', ()=>{
    let inputConfirm = document.querySelector('#confirma')
    if(inputConfirm.getAttribute('type') == 'password'){
      inputConfirm.setAttribute('type', 'text')
    } else {
      inputConfirm.setAttribute('type', 'password')
    }
  })
}

  //Variaveis erro e sucesso
  let msgError = document.querySelector('#msgError')
  let msgSucess = document.querySelector('#msgSucess')
  

  //Nome  
  let nome = document.querySelector('#nome')
  let labelNome = document.querySelector('#labelNome')
  let validNome = false
  //Usuario

  let usuario = document.querySelector('#usuario')
  let labelUsuario = document.querySelector('#labelUsuario')
  let validUsuario = false
  //senha

  let senha = document.querySelector('#senha')
  let labelSenha = document.querySelector('#labelSenha')
  let validSenha = false
  //Confirmar
  
  let confirmar = document.querySelector('#confirma')
  let labelConfirmar = document.querySelector('#labelConfirmar')
  let validConfirmar = false

  //Validando Nome
  nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2){
      labelNome.setAttribute('style', 'color: red')
      labelNome.innerHTML = "Nome *Insira no minimo 3 caracteres"
      nome.setAttribute('style', 'color: red')
      validNome = false
    }else{
      labelNome.setAttribute('style', 'border-color: green')
      labelNome.innerHTML="Nome"
      nome.setAttribute('style', 'border-color: green')
      validNome = true
    }
  })

  //Validando Usuario
  usuario.addEventListener('keyup', ()=>{
    if(usuario.value.length<= 4){
      labelUsuario.setAttribute('style', 'color: red')
      labelUsuario.innerHTML = "Usuario *Insira no minimo 5 caracteres"
      usuario.setAttribute('style', 'border-color: red')
      validUsuario = false
    }else { 
      labelUsuario.setAttribute('style', 'color: green')
      labelUsuario.innerHTML="Usuario"
      usuario.setAttribute('style', 'border-color: green')
      validUsuario = true
    }
  })
  //Validando Senha 
  senha.addEventListener('keyup', ()=>{
    if(senha.value.length<= 5){
      labelSenha.setAttribute('style', 'color: red')
      labelSenha.innerHTML = "Senha *Insira no minimo 6 caracteres"
      senha.setAttribute('style', 'border-color: red')
      validSenha = false
    }else { 
      labelSenha.setAttribute('style', 'color: green')
      labelSenha.innerHTML= 'Senha'
      senha.setAttribute('style', 'border-color: green')
      validSenha = true
    }
  })

  //Validando confirmar Senha
  confirmar.addEventListener('keyup', ()=>{
    if(senha.value != confirmar.value ){
      labelConfirmar.setAttribute('style', 'color: red')
      labelConfirmar.innerHTML = " *Senhas não são iguais"
      confirmar.setAttribute('style', 'border-color: red')
      validConfirmar = false
    }else { 
      labelConfirmar.setAttribute('style', 'color: green')
      labelConfirmar.innerHTML= 'Confirmar Senha'
      confirmar.setAttribute('style', 'border-color: green')
      validConfirmar = true
    }
  })


function cadastrar(){
  if(validNome && validSenha && validUsuario && validConfirmar){
      let listUser = JSON.parse(localStorage.getItem('listUser')  || '[]')

      listUser.push(
        {
          nomeCad: nome.value,
          userCad: usuario.value,
          senhaCad: senha.value
        }
      )
      localStorage.setItem('listUser', JSON.stringify(listUser))

    msgSucess.setAttribute('style','display: block')
    msgSucess.innerHTML = '<strong> Cadastrando usuario....</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=> {
      window.location.href ='http://127.0.0.1:5500/LAIBOSIX/login/index.html'
    }, 3000)

    
  }else{
    msgError.setAttribute('style', 'display: block') 
    msgError.innerHTML = 'Preencha todos os campos corretamente antes de cadastrar'
    msgSucess.setAttribute('style','display: none')
    msgSucess.innerHTML = ''
  }
  
}