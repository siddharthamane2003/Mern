console.log("This is  Lecture 20th on Merge Sort  and  Insertion Sort");


function mergeSort(A,B){
    let ans=[]
    let i=0;   //pointer to current element from arr1
    let j=0;   //pointer to current element from arr2
    let n=A.length;  
    let m=B.length;  
    while(i<n && j<m){
        if(A[i]<B[j]){
            ans.push(A[i]);
            i++;
        }
        else{
            ans.push(B[j]);
            j++;
        }
    }

        while(i<n){
            ans.push(A[i])
            i++;
        }

        while(j<m){
            ans.push(B[j]);
            j++;
        }

    return ans;
}

let A=[1,3,4,7,10]
let B=[2,9,12]
console.log(mergeSort(A,B))


//Mrage Sort :
function updtaedMegreSort(Arr,low,heigth){
    if(low==heigth){
        return [Arr[low]];
    }
    
    let mid=Math.floor((low+heigth)/2);
    
    let leftSortedArr=updtaedMegreSort(Arr,low,mid);
    let rigthSortedArr=updtaedMegreSort(Arr,mid+1,heigth);
    
    let mergeSortedArr=mergeSort(leftSortedArr,rigthSortedArr);

    return mergeSortedArr;

}
let Arr=[3,9,5,2,19,4,7]
console.log(updtaedMegreSort(Arr,0,Arr.length-1));



let a=[1,2,7,9,6];

for (let i=0;i<a.length;i++){
    if(a[i]>a[a.length-1]){
        [a[i],a[a.length-1]]=[a[a.length-1],a[i]];
    }
}

console.log(a) 



//Insertion Sort
function insertionSort(arr){
let re = [arr[0]]; 

for (let i = 1; i < arr.length; i++) {
    let f = false;  

    for (let j = 0; j < re.length; j++) {
        if (arr[i] < re[j]) {
           
            re.splice(j, 0, arr[i]);  
            f = true;
            break;
        }
    }

        if (f == false) {
            re.push(arr[i]);
        }
    }
    return re;
}


let arr = [3,1,6,2,8,7,4];
console.log(insertionSort(arr));