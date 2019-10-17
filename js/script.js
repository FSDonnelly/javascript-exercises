// Sandbox

//Keyboard Events
let inp = document.querySelectorAll('input');
console.log(inp);
// inp.addEventListener('keyup', () => {
//   console.log('keyup: ' + inp.value);
// });

// inp.addEventListener('keydown', () => {
//   console.log('keydown: ' + inp.value);
// });

// inp.addEventListener('keypress', () => {
//   console.log('keypress: ' + inp.value);
// });
for (let i = 0; i < inp.length; i++) {
  const element = inp[i];
  element.addEventListener('keyup', () => {
    console.log('keyup: ' + element.value);
  });
}
