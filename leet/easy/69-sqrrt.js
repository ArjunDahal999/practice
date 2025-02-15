/**
 * @param {number[]} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  let res;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid < x) {
      left = mid + 1;
      res = mid;
    } else {
      return mid;
    }
  }
  return res;
};

console.log(mySqrt(7));
