//Events

// <button class="btn-primary">Click Me!</button>
//   <button class="btn-secondary">Hover Over Me!</button>

let btn = document.querySelector('.btn-primary');
console.dir(btn); //List of functions or Google popular js functions
let btn2 = document.querySelector('.btn-secondary');
btn.onclick = function() {
  console.log(`You have clicked the button`);
  alert(`You have clicked the button`);
};
btn2.onmouseover = function() {
  alert(`Your pointer is over the button`);
};
btn.addEventListener('click', () => {
  console.log('Hello');
});
btn.addEventListener('click', () => {
  console.log('Bye!');
});

//Keyboard Events

// <input type="text" />
//     <input type="text" />
//     <a href="http://ebay.com">Ebay</a>

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
