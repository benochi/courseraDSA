//Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
//and checks whether there are any duplicates among the arguments passed in.  
//You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)
  let map = {};
  for(let arg of args){
    map[arg] = (map[arg] || 0) + 1;
    if (map[arg] > 1) return true
  }
  return false;  
}
//One liner 
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

//Multiple pointers:
// function areThereDuplicates(...args) {
//   args.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
//   });
 
//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// }

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 