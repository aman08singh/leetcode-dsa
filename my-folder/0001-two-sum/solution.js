/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let index = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        index.push(i);
        index.push(j);
        break;
      }
    }
    if (sum === target) break;
  }
  return index;
};
