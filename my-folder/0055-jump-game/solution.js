/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max=0, i=0;
    for(i=0;i<nums.length;i++) {
        if(i > max) return false;
        max=Math.max(max, i+nums[i]);
    }
    return true;
};
