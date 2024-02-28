var isSubsequence = function(s, t) {
  if (s.length === 0) return true;
  let p1 = 0;

  for (let i = 0; i < t.length; i++) {
      if (s[p1] === t[i]) {
          p1++;
      }
      if (p1 === s.length) return true;
  }

  return p1 === s.length;
};

console.log(isSubsequence(s="", t="abde"))//true
console.log(isSubsequence(s="abc", t="ahbgdc"))//true
console.log(isSubsequence(s="axc", t="ahbgdc")) //false