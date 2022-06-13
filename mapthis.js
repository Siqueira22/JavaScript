 const maca = {value:2,}
const melão = {value:3,}
 function mapComThis(arr, thisArg){

    return arr.map(function(item){
      return  item * this.value;
    },thisArg);

 }

const nums = [1,2];

 console.log('this => maçã',mapComThis(nums,maca));
 console.log('this => melão',mapComThis(nums,melão));