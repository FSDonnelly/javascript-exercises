// Sandbox
//Events
let btn = document.querySelector('.btn-primary');
let btn2 = document.querySelector('.btn-secondary');
btn.onclick = function() {
  console.log(`You have clicked the button`);
  alert(`You have clicked the button`);
};
btn2.onmouseover = function() {
  alert(`Your pointer is over the button`);
};
