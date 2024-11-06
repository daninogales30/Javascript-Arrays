function existeEn(letra,array){
    for(let i = 0;i<array.length;i++){
        if(array[i] == letra){
            return true;
        }
    }

    return false;
}

console.log(existeEn("v","['w', 'x', 'z', 'v']"))