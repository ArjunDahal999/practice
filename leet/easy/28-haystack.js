/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let heystackLength = haystack.length;
  let needleLength = needle.length;

  for (i = 0; i < heystackLength; i++) {
    let st = "";
    for (j = i; j < needleLength + i; j++) {
      st += haystack[j];
    }
    if (st == needle) {
      return i;
    }
  }
  return -1;
};
