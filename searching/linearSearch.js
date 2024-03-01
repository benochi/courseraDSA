const { intArray, strArray } = require("./array.js");
//linearSearch is used to check every element one at a time.  indexOf does this. 

function findIndex(arr, val){
  for(let i =0; i < arr.length; i++){
    if(arr[i] === val){
      return i
    }
  }
  return -1
}

console.log(findIndex(intArray, 12));
console.log(findIndex(intArray, 42));
console.log(findIndex(strArray, 'dan'));
console.log(findIndex(strArray, 'Garbuldeeguck'));