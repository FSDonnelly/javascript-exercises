// Sandbox
function byeFunc() {
  console.log('Good bye!');
}

function greeting(func) {
  //body...
  func();
}

// greeting(helloFunc); // Function that gets passed to another func is a CallBack
greeting(byeFunc);

// setInterval
let counter = 0;
function helloFunc() {
  counter++;
  if (counter === 10) {
    clearInterval(interval);
  }
  console.log('Hello');
}
let interval = setInterval(helloFunc, 1000);
