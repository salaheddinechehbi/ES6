
let arrayOne = [1,2,3],
    arrayTwo = [4,5],
    customArray = [1,2,3, ...arrayTwo , 6,7]
    array = [4,5,312,45,1,-45,-10,70];

//console.log(customArray)

//console.log(arrayOne.concat(arrayTwo));

let AllArrays = [...arrayOne, ...arrayTwo]
//console.log(AllArrays)

function sum(x,y,z) {
    return x + y + z
}
//let sum = (x,y,z) => x + y + z
let numbers = [2,4,6]
//console.log(sum(...numbers))

arrayTwo = arrayOne;
arrayTwo.push(5);

/* console.log(arrayOne);
//arrayTwo.push(5);
console.log(arrayTwo); */

/* console.log('Max : ' + Math.max(array));
console.log('Max : ' + Math.max([4,5,312,45,1,-45,-10,70]));
console.log('Max : ' + Math.max(4,5,312,45,1,-45,-10,70));
console.log('Max : ' + Math.max(...array));
console.log('Min : ' + Math.min(...array));
console.log('Random : ' + Math.random(...array)); */







