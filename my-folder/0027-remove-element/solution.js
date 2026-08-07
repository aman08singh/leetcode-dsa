/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(!nums || nums.length < 1) return 0;
    else if(val === 0 && !nums.includes(val)) return nums.length;
    for(let i=0;i<nums.length;i++) {
        if(nums[i] === val){
            nums.splice(i, 1)[0];
            i--;
        }
    }
    return nums.length;
};
// console.log("Answer ", removeElement([4,4,0,1,0,2], 0));
