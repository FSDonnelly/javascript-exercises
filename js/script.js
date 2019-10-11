// Sandbox
//  Array iteration
let nums = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);

let nums2 = [1, 2, 3, 4];
let sum2 = 0;
nums2.forEach(function(el, index, array) {
  sum2 += el;
});
console.log(sum2);

let array = [11, 9, 8, 6, 0, 0, 3];

let even = 0;
let odd = 0;
let zeros = 0;

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element === 0) {
    zeros++;
  } else if (element % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(`Evens: ${even}`);
console.log(`Odds: ${odd}`);
console.log(`Zeros: ${zeros}`);
