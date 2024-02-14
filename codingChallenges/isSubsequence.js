// Write a function called isSubsequence which takes in two strings and checks whether the 
// characters in the first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters in the first string appear 
// somewhere in the second string, without their order

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  let pt1 = 0;
  let pt2 = 0;
  let count = str1.length -1

  while (pt2 < str2.length ){
    if(pt1 == count && str1[pt1] === str2[pt2]){
      return true;
    }
    if(str1[pt1] === str2[pt2]){
      pt1++;
      pt2++;
    } else if(str1[pt1] != str2[pt2]) {
      pt2++;
    } 
  }
  return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }