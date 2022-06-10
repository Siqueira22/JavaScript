

function filtraPares(arr){
  return arr.filter(callback);

}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 15, 60, 59, 32, 5, 2];
 
console.log(filtraPares(meuArray));