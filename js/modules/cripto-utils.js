const listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
const listaNormal = ["e", "i", "a", "o", "u"];

const cifrasParaCriptografar = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

const cifrasParaDescriptografar = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
};

export function initCriptografaTexto(texto) {
    let textoConvertido = texto;
    listaNormal.forEach(function (letra) {
        textoConvertido = textoConvertido.replaceAll(letra, cifrasParaCriptografar[letra]);
    });
    return textoConvertido;
}

export function initDescriptografaTexto(texto) {
    let textoParaConverter = texto;
    listaCriptografica.forEach(function (letra) {
        textoParaConverter = textoParaConverter.replaceAll(letra, cifrasParaDescriptografar[letra]);
    });
    return textoParaConverter;
}
