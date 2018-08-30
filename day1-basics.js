
console.log('Hello World From index.js!'); 

function doSomething() {
    document.getElementById('demo').innerHTML = 'Hay! You Clicked the Button!';
}

// Variables 
// Var
// console.log(a);
// var a; 

//  Scenario 1
// function varFunc() {
//     var x = 10;
//     console.log(x);
// }

// varFunc();

// console.log(x);

// Scenario 2

// for(var x = 0; x < 10; x++) {
//     console.log(x);
// }

// console.log(x);

// IIFE Solution for var scoping issues

// (function() {
//     for(var x = 0; x < 10; x++) {
//         console.log(x);
//     }
// })();
// console.log(x);

// let x = 10;

// Scenario 1

// console.log(x);

// let x = 10;

// Scenario 2

// for(let x = 0; x < 10; x++) {
//     console.log(x);
// }

// console.log(x);

// Scenario 3

// {
//     let x = 10;
//     console.log(x);
// }

// console.log(x);

// Const

// Scenario 1

// const x = 10;

// x = 20;
// console.log(x);

// Scenario 2

const person = {
    name: 'khaja',
    role: 'automation dev'
}

console.log(person);

// person = {
//     name: 'khadeer',
//     role: 'SDET'
// }
// console.log(person);

person.role = 'blockchain dev';

console.log(person);

const array = [1, 2, 3];

array.push(4);

console.log(array);