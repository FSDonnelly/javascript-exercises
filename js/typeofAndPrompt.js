//  Prompt and typeof
let x = 'Hello!';

console.log(typeof x);
x = 12;
console.log(typeof x);

console.log(typeof true);

console.log(typeof null);

console.log(typeof undefined);

// let p = prompt('Enter a text', '');
// console.log(typeof p);

// let q = +prompt('Enter a text', '');
// console.log(typeof q);

let y = prompt('Enter a text', ''); // Prompt always returns a string unless "+" preceeds
console.log(y + 5);
