// Write a recursive function called capitalizeFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  if(arr.length === 0) return [];
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  return [capitalize(arr[0])].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
