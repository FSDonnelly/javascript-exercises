//  Arrays
let year = ['Jan', 'Feb', 'Mar'];

console.log(year[1]);
console.log(year[2]);

year[1] = 'February';
console.log(year[1]);

let array = [6, -1.3, 'Hello'];
console.log(array[1]);
console.log(array[2]);

array[2] = true;
console.log(array[2]);

let months = ['Feb', 'Mar', 'Apr', 'May'];

months.push('Jun'); // push to put element at end of array
console.log(months);

months.unshift('Jan'); // unshift to put element at start of array
console.log(months);

console.log(months.slice()); //copy whole array

console.log(months.slice(1)); // copy array with slice(from) 1 arg will copy to the end
console.log(months);

console.log(months.slice(1, 4)); // copy array with slice(from, to)
console.log(months);

months.pop(); // remove last element of the array with pop()
console.log(months);

months.shift(); // remove first element of the array with shift()
console.log(months);

console.log(months.indexOf('Apr')); // Find index of an element
months.splice(2, 1); // remove element within the array splice(index, count)
console.log(months);

let num = [1, -4, 6, 3.14];
console.log(num.length); // .length to count the elements in the array

num.pop();
console.log(num);

num.push(47);
console.log(num);

num.shift();
console.log(num);

num.unshift(69);
console.log(num);

num.splice(2, 1);
console.log(num);

console.log(num.indexOf(-4));

let num2 = num.slice(1, 3);
console.log(num2);

num.push(100, 420, 3);
num2 = num.slice(1);
console.log(num2);
let num2 = num.slice();
console.log(num2);

num[1] = -200;
console.log(num);
console.log(num2);

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

let array = [100, -2, 16, 41, 21, 0, 6, -4];

let minVal = array[0];
let maxVal = array[0];
let minIndex = 0;
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
  const element = array[i];
  if (element < minVal) {
    minVal = element;
    minIndex = i;
  } else if (element > maxVal) {
    maxVal = element;
    maxIndex = i;
  }
}
console.log(`Min: ${minVal}; Index: ${minIndex}`);
console.log(`Max: ${maxVal}; Index: ${maxIndex}`);

//  Array iteration
let array = ['John', 'Jacob', 'Daniel', 'Linda', 'Nancy', 'John'];

let name = prompt('Enter a name', 'John');
let counter = 0;

for (let i = 0; i < array.length; i++) {
  const el = array[i];
  if (el === name) {
    counter++;
  }
}

if (counter === 1) {
  console.log(`Name ${name}: ${counter} time`);
} else {
  console.log(`Name ${name}: ${counter} times`);
}
