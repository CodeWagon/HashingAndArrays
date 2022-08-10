var two_sum = function (nums, target) {
  var hashmap = {};
  for (var i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (hashmap[rem] != undefined) {
      return [hashmap[target - nums[i]], i];
    }
    hashmap[nums[i]] = i;
  }
  return false;
};

var nums = [2, 7, 11, 15],
  target = 9;
var isDuplicate = two_sum(nums, target);
console.log(isDuplicate);
