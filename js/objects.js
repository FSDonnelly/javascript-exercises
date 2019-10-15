//Objects

let person = {
  name: 'Daniel',
  lastname: 'Jones',
  age: 28,
  sex: 'male'
};

console.log(person.age);

person.age++;
person['lastname'] = 'Smith';

console.log(person['age']);
console.log(person['lastname']);

if (person.age >= 18) {
  console.log('Person is an adult!');
} else {
  console.log('Person is not an adult!');
}

person.age = 12;

if (person.age >= 18) {
  console.log('Person is an adult!');
} else {
  console.log('Person is not an adult!');
}

//  Nested Objects
// let friends = [
//   {
//     name: 'Dimitri',
//     age: 43,
//     parents: ['Tom', 'Kate']
//   },
//   {
//     name: 'Daniel',
//     age: 28,
//     parents: ['Michael', 'Julia']
//   },
//   {
//     name: 'Mary',
//     age: 34
//   },
//   {
//     name: 'Alex',
//     age: 24
//   }
// ];

let friends = [
  {
    name: 'Dimitri',
    age: 43,
    parents: [
      {
        name: 'Tom',
        age: 67
      },
      {
        name: 'Kate',
        age: 64
      }
    ]
  },
  {
    name: 'Daniel',
    age: 28,
    parents: [
      {
        name: 'Max',
        age: 54
      },
      {
        name: 'Jane',
        age: 50
      }
    ]
  },
  {
    name: 'Mary',
    age: 34
  },
  {
    name: 'Alex',
    age: 24
  }
];

console.log(friends[1].parents[0]);
console.log(friends[0]['parents'][1]);
console.log(friends[0]['name']);
console.log(friends[0].parents[0].name); // better
console.log(friends[0]['parents'][0]['name']); // not recommended

//Object methods
let person = {
  name: 'Daniel',
  age: 28,
  greeting: function(timeOfDay) {
    if (timeOfDay === 'morning') {
      console.log(`Good morning! My name is ${this.name}!`);
    } else if (timeOfDay === 'evening') {
      console.log(`Good night! My name is ${this.name}!`);
    } else {
      console.log(`Hello! My name is ${this.name}!`);
    }
  }
};

person.greeting();
person.greeting('morning');
person.greeting('evening');
