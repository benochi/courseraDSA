// Write a recursive function called flatten which 
// accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr){
  // add whatever parameters you deem necessary - good luck!
  let result = []
  arr.forEach((item) => {
    if(Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }); 
  return result;
}
console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3