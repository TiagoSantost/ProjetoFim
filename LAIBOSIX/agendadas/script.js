
var jsonTarefa = localStorage.getItem('KEY');
var tarefa = JSON.parse(jsonTarefa);



console.log(tarefa[0].data.nome)


let teste = document.getElementById('nome')
teste.innerHTML = tarefa[0].data.nome;