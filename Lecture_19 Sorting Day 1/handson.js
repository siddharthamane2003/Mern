// ///Pratice kara
// function bubbleSort(arr){
//     let n=arr.length;
//     for (let i=0;i<n;i++){
//         let swap=false;
//         for(let j=0;j+1<n-i;j++){
//             if(arr[j]>arr[j+1]){
//                 swap=true;
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }

//         if(!swap) break;
//     }

//     return arr;
// }
// console.log(bubbleSort([0,7,4,3,10]))



//Home Work Positive and Negative numbers together.
// let a = [-1,-5,-2,2,0,4];
// let relength=a.length;
// let neg = [];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < 0) {
//         neg.push(Math.abs(a[i]));
//     }
// }

// let sizeOfNeg = Math.max(...neg);
// let negArray = [];
// for (let i = 0; i <= sizeOfNeg; i++) negArray[i] = 0;

// for (let i = 0; i < neg.length; i++) {
//     negArray[neg[i]] = 1;
// }

// console.log("negArray:", negArray);

// // positives
// let pos = [];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] >= 0) pos.push(a[i]);
// }

// let maxPos = Math.max(...pos);
// let posArray = [];
// for (let i = 0; i <= maxPos; i++) posArray[i] = 0;

// // condition: positive numbers mark as 1
// for (let i = 0; i < pos.length; i++) {
//     posArray[pos[i]] = 1;
// }

// console.log("posArray:", posArray);

// let re=[];

// for (let i=sizeOfNeg+1;i>=0;i--){
//     if(negArray[i]==1){
//         re.push(-i);
//     }
// }

// for (let j=0;j<maxPos+1;j++){
//     if(posArray[j]==1){
//         re.push(j);
//     }
// }
// console.log(re);




//Selection Sort
function SelectionSort(arr){
    for (let i=0;i<arr.length;i++){
        let minIndex=i;

        for (let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
    }
     [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    return arr;
}
console.log(SelectionSort([4,7,1,6,1,8,10]))