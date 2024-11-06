let arrayPalabras = ["rojo","azul","rojo","verde","amarillo"]

function listar(array){
    let cadenaArray = "";
    for(let i = 0;i<array.length;i++){
        cadenaArray += array[i];
        if(i < array.length - 1){
            cadenaArray += "-"
        }
    }

    return cadenaArray;
}

alert(listar(arrayPalabras))