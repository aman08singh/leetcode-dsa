/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i=0;i<s.length;i++){
        const beg = s.pop();
        s.splice(i,0,beg);
    }
};
