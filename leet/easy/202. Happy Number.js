/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let newn = n;
  const set = new Set();
  let res = 0;
  let sum = 0;
  while (res != 1) {
    sum = 0;
    while (newn > 0) {
      sum += (newn % 10) * (newn % 10);
      newn = Math.floor(newn / 10);
    }
    if (sum == 1) return true;
    newn = sum;
    if (set.has(newn)) return false;
    set.add(newn);
  }
};

console.log(isHappy(1));
