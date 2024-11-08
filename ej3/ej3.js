let arrayLista = [2, 4, 5, 1, 2];

function sumaLista(listaArrays) {
    resultado = 0;
    for (let i = 0; i < arrayLista.length; i++) {
        resultado = resultado + arrayLista[i]
    }

    return resultado;
}

alert(sumaLista(arrayLista))