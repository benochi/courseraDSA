function sameFrequency(num1, num2){
  let map = {};
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  if(strNum1.length !== strNum2.length) return false;

  for(let digit of strNum1){
    map[digit] = (map[digit] || 0) + 1;
  }
  for (let digit of strNum2){
    if(!map[digit]) return false;
    map[digit] -=1 ;
  }
  return true;
}



console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
