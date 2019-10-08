//While loop

// let currentSum = 100;
// while (currentSum <= 8000) {
//   console.log(`I have $${currentSum}`);
//   currentSum = currentSum + 1000;
// }
// console.log('Done');

// let bookPrice = 25;
// let budget = 80;
// while (budget >= bookPrice) {
//   budget -= bookPrice;
//   console.log(`I've bought a book!`);
// }
// console.log(`Rest: $${budget}`);

// let num = prompt('Enter a number', '');
// let i = 1;
// let sum = 0;
// while (i <= num) {
//   sum += i;
//   i++;
// }
// console.log(sum);

let number = +prompt('Enter a number', ''); //prompt returns string unless '+' in front
let sum = 0;
while (number !== 0) {
  sum += number;
  number = +prompt('Enter a number', '');
}
console.log(sum);
