//for sorted arrays
const { sortedIntArray } = require("./array.js");

function binarySearch(arr, val, left=0, right=arr.length-1){
  if(left > right) return -1;

  let middle = Math.floor((left + right) / 2);
  let middleVal = arr[middle]

  if(middleVal === val){
    return middle;
  } else if (middleVal > val){
    return binarySearch(arr, val, left, middle - 1)
  } else {
    return binarySearch(arr, val, middle + 1, right)
  }
}

function notRecursiveBinarySearch(arr, val){
  let left = 0;
  let right = arr.length -1;
  let middle = Math.floor((left + right) / 2);

  while(arr[middle] !== val && left <= right){
    if(val < arr[middle]){
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] == val ? middle : -1;
}
console.log(binarySearch(sortedIntArray, 40))
console.log(binarySearch(sortedIntArray, 4000))
console.log(notRecursiveBinarySearch(sortedIntArray, 40))
console.log(notRecursiveBinarySearch(sortedIntArray, 4000))