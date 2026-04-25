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
    let caixa_texto = document.getElementById("caixa-texto");
    document.getElementById("div-registro").innerHTMl = "<p>", caixa_texto, "</p>";
}

function limpar() {
    document.getElementById("div-registro").innerHTMl = "";
}

document.getElementById("btn-registrar").addEventListener("click", registrar);
document.getElementById("btn-limpa").addEventListener("click", limpar);