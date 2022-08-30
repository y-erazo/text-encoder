const textoEntrada = document.querySelector('#textoEntrada');
const textoSalida = document.querySelector('#textoSalida');
const btnCopiar = document.querySelector('.botonCopiar');
const tituloH2 = document.querySelector('.der>h2');
const textoP = document.querySelector('.der>p');


function btnEncriptar() {
    const textoEncriptado = encriptar(textoEntrada.value)
    
    textoSalida.style.backgroundImage = 'url("images/code.gif")';
    
    setTimeout(() => {
        textoSalida.value = textoEncriptado;
        textoSalida.style.backgroundImage = 'none';
        textoSalida.style.border = '1px solid #b6c0e9';
    }, 1500);
    
    ocultar()
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textoEntrada.value)
    
    textoSalida.style.backgroundImage = 'url("images/code.gif")';
    setTimeout(() => {
        textoSalida.value = textoEncriptado;
        textoSalida.style.backgroundImage = 'none';
        textoSalida.style.border = '1px solid #b6c0e9';
    }, 2000);
    ocultar()
}

function encriptar(txtEncriptado){
    let vocales = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    txtEncriptado = txtEncriptado.toLowerCase();

    for(let i = 0; i < vocales.length; i++){
        if(txtEncriptado.includes(vocales[i][0])){
            txtEncriptado = txtEncriptado.replaceAll(vocales[i][0],vocales[i][1])
        }
    }
    return txtEncriptado;
}

function desencriptar(txtDesencriptado){
    let vocales = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    txtDesencriptado = txtDesencriptado.toLowerCase();

    for(let i = 0; i < vocales.length; i++){
        if(txtDesencriptado.includes(vocales[i][1])){
            txtDesencriptado = txtDesencriptado.replaceAll(vocales[i][1],vocales[i][0])
        }
    }
    return txtDesencriptado;
}



function copiar() {
    textoSalida.select();
    navigator.clipboard.writeText(textoSalida.value)
    textoSalida.value = "";
    textoP.innerHTML = "Texto copiado!"
    textoP.style.display = 'inline';
    
    setTimeout(() => {
        textoSalida.style.backgroundImage = 'url("/images/women-key.gif")';
        tituloH2.style.display = 'inline';
        textoP.innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.';
        btnCopiar.style.display = 'none'
        textoSalida.style.border = '0';
    },1500);
}


function ocultar() {
    textoEntrada.value = ""
    btnCopiar.style.display = 'inline';
    tituloH2.style.display = 'none';
    textoP.style.display = 'none';
}

function modoPantalla() {
    const sitio = document.querySelector("body").classList.toggle("oscuro");
    document.querySelector("h1").classList.toggle("texto")
    document.querySelector(".advertencia").classList.toggle("texto")
    document.querySelector(".encriptar").classList.toggle("boton-ppal")
    document.querySelector(".encriptar").classList.toggle("boton-claro")
    document.querySelector(".desencriptar").classList.toggle("boton-claro")
    document.querySelector("footer").classList.toggle("boton-ppal")
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}

function limpia() {
    var val = document.getElementById("textoIngresado").value;
    var tam = val.length;
    for(i = 0; i < tam; i++) {
        if(!isNaN(val[i]))
            document.getElementById("textoIngresado").value = '';
    }
}