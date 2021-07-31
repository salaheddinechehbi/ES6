

const user = {
    name: 'SEC',
    age: '24',
    city: 'Marrakech',
    webSite: 'SmartSite.ma',
    langs: {
        html: '90%',
        js: '40%',
        css: '30%',
        php: '70%'
    }
};

const person = {
    name: 'SEC',
    age: '24',
    city: 'Marrakech',
    webSite: 'SmartSite.ma',
    langs: {
        html: '90%',
        css: '30%',
        php: '70%',
        js: ['Vue JS', 'Angulair JS', 'React JS']
    },
    sprache: ['Deutsh', 'English', 'Arabe']
};

/* const {name, age, city, theme = 'Default Theme', langs} = user;
console.log(`Hello My Name Is : ${name},
 My Age Is : ${age} I Live In ${city}, 
 I Chose The ${theme} Theme.
 I Know ${langs.html} of HTML And ${langs.css} Of CSS`); */

/* const {name, age, city, theme = 'Default Theme', langs: {html,css,js}} = user;
console.log(`Hello My Name Is : ${name},
 My Age Is : ${age} I Live In ${city}, 
 I Chose The ${theme} Theme.
 I Know ${html} of HTML And ${css} Of CSS And ${js} Of JS`); */

/*  const { html, css, js} = user.langs;
 console.log(`I Know ${html} of HTML And ${css} Of CSS And ${js} Of JS`); */

 const { name, age, city, theme, langs:{html, css, js: [one, two, three]}, sprache} = person;
console.log(`Hello My Name Is : ${name},
My Age Is : ${age} I Live In ${city}, 
I Know ${html} of HTML And ${css} Of CSS And ${one} And ${two}
I Speack ${sprache[1]} `)

