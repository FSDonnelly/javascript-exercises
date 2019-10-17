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
