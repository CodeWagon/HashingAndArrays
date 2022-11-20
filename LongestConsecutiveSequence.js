/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  let max = 0;
  const map = {};
  for (let num of nums) {
    if (map[num] != null) {
      continue;
    }
    l = map[num - 1] || 0;
    r = map[num + 1] || 0;
    len = l + r + 1;

    map[num - l] = len;
    map[num] = len;
    map[num + r] = len;

    max = Math.max(max, len);
  }

  return max;
}
