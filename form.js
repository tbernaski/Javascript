const tarefas = [];

document.getElementById("adicionar").addEventListener("click", function() {
    const nomeTarefa = document.getElementById("nome-tarefa").value.trim();
    const dataVencimento = document.getElementById("date").value;
    const prioridade = document.getElementById("tipo").value;
    const descricao = document.getElementById("descricao").value.trim();
    const senha = document.getElementById("senha").value;

    const senhaValida = "coelho123"; 

   
    if (nomeTarefa === "" || nomeTarefa.length <= 4) {
        alert("O nome da tarefa deve ter mais de 4 caracteres e não pode estar vazio.");
        return;
    }

    if (descricao === "") {
        alert("A descrição não pode estar vazia.");
        return;
    }

    if (dataVencimento === "") {
        alert("A data de vencimento deve ser selecionada.");
        return;
    }

    if (prioridade === "") {
        alert("A prioridade deve ser selecionada.");
        return;
    }

    if (senha !== senhaValida) {
        alert("Senha incorreta.");
        return;
    }


    let novaTarefa = {
        nome: nomeTarefa,
        dataVencimento: dataVencimento,
        prioridade: prioridade,
        descricao: descricao,
        completa: false
    };

    tarefas.push(novaTarefa);
    alert("Tarefa adicionada com sucesso!");

    
    atualizarListaTarefas();


    document.getElementById('nome-tarefa').value = "";
    document.getElementById('date').value = "";
    document.getElementById('tipo').value = "";
    document.getElementById('descricao').value = "";
    document.getElementById('senha').value = "";
});

document.getElementById("remover").addEventListener("click", function() {
    if (tarefas.length === 0) {
        alert("Não há tarefas para remover.");
        return;
    }

    tarefas.pop(); 
    alert("Última tarefa removida com sucesso!");

   
    atualizarListaTarefas();
});

function atualizarListaTarefas() {
    const listaTarefas = tarefas.map(tarefa => `${tarefa.nome} (Prioridade: ${tarefa.prioridade}, Vencimento: ${tarefa.dataVencimento})`).join("<br>");
    document.getElementById('array-tarefas').innerHTML = listaTarefas;
    document.getElementById('contador-tarefas').textContent = tarefas.length;
}