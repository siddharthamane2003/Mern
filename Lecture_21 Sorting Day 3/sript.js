console.log("Quick Sort");


//Quik Sort
// let ar=[2,7,1,5,4];
// let arr1=[];
// for (let i=0;i<ar.length;i++){
//     if(ar[ar.length-1]>ar[i]){
//         arr.unshift(ar[i]);
//     }
//     else{
//         arr.push(ar[i])
//     }
// }


// for (let k=0;k<arr.length;k++){
//     if(arr[k]>arr[arr.length-1]){
//         [arr[k],arr[arr.length-1]]=[arr[arr.length-1],arr[k]];
//     }
// }
// console.log(arr)



//////////////////////////// Quik Sort ///////////////////////////////////////////

function PlaceCorrectPositon(arr4){
    let n=arr4.length;
    let lastElement=arr4[n-1];
    let ind=0;
    
    for (let i=0;i<n;i++){
        if(arr4[i]<=lastElement){
            [arr4[i],arr4[ind]]=[arr4[ind],arr4[i]]
            ind++;
        }
    }
    
    return arr4;
}
let arr4=[3,1,6,2,8,7,4]
console.log(PlaceCorrectPositon(arr4));

 

////sort Method in js

let arr = [3, 1, 6, 2, 8, 7, 4];
console.log(arr.sort()) // sort in asecding order
console.log(arr.sort().reverse()) //sort in deseding order

//another method of sort

arr.sort((a,b)=>a-b); //aseding order
console.log(arr)

arr.sort((a,b)=>(b-a)) //desedning order

console.log(arr)

//LocalCompare 
// 🎯 When to Use

// To compare strings in alphabetical order.

// To sort strings correctly, especially in different languages (accents, cases, etc.).

// For case-insensitive or locale-specific comparisons.

console.log("apple".localeCompare("banana"));

console.log("banana".localeCompare("apple"));

console.log("apple".localeCompare("apple"));

let fruits=["apple","banana","cherry"];
fruits.sort((a,b)=>a.localeCompare(b));
console.log(fruits)

console.log("a".localeCompare("A"));


let students = [
  { name: "Kiran", age: 34, rollNum: 10 },
  {
    name: "Ramesh",
    age: 6,
    rollNum: 7,
  },
  { name: "Suresh", age: 34, rollNum: 12 },
];

students.sort((a,b)=>{
    return a.age-b.age;  //from the age the asending the whole object will sort
})
console.log(students)

students.sort((a,b)=>{
    if(a.age==b.age) return a.rollNum-b.rollNum; //if the ages are same then rollnum will sort asedning e
                                                 //else the ages will sort asedning
    return a.age-b.age;  
})
console.log(students)


const nestedArr = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];

//Compare pairs:

// [1,3] vs [2,1] → 1 - 2 = -1 → [1,3] comes first.

// [1,2] vs [2,4] → 1 - 2 = -1 → [1,2] comes before [2,4].

// Between [1,3] and [1,2] → 1 - 1 = 0 → order stays as is (stable sort).

// Between [2,1] and [2,4] → 2 - 2 = 0 → order stays as is.




nestedArr.sort((a,b)=>a[0]-b[0]);  2
console.log(nestedArr);


/* H.w: sort the above array according to first value and then according to second value 
output should be:*
[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 4],
]
*/

const NestedArr = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];

NestedArr.sort((a,b)=>{
    if(a[0]==b[0]) return a[1]-b[1];
    return a[0]-b[0];
})
console.log(NestedArr)