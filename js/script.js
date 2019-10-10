// Sandbox
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
