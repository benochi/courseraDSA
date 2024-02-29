// Write a recursive function called capitalizeWords. Given an array of words, 
// return a new array containing each word capitalized.

function capitalizeWords (arr) {
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return [];
  const capitalize = str => str.toUpperCase();
  let firstWordCapitalized = capitalize(arr[0]);
  return [firstWordCapitalized].concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']