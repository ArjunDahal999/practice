/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  const firstElement = strs[0];
  const lastElement = strs[strs.length - 1];

  const minLength =
    firstElement.length > lastElement.length
      ? lastElement.length
      : firstElement.length;

  let subString = "";
  for (let i = 0; i < minLength; i++) {
    if (firstElement[i] != lastElement[i]) {
      break;
    }
    subString = subString + firstElement[i];
  }
  return subString;
};

const qn = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(qn));
