/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const arrayLength = digits?.length;
  const notArray = Array.isArray(digits);
  if (!digits || digits.length < 1 || !notArray) return 0;
  let finalArr = [];
  let carry=0;
  if (arrayLength === 1) {
    if (digits[0] === 9) {
      finalArr.push(1);
      finalArr.push(0);
    } else {
      finalArr.push(digits[0] + 1);
    }
  } else if (digits[arrayLength - 1] === 9) {
    for (let i = arrayLength - 1; i >= 0; i--) {
      // if (digits[i] === 9) {
      //   finalArr.push(0);
      // } else {
      //   finalArr.unshift(digits[i] + 1);
      //   if (i !== 0) {
      //     const extractRemainingArr = digits.slice(0,i);
      //     finalArr = [...extractRemainingArr, ...finalArr];
        
      //   }
      //   break;
      // }
      if(digits[i] === 9){
        finalArr.unshift(0);
        carry=1;
      }
      else {
        finalArr.unshift(digits[i] + 1);
          if (i !== 0) {
          const extractRemainingArr = digits.slice(0,i);
          finalArr = [...extractRemainingArr, ...finalArr];
        
        }
        carry=0;
        break;
      }
    }
  } else {
    for (let i = 0; i < arrayLength; i++) {
      if (i === arrayLength - 1) {
        finalArr.push(digits[i] + 1);
      } else {
        finalArr.push(digits[i]);
      }
    }
  }
  if(carry===1){
    finalArr.unshift(1);
  }
  return finalArr;
};

// console.log("Answer is ", plusOne([2, 2, 3, 9, 9]));
