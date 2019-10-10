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
