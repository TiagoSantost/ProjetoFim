
var jsonTarefa = localStorage.getItem('@Consultas');
var tarefa = JSON.parse(jsonTarefa);


let nome = document.getElementById('nome')
nome.innerHTML = tarefa[0].data.nome;

let especialidade = document.getElementById('especialidade')
especialidade.innerHTML = tarefa[0].data.especialidade;

let data = document.getElementById('data')
data.innerHTML = tarefa[0].data.data;

let horario = document.getElementById('horario')
horario.innerHTML = tarefa[0].data.horario;

