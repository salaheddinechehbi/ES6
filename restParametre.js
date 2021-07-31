

function sum(a,b,...numbers){

    let num = 0;

    for(let n of numbers) num += n

    return num;
}

console.log(sum(4,5));
console.log(sum(4,5,4));
console.log(sum(4,5,4,6,10,15));



