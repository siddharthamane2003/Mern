// HW 1
let matrix = [
  [1, 2, 3, 4, 5, 6],
  [2, 6, 12, 43, 3, 5],
  [8, 10, 34, 23, 12, 8],
];

let allCols = [];

// Step 1: Collect all columns reverse odd columns, keep even columns as is
for (let col = 0; col < matrix[0].length; col++) {
    let temp = [];
    if(col % 2 != 0){   // odd columns → reverse
        for (let row = matrix.length - 1; row >= 0; row--) {
            temp.push(matrix[row][col]);
        }
    } else {             // even columns → normal order
        for (let row = 0; row < matrix.length; row++) {
            temp.push(matrix[row][col]);
        }
    }
    allCols.push(temp);
}

// Step 2: Print row by row
for (let row = 0; row < matrix.length; row++) {
    let line = "";
    for (let col = 0; col < allCols.length; col++) {
        line += allCols[col][row] + " ";
    }
    console.log(line);
}


// HW2
const arr = [1, 2, 3, 4];
// subSum is sum of perticular subarray and sum is sum of all subarrayu 
// means [1,2] -> 1 , 1 2 , 2 -> subSum =1 , 1 +2 = 2 , 2, sum-> 1 + (1+2) + 2 = 7
function subarraySum (arr) {
  let sum = 0;
  let n = arr.length;

  //loop for subarrays starting from different index
  for(let i = 0; i < n; i++) {

    // for each j, it will represent a subarray starting from i and ending at j
    let subSum = 0;
    for(let j = i; j< n; j++){
      subSum += arr[j];
      sum += subSum;
    }
  }

  return sum;
}
