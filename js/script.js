// Sandbox

//Keyboard Events
let inp = document.querySelectorAll('input');
let a = document.querySelector('a');
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
  element.addEventListener('keyup', e => {
    // console.log(e); // console keyboard event
    // console.log('keyup: ' + element.value);
    if (e.which == 13) {
      console.log(element.value);
    }
  });
}

a.addEventListener('click', e => {
  e.preventDefault();
  alert('Boo! Happy Halloween!!');
});
