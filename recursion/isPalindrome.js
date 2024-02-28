// Write a recursive function called isPalindrome which returns true 
// if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length <= 1) return true;
  if(str[0] === str[str.length -1]){
    return isPalindrome(str.slice(1,-1))
  }
  return false;
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat'))// true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false