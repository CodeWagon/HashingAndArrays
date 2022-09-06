var groupAnagrams = function (strs) {
  var hash = {};
  for (let str of strs) {
    sortedStr = [...str].sort().join(""); // sort each string
    if (hash[sortedStr]) {
      hash[sortedStr].push(str);
    } else {
      hash[sortedStr] = [str];
    }
  }
  return Object.values(hash);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
