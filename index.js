const form = document.querySelector("form");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(list) {
    list.preventDefault();
    
    verificar();
});

function verificar() {

    let numero = parseInt(document.getElementById('numero').value);

    let resultadoTexto;
    if (numero % 2 === 0) {
        resultadoTexto = "par";
    } else {
        resultadoTexto = "ímpar";
    }
    
    const mensagem = `O número ${numero} é ${resultadoTexto}`;
    resultado.textContent = mensagem;
}
