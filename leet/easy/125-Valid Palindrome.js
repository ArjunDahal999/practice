/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let st = s.toLowerCase();
  st = st.replace(/[^a-zA-Z0-9]/g, "");
  let left = 0;
  let right = st.length - 1;
  while (left < right) {
    if (st[left] != st[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
