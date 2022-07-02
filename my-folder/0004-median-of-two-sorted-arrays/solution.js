/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(num1, num2) {
    const num3 = num1.concat(num2).sort((a,b) => a-b);
    const length = num3.length;
    // console.log("Length ", Math.ceil(length/2));
    if(length%2!==0) {
        return num3[Math.ceil(length/2)-1];
    }
    else {
        return (num3[length/2] + num3[(length/2) - 1])/2;
    }
};

