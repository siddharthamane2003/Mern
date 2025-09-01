console.log("Hello");
// Subarray
// maximum subarray sum
// function maxSubarraysum(arr){
//     let a=[];
//     for (let i=0;i<arr.length;i++){
//         let sum=0;
        
//         for (let j=i;j<arr.length;j++){
                
//                 sum+=arr[j];
//                 a.push(sum);
//         }
        
//     }
//    let max=Math.max(...a);
//    console.log(max);
// }

// maxSubarraysum([-1,4,-3,-5,5,4]);


// function maxSubarraysum(arr){
//     let maxSum=arr[0];
//     for (let i=0;i<arr.length;i++){
//         let sum=0;
        
//         for (let j=i;j<arr.length;j++){   
//                 sum+=arr[j];
//                 if(maxSum<sum){
//                     maxSum=sum;
//                 }
//         }
        
//     }
//    return maxSum;
// }

// console.log(maxSubarraysum([-1,4,-3,-5,5,4]));



// function maxSubarraysum(arr){
//     let maxSum=arr[0];
//     let startIndex=0 , endIndex=arr.length-1;
//     for (let i=0;i<arr.length;i++){
//         let sum=0;
//         for (let j=i;j<arr.length;j++){   
//                 sum+=arr[j];
//                 if(maxSum<sum){
//                     maxSum=sum;
//                     startIndex=i;
//                     endIndex=j;
//                 }
//         }
        
//     }
//   console.log("Maximum Subarrya sum from",startIndex,"to",endIndex,"is:",maxSum);
// }

// maxSubarraysum([-1,4,-3,-5,5,4]);





//  function countkSumSubarray(array,k){
//     let count=0;
//     for (let i=0;i<array.length;i++){
//         let sum=0;
       
//         for (let j=i;j<array.length;j++){
//             sum+=array[j];
//             if(sum==k){
//                 count++;
//             }
//         }
//     }
//     return count;
//  }

// console.log(countkSumSubarray([1,2,-3,0,1,-1,1],0));


// Time Complexity :O(N*2)
// Space Complexity : O(N)


// function longSubarrySum(arr,k){
            
//      let length=0;
//     for (let i=0;i<arr.length;i++){
//         let sum=0;
       
//         for(let j=i;j<arr.length;j++){
//                 sum+=arr[j];

//                 if(sum==k){
//                        length=Math.max(length,j-i+1);
//                 }  
//         }
        
//     }
//   return length;
// }
// console.log(longSubarrySum([1,2,-3,0,1,-1,1],0));



// formula of that n-k+1 
// function printSubarrayKSize(arr, k) {
//     let a = [];
       // formula use 
//     for (let i = 0; i <= arr.length - k; i++) {
//         let subarray = [];
        //    collect all k
//         for (let j = i; j < i + k; j++) {
//             subarray.push(arr[j]);
//         }
//         a.push(subarray);
//     }

//     console.log(a);
// }

// printSubarrayKSize([1, 2, -3, 0, 1, -1, 1], 3);



























