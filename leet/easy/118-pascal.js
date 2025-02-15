/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let finalArr = [[1], [1, 1]];
  if (numRows == 1) return [[1]];
  for (let i = 2; i < numRows; i++) {
    let arr = [];
    for (j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr[j] = 1;
      } else {
        arr[j] = finalArr[i - 1][j] + finalArr[i - 1][j - 1];
      }
    }
    finalArr.push(arr);
  }
  return finalArr;
};

console.log(generate(2));
