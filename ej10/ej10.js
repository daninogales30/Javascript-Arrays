let productosPrecio = [
    ["monitor","200"],
    ["teclado","20"],
    ["raton","10"]
];

let producto = prompt("Escriba un producto de estos: monitor, teclado, raton");

function precio(producto){

    for(let i=0;i<productosPrecio.length;i++){
        if(producto == productosPrecio[i][0]){
            return productosPrecio[i][1];
        }
    }

    return "Este producto no existe";
}

alert("Un "+producto+" vale: "+precio(producto)+"€.")