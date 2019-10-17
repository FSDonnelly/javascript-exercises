// Sandbox

// Random Number Generator
let randomNumber = Math.random(); //random # [0,1)
// Math.random() * max
let three = Math.random() * 3; //random # [0,3)
console.log(three);
// Math.random() * (max - min) + min
let minMax = Math.random() * (5 - 2) + 2; //random # [2,5)
console.log(minMax);
// Math.floor(Math.random()*(max - min + 1) + min)
let int = Math.floor(Math.random() * (15 - 2 + 1) + 2); //random integer (2,15)
console.log(int);
