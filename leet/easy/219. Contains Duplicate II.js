/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else if (Math.abs(map.get(nums[i]) - i) <= k) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};

containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
