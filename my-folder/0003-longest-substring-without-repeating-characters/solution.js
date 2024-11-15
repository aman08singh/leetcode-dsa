/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let charIndexMap = {};
    let maxLength = 0;
    let start = 0; // Left pointer of the sliding window

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is already in the map and its index is within the current window
        if (charIndexMap[currentChar] !== undefined && charIndexMap[currentChar] >= start) {
            // Move the start pointer to the right of the last occurrence of the current character
            start = charIndexMap[currentChar] + 1;
        }

        // Update the last index of the current character
        charIndexMap[currentChar] = end;

        // Calculate the maximum length of the substring found so far
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
