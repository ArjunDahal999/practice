/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const map = new Map();
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i]) && ![...map.values()].includes(t[i])) {
      map.set(s[i], t[i]);
    } else if (map.get(s[i]) != t[i]) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic("badc", "baba"));
