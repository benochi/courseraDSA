function validAnagram(str1, str2){
  if(str1.length != str2.length) {
      return false;
  }
  
  const map = {}
  
  for(const char of str1){
      map[char] = (map[char] || 0) + 1;
  }
  
  for(const char of str2){
      if(!map[char]){
          return false;
      } else {
          map[char]--;
      }
  }
  return true;
  
}

console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('dog', 'goat')); // False
console.log(validAnagram('animal', 'lanima')); // true
