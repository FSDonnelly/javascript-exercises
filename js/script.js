//While loop

let currentSum = 100;
while (currentSum <= 8000) {
  console.log(`I have $${currentSum}`);
  currentSum = currentSum + 1000;
}
console.log('Done');

let bookPrice = 25;
let budget = 80;
while (budget >= bookPrice) {
  budget -= bookPrice;
  console.log(`I've bought a book!`);
}
console.log(`Rest: $${budget}`);
