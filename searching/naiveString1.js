//return number of string matches in a target str.

function naiveSearch(str, target) {
  let count = 0;
  for (let i = 0; i <= str.length - target.length; i++) { 
    let match = true;
    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) {
        match = false;
        break; 
      }
    }
    if (match) {
      count++; 
    }
  }
  return count;
}

console.log(naiveSearch("omgaksjghkfjasfomg", "omg")) //2
console.log(naiveSearch("haha", "omg"))//0
console.log(naiveSearch("smileyboy", "smile")) //1
console.log(naiveSearch("smiley boy dur", " ")) //2
console.log(naiveSearch("omgomgomgomg", "omg")) //4
console.log(naiveSearch("Goated", "G")) //1