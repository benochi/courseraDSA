//pure recursion
function collectOdds(arr){
  let newArr = []
  if(arr.length === 0){
    return newArr;
  }

  if(arr[0] % 2 !== 0){
    newArr.push(arr[0]);
  };

  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}

console.log(collectOdds([1,2,3,4,5]))
console.log(collectOdds([2,4]))
console.log(collectOdds([1,2,3,4,5,11,21,31,100,1000,1457]))