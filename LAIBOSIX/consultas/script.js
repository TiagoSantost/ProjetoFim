
    let especialidades =  [
        "Anestesiologista",
        "Angiologia",	
        "Cardiologia",
        "Cirurgia Cardiovascular",
        "Cirurgia de Mão",
        "Cirurgia de Cabeça e Pescoço",
        "Oncológica",
        "Pediátrica"              
    ]

    var listaMedico = {
        medicos:[ 
            {nome: "Pedro", especialidade: "Anestesiologista", data:"13/03/2020", horario: "10:40"},
<<<<<<< Updated upstream
            {nome: "Tiago", especialidade: "Cardiologia", data:"15/03/2020", horario: "20:40"},
            {nome: "ADMA ", especidade: "Pediátrica", data:"25/03/2021", horario: "10:40"}
=======
            {nome: "Tiago", especialidade: "Cardiologia", data:"13/03/2020", horario: "10:40"},
            {nome: "adam ", especidade: "Pediátrica"}
>>>>>>> Stashed changes
        ]
    
    }
    
    var consultas = []

let sorteEspecialidade = especialidades.sort();

//pegar texto 
let input = document.querySelector("#especialidade");


input.addEventListener("keyup", (e) => {
    //pegar lista apos o click
    removeElemento();
    for(let i of sorteEspecialidade){
        //Converter entrada em input 
        //Ao reiniciar remova elemento 
        
       
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
            //criar elemento
            let listItem = document.createElement("li");
            //criando class para os nomes 
            listItem.classList.add('list-items');
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + 
            i +"')");
            //Pegar palavra escrita no input transformando em maiusculas 
            let palavra = "<b>" + i.substr(0,input.value.length) + 
            "</b>";
            palavra += i.substr(input.value.length);
            //Ver arrays com inicial de cada palavra iniciais
            listItem.innerHTML = palavra;
            document.querySelector('.list').appendChild(listItem);
        }
    }
})

function displayNames(value) {
    input.value = value;
    visualizarMedico();
    removeElemento();
  
}

function removeElemento(){
    let  intens = document.querySelectorAll('.list-items');
    intens.forEach((item) => {
        item.remove();
    });
}



function visualizarMedico(){
        const verMedico = listaMedico.medicos.find( medico => medico.especialidade == input.value  )
        if(verMedico){ 
            document.getElementById('nome').value = verMedico.nome
            document.getElementById('data').value = verMedico.data
            document.getElementById('horario').value = verMedico.horario
    }
 } 
    
   

 function submite(e){
    e.preventDefault()
    const data = {
        nome: document.getElementById('nome').value,
        especialidade: document.getElementById('especialidade').value,
        data: document.getElementById('data').value,
        horario: document.getElementById('horario').value,
    }
    if(data){
        insertUsuario(nome,especialidade,data,horario)
    }
    window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/agendadas/index.html'
}

window.addEventListener('load', () => {
    document.getElementById('cadastroRegistro').addEventListener('submit', submite)
})

function insertUsuario(nome, especialidade, data, horario){
    consultas.push({ nome, especialidade, data,horario })
    gravarBD()
}

function gravarBD(){
    localStorage.setItem('ConsultasList', JSON.stringify(consultas) )
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