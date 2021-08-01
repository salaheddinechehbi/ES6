const symboleOne = Symbol();

// Every Symbol is unique even if they have the same data 

//console.log(symboleOne);

const myNewSymbol = Symbol();

const objectOne = {
    "username": "sec",
    "role": "admin",
    [myNewSymbol] : "This Is Hidden From Iteration"
}

console.log(objectOne);

for(let obj of Object.entries(objectOne)){
    console.log(obj);
}



