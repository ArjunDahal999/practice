/**
 * @param {number[]} prices
 * @return {number}
 */

/*
     7 3 5 1 3 6 4
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let max = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      if (max < profit) {
        max = profit;
      }
    } else {
      left = right;
    }
    right++;
  }
  return max;
};
