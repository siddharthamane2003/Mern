// Matrix also called  greet
//Diagonal sum in both;
//print the odd columns sum
//Subarray
console.log("Heloo");

let value=4+("34"*" ")/17;
console.log({ value });

let space=" ";
console.log(space * 1);

// Diagonal sum in left to rigth
let arr=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let sum=0;
for (let i=0;i<arr.length;i++){
    sum=sum+arr[i][i];  //👉 This means same row index & same column index → picks the diagonal elements.
}
console.log({sum});

//Time Complxity & Space COmplixity -> N

// Diagonal sum in rigth to left
let sum1=0;
for (let i=0;i<arr.length;i++){

        sum1=sum1+arr[i][arr.length-i-1]; 
    
    }
 
console.log({sum1});


 
let array = [
    [1, 2, 3, 4, 5, 6],
    [2, 6, 12, 43, 3, 9],
    [8, 10, 34, 7, 11, 15]
];

// print the odd columns sum
function printOddNumberedColElement(array){
let row=array.length;
let cols=array[0].length;
    for (let j=0;j<cols;j++){
        let ans="";
        if(j%2==0) continue;
        for (let i=0;i<row;i++){
            ans+=array[i][j]+" ";
        }
        console.log(ans);
    }
}
printOddNumberedColElement(array);

// Home Work
//Give 2d matrix , reverse each odd columns and print it.
// input [
[
    [1,2,3,4,5,6],
    [2,6,12,43,3,5],
    [8,10,34,23,12,8]
]
[
    [1,10,3,23,5,8]
]

