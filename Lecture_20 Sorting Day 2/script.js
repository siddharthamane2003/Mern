console.log("This is  Lecture 20th on Merge Sort  and  InsertionSortInsertionSort Sort");


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


/******************  InSertion Sort **********************/
//Demo Of InsertionSortInsertionSort Sort
// let a=[1,2,7,9,6];
// for (let i=0;i<a.length;i++){
//     if(a[i]>a[a.length-1]){
//         [a[i],a[a.length-1]]=[a[a.length-1],a[i]];
//     }
// }
// console.log(a) 

function InsertionAtCorrect(arr3){
    let lastelement=arr3[arr3.length-1];
    let insertAt=0;
    let n=arr3.length;
    for (let j=n-2;j>=0;j--){
        if(arr3[j]>lastelement){
            arr3[j+1]=arr3[j];
        }
        else{
            arr3[lastelement]=j+1;
            break;
        }
    }

    arr3[insertAt]=lastelement;
    return arr3;
}
let arr3=[3,4,7,9,2]
console.log(InsertionAtCorrect(arr3));




//Ineration Sort -> 
function InsertionSort(arr){
    let ind=0;
    for (let i=1;i<arr.length;i++){
        let firstElemOfUnsortedPart=arr[i];
        let indexToInsrtAt=0;
        for (let j=ind;j>=0;j--){
            if(arr[j]>firstElemOfUnsortedPart){
                arr[j+1]=arr[j];
            }
            else{
                indexToInsrtAt=j+1;
                break;
            }
        }
        arr[indexToInsrtAt]=firstElemOfUnsortedPart;
        ind++;
    }
    return arr;
}

let arr=[3,1,6,2,8,7,4];
console.log(InsertionSort(arr).join(" "));
