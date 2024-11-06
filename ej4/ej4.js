let arrayNumeros = []
let numerosPares = 0;
let numerosImpares = 0;
salir = true;


while(salir){
    let resultado;
    let consulta = parseInt(prompt("Ponga numeros"));
    if(consulta == 0 || isNaN(consulta)){
        salir = false;
        break;
    }

    arrayNumeros.push(consulta);

    if(consulta % 2 == 0){
        numerosPares++;
    } else{
        numerosImpares++;
    }

    
}

console.log(arrayNumeros+".\n"+"Numeros pares: "+numerosPares+" y numeros impares: "+numerosImpares)