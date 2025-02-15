/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let left = 1;
  let right = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[right - 1] != nums[right]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  console.log(nums);
  return left;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
