// Write a function called findLongestSubstring, which accepts a string and returns the length of the 
// longest substring with all distinct characters.

function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length < 1) return 0
  let first = 0;
  let max = 0;
  let map = {}
  
  for(let i = 0; i< str.length; i++){
    const char = str[i]
    if(map[char] !== undefined && map[char] >= first){
      first = map[char] +1;
    }
    map[char] = i;
    max = Math.max(max, i - first + 1);
  }
  return max;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome'))// 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6
console.log(findLongestSubstring('ababcabcdabcde')) // 5