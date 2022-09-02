var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  var hash = {};
  for (let alph of s) {
    hash[alph] = (hash[alph] || 0) + 1; // create hash of first string
  }
  for (let alph of t) {
    if (!hash[alph]) return false; // if hash of 2nd string alphabet is not there return false else subtract 1 from hash
    hash[alph]--;
  }
  return true;
};

const s = "anagram",
  t = "nagaram";
console.log("Here is the result", isAnagram(s, t));
