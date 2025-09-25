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




//Insertion Sort -> the above code is not insertion sort becase you use the extra array
// function insertionSort(arr){
// let re = [arr[0]]; 

// for (let i = 1; i < arr.length; i++) {
//     let f = false;  

//     for (let j = 0; j < re.length; j++) {
//         if (arr[i] < re[j]) {
           
//             re.splice(j, 0, arr[i]);  
//             f = true;
//             break;
//         }
//     }

//         if (f == false) {
//             re.push(arr[i]);
//         }
//     }
//     return re;
// }

// let arr = [3,1,6,2,8,7,4];
// console.log(insertionSort(arr));



//Insertion Sort

function insertionSort(b){
    let n=b.length;
    let ind=0;
    let insertAtCorretPos=0;

    for (let i=1;i<n;i++){
        let firstElemOfUnsortedPart=b[i];

        for (let j=ind;j>=0;j--){
            if(b[j]>firstElemOfUnsortedPart){
                b[j+1]=b[j];
            }
            else{
                insertAtCorretPos=j+1;
                break;
            }
        }
        b[insertAtCorretPos]=firstElemOfUnsortedPart;
        ind++;
    }
    

    return b;

}
console.log(insertionSort([3,1,6,2,8,7,4]));


/*
## 🔹 Dry Run Step by Step

**Initial Array:** `[3, 1, 6, 2, 8, 7, 4]`
Sorted part: `[3]` | Unsorted part: `[1, 6, 2, 8, 7, 4]`

---

### Step 1: i = 1 → pick `1`

* `firstElemOfUnsortedPart = 1`
* `j = ind = 0 → arr[j] = 3`

  * `3 > 1` → **IF** → shift 3 right → `[3, 3, 6, 2, 8, 7, 4]`
* No more `j` left, **ELSE** sets `indexToInsertAt = 0`
* Insert 1 at index 0 → `[1, 3, 6, 2, 8, 7, 4]`
* `ind++ → 1`

---

### Step 2: i = 2 → pick `6`

* `firstElemOfUnsortedPart = 6`
* `j = 1 → arr[j] = 3`

  * `3 > 6` ❌ → **ELSE** → `indexToInsertAt = 2`, break
* Insert 6 at index 2 → `[1, 3, 6, 2, 8, 7, 4]`
* `ind++ → 2`

---

### Step 3: i = 3 → pick `2`

* `firstElemOfUnsortedPart = 2`
* `j = 2 → arr[j] = 6`

  * `6 > 2` → **IF** → shift 6 right → `[1, 3, 6, 6, 8, 7, 4]`
* `j = 1 → arr[j] = 3`

  * `3 > 2` → **IF** → shift 3 right → `[1, 3, 3, 6, 8, 7, 4]`
* `j = 0 → arr[j] = 1`

  * `1 > 2` ❌ → **ELSE** → `indexToInsertAt = 1`, break
* Insert 2 at index 1 → `[1, 2, 3, 6, 8, 7, 4]`
* `ind++ → 3`

---

### Step 4: i = 4 → pick `8`

* `firstElemOfUnsortedPart = 8`
* `j = 3 → arr[j] = 6`

  * `6 > 8` ❌ → **ELSE** → `indexToInsertAt = 4`, break
* Insert 8 at index 4 → `[1, 2, 3, 6, 8, 7, 4]`
* `ind++ → 4`

---

### Step 5: i = 5 → pick `7`

* `firstElemOfUnsortedPart = 7`
* `j = 4 → arr[j] = 8`

  * `8 > 7` → **IF** → shift 8 → `[1, 2, 3, 6, 8, 8, 4]`
* `j = 3 → arr[j] = 6`

  * `6 > 7` ❌ → **ELSE** → `indexToInsertAt = 4`, break
* Insert 7 at index 4 → `[1, 2, 3, 6, 7, 8, 4]`
* `ind++ → 5`

---

### Step 6: i = 6 → pick `4`

* `firstElemOfUnsortedPart = 4`
* `j = 5 → arr[j] = 8`

  * `8 > 4` → **IF** → shift 8 → `[1, 2, 3, 6, 7, 8, 8]`
* `j = 4 → arr[j] = 7`

  * `7 > 4` → **IF** → shift 7 → `[1, 2, 3, 6, 7, 7, 8]`
* `j = 3 → arr[j] = 6`

  * `6 > 4` → **IF** → shift 6 → `[1, 2, 3, 6, 6, 7, 8]`
* `j = 2 → arr[j] = 3`

  * `3 > 4` ❌ → **ELSE** → `indexToInsertAt = 3`, break
* Insert 4 at index 3 → `[1, 2, 3, 4, 6, 7, 8]`
* `ind++ → 6`

---

### ✅ Final Sorted Array

```
[1, 2, 3, 4, 6, 7, 8]
```

---

### 🔹 Summary

* **`IF`** → shift elements to the right if bigger than the element to insert.
* **`ELSE`** → found the correct position → insert element here.
* **`ind`** → marks how much of the array is already sorted.
* Step by step, **each unsorted element finds its correct position** until the array is fully sorted.


*/





