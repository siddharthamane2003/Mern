/* H.W: Write a function to print all the palindromic substrings of a string */

console.log("This is 12th Lecture..");
let n=10;

// while(n>0){
//     n*=2;     
//     console.log(n)
// }

// let N=100;
// for (let i=0;i<N;i++){
//     if(i==57){
//         console.log(i);
//         break;
//     }
// }

let arr=[1,2,3,4,4,4,6,6,6,8];
let N=arr.length;

let first_index=-1;
let last_index=-1;

for(let i=0;i<N;i++){
    if(arr[i]==4){
        if(first_index==-1){
            first_index=i;
        }
        last_index=i;
    }
    
}

if(first_index!==-1){
    console.log({first_index , last_index});
}
//TC->O(N)

///Home Work
