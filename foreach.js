
let myArray = ["A", "B", "C", "D", "E", , "G",];

for(let x = 0; x < myArray.length; x++){
    console.log(myArray[x]);
}

console.log("#".repeat(20));

myArray.forEach((el) => {
    console.log(el);
});
console.log("#".repeat(20));

myArray.forEach((el, i) => {
    console.log( `${i} - ${el}`);
});

// The same thing apply for Set And Map methodes


