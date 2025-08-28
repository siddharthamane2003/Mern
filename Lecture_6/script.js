// let arr=[1,4,3,7,9];
// console.log(arr.pop())
// console.log(arr);


let arr1=[1,2,3,4,5,6]
// Using slice() doest change the arrya , until assiged to array itself
// let slice_element=arr.slice(0,3) // Print the 0 to 2 Element

// arr1=arr1.slice(0,arr1.length-1);
// console.log(arr1);

// // Using splice() chage the orignal array
// // syntax -> (start , count);

// arr1.splice(arr1.length-1,1);
// console.log(arr1);


let arr2=[1,2,3,4];
arr2.shift();

// arr2.splice(0,1)
console.log(arr2)

// Same using the shift but in for loop

let arr4=[1,2,3,4,5,6,7]
for(let i=0;i<arr4.length-1;i++){
    arr2[i]=arr4[i+1];
}
arr4.length=arr4.length-1;
console.log(arr4);

// Rotataion Array
//  5 element shift to first

let a=[1,2,3,4,5]
    let n=a.pop();
    a.unshift(n);

console.log(a);

//shift 1 st elemernt to last

let c=[1,2,3,4,5]
let b=c.shift();
c.push(b);
console.log(c);

 