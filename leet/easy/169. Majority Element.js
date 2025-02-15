/**
 * @param {number[]} nums
 * @return {number}
 *
 *
 * [1,1,1,2,2,2,2,]
 */
var majorityElement = function (nums) {
  const high = nums.length / 2;
  nums.sort();
  let left = 0;
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[left] == nums[right]) {
      right++;
    }
    if (right - left >= high) {
      return nums[left];
    } else {
      left = right;
    }
  }
  return nums[left];
};

console.log(
  majorityElement([
    2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 3, 1,
  ])
);
