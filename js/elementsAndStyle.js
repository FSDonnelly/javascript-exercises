{
  /* <h2>To-do list</h2>
    <ui id="list">
      <li>task 1</li>
      <li>task 2</li>
    </ui>
    <p class="green">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, odio
      numquam expedita reprehenderit aperiam, culpa temporibus assumenda
      dolores, aliquid recusandae et quod nam rerum rem hic dolorum porro.
      Deserunt, fuga!
    </p>
    <p class="red">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae
      voluptas exercitationem numquam soluta quam fuga suscipit doloribus
      adipisci eius voluptatum laboriosam nesciunt, possimus aspernatur esse.
      Quibusdam mollitia illum reiciendis.
    </p> */
}

// Creating and deleting elements
let task = document.createElement('li');
let task2 = document.createElement('li');

task.textContent = 'task A';
task2.textContent = 'task 3';

let list = document.getElementById('list');

list.appendChild(task2); //place element at the end of array

let firstElement = list.children[0]; //create var for element after insert point

list.insertBefore(task, firstElement); //place element in array

let element = list.children[1]; //create var to hold element to delete
element.remove();

// Manipulating Style

let green = document.querySelector('.green');
green.style.color = 'green';
green.style.marginBottom = '30px';
green.style.textTransform = 'uppercase';
console.dir(green);
let red = document.querySelector('.red');
red.style.color = 'red';
red.style.fontWeight = 'bold';
