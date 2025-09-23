console.log("Handson File of Merge and Insertion Sort");
function handsonMergeSort(arr1,arr2){
    let i=0;
    let j=0;
    let n=arr1.length;
    let m=arr2.length;
    let ans=[];
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            ans.push(arr1[i]);
            i++;
        }
        else if (arr1[i]>arr2[j]){
            ans.push(arr2[j]);
            j++;
        }
    }


    while (i<n){
        ans.push(arr1[i]);
        i++;
    }
    while(j<m){
        ans.push(arr2[j]);
        j++;
    }

    return ans;
}


let arr1=[1,3,4,7,10];

let arr2=[2,9,12];
console.log(handsonMergeSort(arr1,arr2))





function handsonupdatedMergeSort(A,low,higth){
    if (low==higth) return [A[low]];

    let mid=Math.floor((low+higth)/2);

    let leftSortedSide=handsonupdatedMergeSort(A,low,mid)
    let rigthSortedSide=handsonupdatedMergeSort(A,mid+1,higth);

    let store=handsonMergeSort(leftSortedSide,rigthSortedSide);
    return store;
}

let A=[3,9,5,2,19,4,7]
console.log(handsonupdatedMergeSort(A,0,A.length-1));




let a = [3, 1, 6, 2, 8, 7, 4];
let re = [];
re.push(a[0]); // first element is sorted

for (let i = 1; i < a.length; i++) {
    let key = a[i];         // element to insert
    let inserted = false;   // flag to check if key is inserted

    for (let j = 0; j < re.length; j++) {
        if (key < re[j]) {
            // shift elements to the right to make space
            for (let k = re.length; k > j; k--) {
                re[k] = re[k - 1];
            }
            re[j] = key;   // insert key at correct position
            inserted = true;
            break;          // exit inner loop once inserted
        }
    }

    // if key is larger than all elements in re, push at end
    if (!inserted) {
        re.push(key);
    }
}

console.log(re);









