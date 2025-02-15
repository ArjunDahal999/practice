/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = Object.freeze({
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  });

  let number = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I" && s[i + 1] == "V") {
      number = number + romans["V"] - 1;
      i = i + 1;
    } else if (s[i] == "I" && s[i + 1] == "X") {
      number = number + romans["X"] - 1;
      i = i + 1;
    } else if (s[i] == "X" && s[i + 1] == "L") {
      number = number + romans["L"] - 10;
      i = i + 1;
    } else if (s[i] == "X" && s[i + 1] == "C") {
      number = number + romans["C"] - 10;
      i = i + 1;
    } else if (s[i] == "C" && s[i + 1] == "D") {
      number = number + romans["D"] - 100;
      i = i + 1;
    } else if (s[i] == "C" && s[i + 1] == "M") {
      number = number + romans["M"] - 100;
      i = i + 1;
    } else {
      number = number + romans[s[i]];
    }
  }

  return number;
};

console.log(romanToInt("MI"));

// 2nd approach

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let number = 0;

  for (let i = 0; i < s.length; i++) {
    if (romans[s[i]] < romans[[s[i + 1]]]) {
      number -= romans[s[i]];
    } else {
      number += romans[s[i]];
    }
  }
  return number;
};

console.log(romanToInt("MI"));
