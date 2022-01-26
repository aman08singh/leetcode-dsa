/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  let columnToSearch = -1;
    let notFound = true;
  if(columnLength === 0) return false;
  else if(rowLength===1 && columnLength===1) {
      if(matrix[0][0] === target) return true;
      else return false;
  }
  // else if(rowLength===1) {
  //   if(binarySearch(matrix[0], target) ===1) return true;
  //     else return false;
  // }
  // else if(columnLength===1) {
  //   const temp=[];
  //   for (let i=0;i<rowLength;i++) {
  //       temp.push(matrix[i][0]);
  //   }
  //   if(binarySearch(temp, target) ===1) return true;
  //     else return false;
  // }
  else {
      for (let i=0;i<rowLength;i++) {
          if(matrix[i][columnLength-1] >=target) {
              if(matrix[i][columnLength-1] ===target) return true;
              columnToSearch+=1;
              notFound = false;
              break;
          }
          columnToSearch+=1;
      }
      if(columnToSearch===-1) {
        return false;
      }
      if(binarySearch(matrix[columnToSearch], target) ===1) return true;
      else return false;
  }
};

function binarySearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) return 1;

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) r = mid - 1;
    // Else the element can only be present
    // in right subarray
    else l = mid + 1;
  }

  // We reach here when element is not
  // present in array
  return -1;
}
