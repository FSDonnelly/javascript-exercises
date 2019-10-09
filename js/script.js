// Sandbox
function helloFunc() {
  console.log('Hello');
}

function byeFunc() {
  console.log('Good bye!');
}

function greeting(func) {
  //body...
  func();
}

greeting(helloFunc);
