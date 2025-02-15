/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[left] = nums[i];
      left++;
    }
    right++;
  }
  return left;
};
