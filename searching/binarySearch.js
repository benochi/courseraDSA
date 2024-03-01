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

console.log(binarySearch(sortedIntArray, 40))