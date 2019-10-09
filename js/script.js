// Sandbox

//To be or not to be
//toBeOrNotToBe
function toCamelCase(str) {
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() + words[i].substring(1, words[i].length);
  }
  words[0] = words[0][0].toLowerCase() + words[0].substring(1, words[0].length);
  let result = words.join('');
  return result;
}

let str = prompt('Enter a sentence', '');
let str2 = toCamelCase(str);

console.log(str2);
