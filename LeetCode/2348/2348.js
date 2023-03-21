/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let output = 0;
  let indexBeforeZero = -1;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element) {
      indexBeforeZero = index;
    } else {
      output += index - indexBeforeZero;
    }
  }

  return output;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
console.log(zeroFilledSubarray([0, 0, 0, 2, 0, 0]));
