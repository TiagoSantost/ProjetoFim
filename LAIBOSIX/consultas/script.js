
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
            {nome: "Pedro", especialidade: "Anestesiologista"},
            {nome: "Tiago", especialidade: "Cardiologia"},
            {nome: "ADMA ", especidade: "Pediátrica"}
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
        console.log(verMedico)
        if(verMedico){
            console.log(verMedico)
            document.getElementById('nome').value = verMedico.nome
        }
    } 

        
            
    


