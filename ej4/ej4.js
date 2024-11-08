let arrayNumeros = []
let numerosPares = 0;
let numerosImpares = 0;
let salir = true;
let indice = 0;

while (salir) {
    let consulta = parseInt(prompt("Ponga numeros"));
    if (consulta == 0 || isNaN(consulta)) {
        salir = false;
        break;
    }

    arrayNumeros[indice] = consulta;
    indice++;

    if (consulta % 2 == 0) {
        numerosPares++;
    } else {
        numerosImpares++;
    }


}

console.log(arrayNumeros + ".\n" + "Numeros pares: " + numerosPares + " y numeros impares: " + numerosImpares)