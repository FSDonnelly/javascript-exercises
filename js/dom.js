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

// getElementById()
let id = document.getElementById('main');
console.dir(id);

// querySelector() only finds first element that matches
let query = document.querySelector('.red-text');
console.dir(query);
let query2 = document.querySelector('p:nth-of-type(2)'); // find specific element
console.dir(query2);

// querySelectorAll()
let queryAll = document.querySelectorAll('p');
console.dir(queryAll);
