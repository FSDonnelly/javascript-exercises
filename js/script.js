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
