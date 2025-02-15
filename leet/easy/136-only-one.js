// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function (nums) {
//   let map = new Map();
//   for (i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], 0);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   console.log(map);

//   for (const [key, value] of map.entries()) {
//     if (value === 0) return key;
//   }
//   return false;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let singleNum = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(singleNum);
    singleNum ^= nums[i];
  }
  return singleNum;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
