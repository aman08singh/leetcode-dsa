/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if(flowerbed.length < 1){
    return false;
  }
  else if(flowerbed.length === 1) {
    if(flowerbed[0] === 1 && n===1) {
      return false;
    }
    else if(flowerbed[0] === 1 && n===0) {
      return true;
    }
    else if(flowerbed[0] === 0 && n===1) {
      return true;
    }
  }
  let i=0, countZero=0,flower=0;
  for(i=0;i<flowerbed.length;i++) {
    if(flowerbed[i] === 0) {
      countZero+=1;
    }
    else {
      countZero=0;
    }
    if(countZero === 2 && i===1) {
      flower+=1;
      flowerbed.splice(i-1, 1, 1);
      countZero=0;
      i-=1;
    }
    if(countZero ===2 && i===flowerbed.length-1) {
      flower+=1;
      flowerbed.splice(i-1, 1, 1);
      countZero=0;
      // i-=1;
    }
    if(countZero===3) {
      flower+=1;
      flowerbed.splice(i-1, 1, 1);
      countZero=0;
      i-=1;
    }
  }
  return flower>=n;
};
