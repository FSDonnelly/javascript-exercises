// Sandbox
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
