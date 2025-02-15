/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  const index = nums.findIndex((e) => e == target);
  if (index > 0) {
    return index;
  }
  for (let i = 0; i < nums.length; i++) {
    if (target > nums[i]) {
      left++;
    }
  }
  return left;
};
