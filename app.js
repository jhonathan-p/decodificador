const letra = ["e", "i", "a", "o", "u"];
const cripto = ["enter", "imes", "ai", "ober", "ufat"];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ativo = false;

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");

        if (iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iterations += 1 / 2;

    }, 25);
}

function codificar() {
    let frase = document.getElementById("frase").value;
    for (let i = 0; i < letra.length; i++) {
        let currentLetter = letra[i];
        let currentCripto = cripto[i];

        let regex = new RegExp(currentLetter, 'g');
        frase = frase.replace(regex, currentCripto);
    }
    exibirTextoNaTela('#texto-decodificado', frase);
}

function decodificar() {
    let fraseCodificada = document.getElementById("frase").value;
    for (let i = 0; i < letra.length; i++) {
        let currentLetter = letra[i];
        let currentCripto = cripto[i];

        let regex = new RegExp(currentCripto, 'g');
        fraseCodificada = fraseCodificada.replace(regex, currentLetter);
    }
    exibirTextoNaTela('#texto-decodificado', fraseCodificada);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerText = texto;
}

// function delay() {
//     setTimeout(function () {
//         exibirTextoNaTela('#texto-decodificado', textoParaCopiar);
//         ativo = false
//     }, 500);
// }

function copiarTexto() {
    if (ativo) return;
    ativo = true
    let textoParaCopiar = document.getElementById("texto-decodificado").innerText;
    navigator.clipboard.writeText(textoParaCopiar);
    exibirTextoNaTela('#texto-decodificado', 'Copiado');
    setTimeout(function () {
        exibirTextoNaTela('#texto-decodificado', textoParaCopiar);
        ativo = false
    }, 500);
}

async function colarTexto() {
    let textoParaColar = await navigator.clipboard.readText();
    document.getElementById("frase").value = textoParaColar;
}