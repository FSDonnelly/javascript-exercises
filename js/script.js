// Sandbox
//  Array iteration

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
