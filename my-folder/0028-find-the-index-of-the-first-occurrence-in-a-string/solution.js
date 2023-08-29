/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!haystack || !needle) {
    return 0;
  } else if (haystack === needle) {
    return 0;
  } else {
    let firstIndex=-1, matchingNeedle = '';;
    for(let i=0;i<haystack.length;i++) {
      if(haystack.length - i >= needle.length) {
        for(let j=0;j<needle.length;j++) {
          if(haystack[i+j] === needle[j]) {
            if(firstIndex < 0) {
              firstIndex = i;
            }
            matchingNeedle+=needle[j];
            if(matchingNeedle === needle) {
              return firstIndex;
            }
          }
          else {
            firstIndex = -1;
            matchingNeedle='';
            break;
          }
        }
      }
      else {
      break;
      }
    }
    return -1;
  }
};
