// Write a recursive function called reverse which accepts a string and 
// returns a new string in reverse.

function reverse(str){
  if(str.length === 0) return "";
  return str.charAt(str.length-1).concat(reverse(str.slice(0, -1)))
}

console.log(reverse("Hello"))
console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'