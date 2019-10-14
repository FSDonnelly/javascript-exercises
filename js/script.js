// Sandbox
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
