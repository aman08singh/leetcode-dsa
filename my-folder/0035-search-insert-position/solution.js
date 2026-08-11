/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (!nums || nums.length < 1) return 0;
  let i = 0,
    index;
  while (i < nums.length) {
    if (nums[i] === target) {
      index = i;
      break;
    } else if (target < nums[i]) {
      index = i;
      break;
    }
    i = i + 1;
  }
  if (index === undefined) return nums.length;
  return index;
};
// console.log("Answer is ", searchInsert([1,3,5,6], 2));
