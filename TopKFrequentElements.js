var topKFrequent = function (nums, k) {
  let hash = {},
    res = [],
    j = 0;
  for (let num of nums) {
    hash[num] = (hash[num] || 0) + 1;
  }
  console.log(hash);
  let sorted = Object.entries(hash).sort((a, b) => b[1] - a[1]),
    count = 0;
  while (j < k) {
    res.push(Number(sorted[j][0]));
    j++;
  }
  return res;
};

var nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(topKFrequent(nums, 2));
