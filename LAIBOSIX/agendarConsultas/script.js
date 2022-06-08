
    let especialidades =  [
        "Anestesiologista",
        "Angiologia",	
        "Cardiologia",
        "Cardiovascular",
        "Clinico Geral",
        "Dermatologia",
        "Oncológica",
        "Pediátrica",
        "Endoscopia",
        "Geriatria"           
    ]

    var listaMedico = {
        medicos:[ 
            {nome: "Pedro", especialidade: "Anestesiologista", data:"15/05/2022", horario: "16:45"},
            {nome: "Tiago", especialidade: "Cardiologia", data:"17/07/2022", horario: "10:40"},
            {nome: "Guilherme", especialidade: "Angiologia", data:"22/06/2022", horario: "17:50"},
            {nome: "João", especialidade: "Cardiovascular", data:"31/08/2022", horario: "09:00"},
            {nome: "Vinicius", especialidade: "Clinico Geral", data:"30/09/2022", horario: "08:00"},
            {nome: "Heitor", especialidade: "Dermatologia", data:"20/10/2022", horario: "13:40"},
            {nome: "Anielle", especialidade: "Oncológica", data:"25/01/2022", horario: "11:30"},
            {nome: "Jean", especialidade: "Pediátrica", data:"27/07/2022", horario: "10:50"},
            {nome: "Lucas", especialidade: "Endoscopia", data:"26/05/2022", horario: "07:30"},
            {nome: "Adma", especialidade: "Geriatria", data:"17/10/2022", horario: "08:00"},
        ]
    
    }
  

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
    
     
 var consultas = []
 

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
        gravarBD()
    }
    window.location.href = 'http://127.0.0.1:5500/LAIBOSIX/agendadas/index.html'
}

window.addEventListener('load', () => {
    document.getElementById('cadastroRegistro').addEventListener('submit', submite)
})

function insertUsuario(nome, especialidade, data, horario){
    consultas.push({ nome, especialidade, data,horario })
}

const KEY = '@Consultas'
function gravarBD(){
    window.localStorage.setItem(KEY, JSON.stringify(consultas) )
}



