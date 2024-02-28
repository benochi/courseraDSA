function collectOdds(arr){
  let result = [];

  function helper(input){
    if(input.length === 0){
      return;
    }
    if(input[0] % 2 !== 0){
      result.push(input[0])
    }
    helper(input.slice(1))
  }
  helper(arr);

  return result;
}

console.log(collectOdds([1,2,3,4,5]))
console.log(collectOdds([2,4]))
console.log(collectOdds([1,2,3,4,5,11,21,31,100,1000,1457]))