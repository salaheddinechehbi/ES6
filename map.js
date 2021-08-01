
let myMap = new Map([
    ["10", "String"],
    [10, "Number"],
    [false, "Boolean"],
    [{a: 4, b: 2}, "Object"],
    [function doSomething(){}, "Function"],
]);

/* myMap.set("10", "String");
myMap.set(10, "Number");
myMap.set(false, "Boolean");
myMap.set({a: 1, b: 2}, "Object"); */

console.log(myMap);
console.log(myMap.get(10));
console.log(myMap.get("10"));
console.log(myMap.get(false));

console.log(myMap.has(false))
//console.log(myMap.delete(false));
//myMap.clear();


