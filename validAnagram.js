function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
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
