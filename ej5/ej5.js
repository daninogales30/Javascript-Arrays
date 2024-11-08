let arrayNumero = [20, 18, 2020, 39, 20, 0, 4, 534];
let numeroMasPequeño = arrayNumero[0];
let indice = 0;

function min(array, resultado) {
    for (let i = 0; i < array.length; i++) {
        if (numeroMasPequeño > array[i]) {
            numeroMasPequeño = array[i];
            indice = i;
        }
    }

    if (resultado == "v") {
        return numeroMasPequeño;
    } else if (resultado == "i") {
        return indice;
    }
}

console.log(min(arrayNumero, "i"))

