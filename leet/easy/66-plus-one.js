/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits.reverse();
  let carry = 1;
  let i = 0;
  //987
  while (carry == 1) {
    if (i < digits.length) {
      //it1 : 0<3  , 1<3
      if (digits[i] == 9) {
        // it1:9 ==9 ,  8==9
        digits[i] = 0; // it1:[0,8,7]
      } else {
        digits[i] += 1; // it2 : 8+1=9  [0,9,7], carrt = 0 exit
        carry = 0;
      }
    } else {
      digits.push(1);
      carry = 0;
    }
    i++; // 1 ,
  }
  return digits.reverse();
};

console.log(plusOne([9, 9, 9]));
