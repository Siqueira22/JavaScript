
const meuArray = [30, 30, 40, 5, 223, 1999, 2001, 2010, 9054, 3];

function valoresUnicos(arr){
    const mySet = new Set(arr);
    return[...mySet];
}

console.log(valoresUnicos(meuArray));