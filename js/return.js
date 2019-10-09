// Return
function squeeze(fruit) {
  let juice = fruit + ' juice';
  return juice;
}

let juice = squeeze('orange');

function bake(ing) {
  if (
    ing.includes('orange juice') &&
    ing.includes('flour') &&
    ing.includes('eggs') &&
    ing.includes('milk')
  ) {
    console.log('The cupcake has been baked!');
  } else {
    console.log('You do not have all the ingredients!');
  }
}

bake([juice, 'milk', 'flour', 'eggs']);

juice = squeeze('apple');

bake([juice, 'milk', 'flour', 'eggs']);

function isValid(pw) {
  if (pw.length >= 5) {
    return true;
  } else {
    return false;
  }
}

let p = prompt('Enter password', '');
let validResult = isValid(p);

if (validResult) {
  console.log('Password is valid');
  alert('Password is valid');
} else {
  console.log('Password is not valid');
  alert('Password is not valid');
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let num = +prompt('Enter a number', '0');

if (isPrime(num)) {
  console.log(`${num} is a prime number`);
  alert(`${num} is a prime number`);
} else {
  console.log(`${num} is a composite number`);
  alert(`${num} is a composite number`);
}
