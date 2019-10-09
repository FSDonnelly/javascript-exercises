// Sandbox
// Scope
let x = 2;

// function printX() {
//   // let x = 10;
//   x = 10; // console prints 15
//   console.log(x);
// }

function printX() {
  let x = 10;
  for (let x = 0; x <= 2; x++) {
    console.log(x);
  }
  console.log(x);
}

printX();
x = x + 5;
console.log(x);
