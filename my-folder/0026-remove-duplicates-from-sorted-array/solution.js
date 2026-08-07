/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // const uniqueSet = new Set();
    if(!nums || nums?.length < 1) return 0;
    // nums?.forEach((e, i) => {
    //     if()
    // })
    let writeIndex = 1;
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]) {
            nums[writeIndex] = nums[i];
            writeIndex = writeIndex + 1;
        }
    }
    return writeIndex;
};
// console.log("Answer is ", removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
