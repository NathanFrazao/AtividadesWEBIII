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



