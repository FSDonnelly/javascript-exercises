// If else example
let favouriteDrink = 'beer';

if (favouriteDrink === 'coffee') {
  console.log(`I'll have coffee`);
} else if (favouriteDrink === 'water') {
  console.log(`I'll have water`);
} else {
  console.log(`I'll have nothing`);
}

let a = 10;
let b = 5;
let c = 2;
console.log(a + b + c);
// a = a + 5;
// b = b - 1;
// c = c / 2;
// console.log(a + b + c);
a += 5;
b--;
c /= 2;
console.log(a + b + c);

//  For loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

for (let index = 40; index < 61; index++) {
  console.log(index);
}

for (let k = 10; k >= 2; k--) {
  console.log(k);
}

let word = 'Hello';
for (let a = 0; a < word.length; a++) {
  console.log(word[a]);
}

let num = prompt('enter a number', '');

for (i = 1; i <= 10; i++) {
  let res = num * i;
  console.log(`${num} x ${i} = ${res}`);
}

let number1 = +prompt('enter first number', '');
let number2 = +prompt('enter second number', '');
let sum = 0;
for (let k = number1; k <= number2; k++) {
  if (k % 2 === 0) {
    sum += k;
  }
}
console.log(sum);
