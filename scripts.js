
function criptografar() {
    let texto = document.getElementById("input-texto").value;

   
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, insira apenas letras minúsculas e sem acentos.");
        return;
    }

 
    let textoCriptografado = texto.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");


    atualizarResultado(textoCriptografado);
}


function descriptografar() {
    let texto = document.getElementById("input-texto").value;

 
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, insira apenas letras minúsculas e sem acentos.");
        return;
    }

    let textoDescriptografado = texto.replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ai/g, "a")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");


    atualizarResultado(textoDescriptografado);
}

// resultado na direita
function atualizarResultado(texto) {
    const imagem = document.querySelector('.direita .imagem');
    imagem.innerHTML = `<p>${texto}</p>`;
}

document.querySelector('.bt-criptografar').addEventListener('click', criptografar);
document.querySelector('.bt-descriptografar').addEventListener('click', descriptografar);
