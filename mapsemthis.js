

function mapSemThis(arr){
    return arr.map(function (item){
        return item * 2;
    })
}
const nums = [2.5, 4, 5.5, 6.7, 8.9, 10];

console.log(mapSemThis(nums));

console.log(nums);