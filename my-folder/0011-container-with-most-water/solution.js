/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // Calculate the area between the two lines
    const area = Math.min(height[left], height[right]) * (right - left);
    // Update the maxArea if the current area is greater
    maxArea = Math.max(maxArea, area);

    // Move the pointer of the shorter line inward to explore possible larger areas
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
