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
