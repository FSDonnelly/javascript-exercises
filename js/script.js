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
