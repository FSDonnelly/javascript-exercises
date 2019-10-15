// Sandbox
// DOM

console.dir(document);
console.dir(window);

// getElementByName()
{
  /* <h1 class="red-text">Greeting</h1>
    <p class="red-text" id="main">Hello!</p>
    <p class="green-text" name="wish">Have a nice day!</p> */
}
let name = document.getElementsByName('wish');
console.dir(name);

// getElementsByTagName()
let tag = document.getElementsByTagName('p');
console.dir(tag);

// getElementsByClassName()
let className = document.getElementsByClassName('red-text');
console.dir(className);
