const letra = ["e", "i", "a", "o", "u"];
const cripto = ["enter", "imes", "ai", "ober", "ufat"];
let frase = "";
let fraseCodificada = "";


// Adorei esse código, encontrei ele aqui: https://www.youtube.com/watch?v=W5oawMJaXbU

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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

let jaCodificado = false;

function codificar() {
    let frase = document.getElementById("frase").value;
    if (jaCodificado){
        return;
    }
    for (let i = 0; i < letra.length; i++) {
        let currentLetter = letra[i];
        let currentCripto = cripto[i];

        let regex = new RegExp(currentLetter, 'g');
        frase = frase.replace(regex, currentCripto);
    }
    exibirTextoNaTela('p', frase);
    console.log(frase);
}


function decodificar() {
    let fraseCodificada = document.getElementById("frase").value;
    for (let i = 0; i < letra.length; i++) {
        let currentLetter = letra[i];
        let currentCripto = cripto[i];

        let regex = new RegExp(currentCripto, 'g');
        fraseCodificada = fraseCodificada.replace(regex, currentLetter);
    }

    console.log(fraseCodificada);
    exibirTextoNaTela('p', fraseCodificada);
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerText = texto;
}



function copiarTexto() {
    let textoParaCopiar = document.getElementById("texto-para-copiar").innerText;
    navigator.clipboard.writeText(textoParaCopiar)
  }

async function colarTexto() {
    let textoParaColar = await navigator.clipboard.readText();
    document.getElementById("frase").value = textoParaColar;
    console.log(textoParaColar);
}