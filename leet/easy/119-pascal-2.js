/**
 * @param {number} rowIndex
 * @return {number[]}
 */

/*
1
11
121
1331
*/
var getRow = function (rowIndex) {
  if (rowIndex == 0) return [1];
  let arr = [[1], [1, 1]];
  for (let i = 2; i <= rowIndex; i++) {
    let newArr = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        newArr[j] = 1;
      } else {
        newArr[j] = arr[i - 1][j] + arr[i - 1][j - 1];
      }
    }
    arr.push(newArr);
  }
  return arr[rowIndex];
};

console.log(getRow(3));
