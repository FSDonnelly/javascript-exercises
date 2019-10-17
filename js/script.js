// Sandbox

//Keyboard Events
let inp = document.querySelector('input');

inp.addEventListener('keyup', () => {
  console.log('keyup: ' + inp.value);
});

inp.addEventListener('keydown', () => {
  console.log('keydown: ' + inp.value);
});

inp.addEventListener('keypress', () => {
  console.log('keypress: ' + inp.value);
});
