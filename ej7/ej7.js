let arrayVocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let letra = prompt("Introduce una letra")

function esVocal(letra) {
    for (let i = 0; i < arrayVocales.length; i++) {
        if (letra == arrayVocales[i]) {
            return true;
        }
    }
    return false;
}

console.log(esVocal(letra))