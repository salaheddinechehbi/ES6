

let array1 = [1,2,3,4,4,5,2,3];
let set1 = new Set(array1).add(7);
set1.add(8);
set1.add("SEC");
console.log(array1);
console.log(set1);
for(let x of set1){
    console.log(x);
}
set1.delete(8);

console.log(set1.has("SEC"))
for(let x of set1){
    console.log(x);
}
set1.clear();
for(let x of set1){
    console.log(x);
}
console.log(set1.has("SEC"));


