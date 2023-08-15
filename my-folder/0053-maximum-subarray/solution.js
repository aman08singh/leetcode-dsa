/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length < 1) {
      return 0;
    }
    else if(nums.length === 1) {
      return nums[0];
    }
    let maxSum=nums[0], currentSum=nums[0];
    for(let i=1;i<nums.length;i++) {
      currentSum = Math.max(nums[i], currentSum+nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};
