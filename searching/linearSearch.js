const { intArray, strArray } = require("./array.js");
//linearSearch is used to check every element one at a time.  indexOf does this. 
const newObj = {
  1:'batman',
  'tim':'The grey',
  11.2:'float'
}


function findIndex(arr, val){
  for(let i =0; i < arr.length; i++){
    if(arr[i] === val){
      return i
    }
  }
  return -1
}

function findObjKeyByVal(obj, val){
  for(let key in obj){
    if(obj[key] === val){
      return key;
    }
  }
  return -1
}

console.log(findIndex(intArray, 12));
console.log(findIndex(intArray, 42));
console.log(findIndex(strArray, 'dan'));
console.log(findIndex(strArray, 'Garbuldeeguck'));

console.log(findObjKeyByVal(newObj, 'float'));
console.log(findObjKeyByVal(newObj, 'batman'));
console.log(findObjKeyByVal(newObj, 'burrito'));