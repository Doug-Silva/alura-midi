function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//referencia que não vai se modificar, vai ter seu valor constante
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_pom');
    }
    contador = contador + 1;
}