/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let a = n.toString(2).split("");
  return a.reduce((acc, inc) => {
    if (inc == 1) {
      acc = acc + 1;
    }
    return acc;
  }, 0);
};
console.log(hammingWeight(11));
