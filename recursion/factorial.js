function factorial(num){
  if(num < 1) return 1;
  if(num === 1) return 1;
  return num * factorial(num -1)
}

console.log(factorial(10))
console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(-3))