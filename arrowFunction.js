

let result = () => {
    return 45 + 45
}
//console.log(result())

let result2 = () => 40 + 40
//console.log(result2())

let resultParam = (param) => param * 5 
//console.log(resultParam(10))

let resultParam1 = (param = 1) => param * 5
/* console.log(resultParam1())
console.log(resultParam1(2)) */

// Whene using arrow function this value belonge to the block that contain the arrow function
// arrow function does not have it oun This
function User(){
    this.age = 0;
    setInterval(()=> {
        this.age++;
        console.log(this.age);
    }, 1000);
}
//let user = new User();

//without using Arrow function
function Person(){
    let that = this;
    that.age = 0;
    setInterval(function() {
        that.age++;
        console.log(that.age);
    }, 1000);
}
let person = new Person();

