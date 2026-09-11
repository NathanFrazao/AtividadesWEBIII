//EXERCICIO 01

//MODIFICAR UM TEXTO, QUE CONSTA NA TAG h3 id="tituloExemplo1"

//Guardar o elemento dentro dessa variavel
const tituloExemplo01 = document.getElementById("tituloExemplo1");

//PROGRAMANDO O BOTÃO

const btnAlterarTexto = document.getElementById("btnAlterarTexto");

// BTN RESTAURAR

const btnRestaurarTexto = document.getElementById("btnRestaurarTexto");

// addEventListenear significa "Ficar observando alterção de padrão do elemento "

btnAlterarTexto.addEventListener("click",function(){

    tituloExemplo01.textContent="HAHAHAAHAHAH"
});

btnRestaurarTexto.addEventListener("click",function(){

    tituloExemplo01.textContent="Texto Original"});

//Exercicio 02

const caixaCor = document.getElementById("caixaCor");

const btnMudarCor = document.getElementById("btnMudarCor");

btnMudarCor.addEventListener("click", function(){

    //seleciono as qual class quero revoomer
    caixaCor.classList.remove("alert-primary");
    caixaCor.classList.add("alert-success");
    caixaCor.textContent = "Minha aparência mudou"
})


//Exercicio 03
//campo texto

const inputNome = document.getElementById("nomeAluno");

//btn

const btnSaudar = document.getElementById("btnSaudar");

const mensagemAluno = document.getElementById("mensagemAluno");

btnSaudar.addEventListener("click",function(){

    const nome = inputNome.value;
    const nomeSemEspacos = nome.trim();
    if (nomeSemEspacos === ""){
        mensagemAluno.textContent="Digite seu nome para continuar";
        mensagemAluno.classList.remove("Alert-light");
        mensagemAluno.classList.add("Alert-danger");
        return;
}

    mensagemAluno.classList.remove("Alert-danger");
    mensagemAluno.classList.add("Alert-success");
    mensagemAluno.textContent="Olá, " + nomeSemEspacos + " ! Seja bem vindo";
   
})

//EXERCICIO 04

let contador=0;

const numeroContador = document.getElementById("numeroContador");
const btnAumentar = document.getElementById("btnAumentar");
const btnDiminuir = document.getElementById("btnDiminuir");
const btnZerar = document.getElementById("btnZerar");

btnAumentar.addEventListener("click",function(){
    contador ++;
    numeroContador.textContent = contador;
});

btnDiminuir.addEventListener("click",function(){
    contador --;
    numeroContador.textContent = contador;
});

btnZerar.addEventListener("click",function(){
    contador =0;
    numeroContador.textContent = contador;
});


//Exercicio 05

//Seleciona o botão e o painel de detalhes pelos IDs correspondentes
const btnDetalhes = document.getElementById('btnDetalhes');
const painelDetalhes = document.getElementById('painelDetalhes');

//Adiciona um ouvinte para o evento de clique no botão
btnDetalhes.addEventListener('click',function(){
painelDetalhes.classList.toggle('d-none');
});


//Exercicio 06


const btnCriarItem = document.getElementById('btnCriarItem');
const listaCriada = document.getElementById('listaCriada');

let contadorItem = 1;

btnCriarItem.addEventListener('click',function(){
    
const novoItem = document.createElement('li');

novoItem.classList.add('list-group-item');

novoItem.textContent = ` Novo item # ${contadorItem}`;

listaCriada.appendChild(novoItem);

contadorItem++;

});


//EXERCICIO 07

// 1. Seleciona os elementos do HTML pelos IDs
const inputTarefa = document.getElementById('inputTarefa');
const btnAdicionarTarefa = document.getElementById('btnAdicionarTarefa');
const avisoTarefa = document.getElementById('avisoTarefa');
const listaTarefas = document.getElementById('listaTarefas');

// 2. Cria a função que adiciona a tarefa
function adicionarTarefa() {
    // Obtém o texto do input removendo espaços extras nas pontas
    const textoTarefa = inputTarefa.value.trim();

    // VALIDAÇÃO: Se o campo estiver vazio, exibe aviso e interrompe a função
    if (textoTarefa === "") {
        avisoTarefa.textContent = "Por favor, digite uma tarefa antes de adicionar.";
        return;
    }

    // Limpa o aviso de erro caso ele estivesse na tela
    avisoTarefa.textContent = "";

    // 3. CRIAÇÃO DE ELEMENTOS: Cria o item da lista (li)
    const novoItem = document.createElement('li');
    // Adiciona classes do Bootstrap para organizar o conteúdo em linha (flexbox)
    novoItem.className = "list-group-item d-flex justify-content-between align-items-center";
    novoItem.textContent = textoTarefa;

    // 4. CRIAÇÃO DE ELEMENTOS: Cria o botão de excluir
    const btnExcluir = document.createElement('button');
    btnExcluir.className = "btn btn-danger btn-sm";
    btnExcluir.textContent = "Excluir";

    // 5. REMOÇÃO DE ELEMENTOS: Evento de clique para remover a tarefa específica
    btnExcluir.addEventListener('click', () => {
        novoItem.remove(); // Remove o elemento 'li' inteiro da página
    });

    // 6. MONTAGEM DA ESTRUTURA: Coloca o botão dentro do 'li' e o 'li' dentro da 'ul'
    novoItem.appendChild(btnExcluir);
    listaTarefas.appendChild(novoItem);

    // 7. LIMPEZA: Limpa o campo de texto e devolve o foco para digitar a próxima
    inputTarefa.value = "";
    inputTarefa.focus();
}

// Escuta o clique no botão "Adicionar tarefa"
btnAdicionarTarefa.addEventListener('click', adicionarTarefa);

// BÔNUS: Permite adicionar a tarefa também ao apertar a tecla "Enter" no teclado
inputTarefa.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});


//EXERCICIO 08

// 1. Seleciona o campo de busca e todos os elementos de produto
const inputFiltro = document.getElementById('inputFiltroProduto');
const produtos = document.querySelectorAll('.produto');

// 2. Adiciona o evento 'input' que dispara a cada letra digitada ou apagada
inputFiltro.addEventListener('input', () => {
    // Converte o termo pesquisado para letras minúsculas (para a busca não ser case-sensitive)
    const termoBusca = inputFiltro.value.toLowerCase().trim();

    // 3. Percorre cada produto encontrado pelo querySelectorAll
    produtos.forEach(produto => {
        // Encontra o título interno deste produto específico e pega o texto dele
        const nomeProduto = produto.querySelector('.nome-produto').textContent.toLowerCase();

        // 4. Verifica se o nome do produto contém o termo digitado
        if (nomeProduto.includes(termoBusca)) {
            // Se conter, garante que o produto está visível (remove o d-none)
            produto.classList.remove('d-none');
        } else {
            // Se não conter, esconde o produto usando a classe do Bootstrap
            produto.classList.add('d-none');
        }
    });
});
