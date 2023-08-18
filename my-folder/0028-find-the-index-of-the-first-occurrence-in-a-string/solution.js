/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!haystack) {
        return -1;
    }
    return haystack.indexOf(needle);
};
