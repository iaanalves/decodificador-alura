export default function initCopiarTexto() {
    let textoCopiado = document.querySelector(".texto-criptografado p");
    var btnCopy = document.querySelector("#copiar");
    btnCopy.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText);
        alert("Texto copiado com Sucesso!");
        location.reload();
    })
}