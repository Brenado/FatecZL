//1- Mostrar e ocultar elemento
//Crie uma imagem ou texto e um botão que permita mostrar ou ocultar esse elemento.
function ocultar() {

    let imagem = document.getElementById("imagem");
    let btn_mostrarImg = document.getElementById("btn-mostrarImagem");

    if(!imagem.hidden) {
        imagem.hidden = true;
        btn_mostrarImg.textContent = "Mostrar";
    } else {
        imagem.hidden = false
        btn_mostrarImg.textContent = "Ocultar"
    }
}

document.getElementById("btn-mostrarImagem").addEventListener("click", ocultar);

//2- Limpando conteúdo
//Crie uma caixa de texto, um botão e uma <div>.
//Ao clicar no botão, o conteúdo digitado deve aparecer na <div>.
//Crie outro botão para limpar a <div>.

function registrar() {
    let caixa_texto = document.getElementById("caixa-texto").value;
    console.log(caixa_texto);
    document.getElementById("div-registro").innerHTML = "<p>" + caixa_texto + "</p>";
}

function limpar() {
    document.getElementById("div-registro").innerHTML = "";
}

document.getElementById("formulario2").addEventListener("submit", function(event){
    event.preventDefault();
    registrar();
});
document.getElementById("btn-limpar").addEventListener("click", limpar);

//3- Crie uma pergunta com múltiplas opções.
//Ao clicar em uma resposta, informe se ela está correta
function verificarResposta() {
    let resposta = document.querySelector("input[name='dois-mais-dois']:checked").value;
    acerto = document.getElementById("acerto");
    if(resposta === "4") {
        acerto.style.color = "green";
        acerto.textContent = "Acertou";
    } else {
        acerto.style.color = "red";
        acerto.textContent = "Errou";
    }
}

document.getElementById("formulario3").addEventListener("submit", function(event){
    event.preventDefault();
    verificarResposta();
});

//4- Lista de tarefas
//Crie um campo de texto e um botão para adicionar itens a uma lista.
function listar() {
    let item = document.getElementById("item").value;
    item = "<li>" + item + "</li>";
    let lista = document.getElementById("lista");
    lista.innerHTML += item;
    console.log(item);
    console.log(lista);
}
document.getElementById("formulario4").addEventListener("submit", function(event) {
    event.preventDefault();
    listar();
});

//5- Conversor de temperatura
//Crie um campo para temperatura em Celsius e um botão.
//Ao clicar, exiba o valor convertido para Fahrenheit.
function converter() {
    let temp = Number(document.getElementById("temperatura").value);
    document.getElementById("tempFah").textContent = (temp * 9/5) + 32;
}
document.getElementById("btn-converter").addEventListener("click", converter);

//6- Simulador de semáforo
//Crie três círculos (vermelho, amarelo e verde) e botões para acender cada um deles.
function vermelho() {
    document.getElementById("corRed").style.backgroundColor = "red";
    document.getElementById("corYel").style.backgroundColor = "darkGoldenRod";
    document.getElementById("corGre").style.backgroundColor = "darkGreen";
}
function amarelo() {
    document.getElementById("corRed").style.backgroundColor = "darkRed";
    document.getElementById("corYel").style.backgroundColor = "yellow";
    document.getElementById("corGre").style.backgroundColor = "darkGreen";
}
function verde() {
    document.getElementById("corRed").style.backgroundColor = "darkRed";
    document.getElementById("corYel").style.backgroundColor = "darkGoldenRod";
    document.getElementById("corGre").style.backgroundColor = "lawnGreen";
}

document.getElementById("btn-vermelho").addEventListener("click", vermelho);
document.getElementById("btn-amarelo").addEventListener("click", amarelo);
document.getElementById("btn-verde").addEventListener("click", verde);

//7- Gerador de tabuada
//Crie um campo numérico e um botão. Ao clicar, exiba a tabuada do número de 1 a 10.
//Utilize a estrutura de laço de repetição
function tabuada() {
    let numero = Number(document.getElementById("numero").value);
    console.log(numero);
    let tabuada = document.getElementById("tabuada");
    tabuada = "";

    for(let i = 0; i < 10; i++) {
        tabuada.innerHTML += numero + " . " + (i+1) + " = " + (numero * (i+1)) + "<br>";
    }
}
document.getElementById("btn-numero").addEventListener("click", tabuada);
