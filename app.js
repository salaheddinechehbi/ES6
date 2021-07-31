
let username = "Salah Eddine";
let age = 24;

/* let oldWay = "Hello From the other side " + username + "\n" +
"what are you doing \n" + 
"right now, you have only "+ age + " ans";
console.log(oldWay);

let newWay = `Hello From the other side ${username}
what are you doing 
right now ${age} ans`;
console.log(newWay); */

let htmlTemplate = `
<div class="caard">
    <h2 class="name">${username}</h2>
    <span class="age">${age}</span>
</div>
`;
console.log(htmlTemplate);
document.querySelector(".title").innerHTML = htmlTemplate



