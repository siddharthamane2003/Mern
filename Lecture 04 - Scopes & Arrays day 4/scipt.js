// // Golabal Varible can acess anywhere

// x=10; // Global Varible
// console.log(x);

// function syaHi(){
//     for (let i=0;i<x;i++) console.log("HI",i);
//     var u=10;

// }

// // console.log(u);
// syaHi();

// // Block Scope -> That varibles can acess inside the block only
// // let and const are behave same

// // let can acess only block scope
// {
//     let y=8;
//     console.log(y);
// }


// //  Var are can acess the block scope but not in function scope

// { 
//     var b=1;
    
// }

// console.log(b);

// function abs(){
//     var n=50;

// }
// // console.log(n); not acess outside the fcuntion scope var


// // Nested Scope
// //  Scope inside scope
// function nestedScopes(){
//     let x=90;
//     for (let i=0;i<5;i++){
//         if(x%2==0){
//             let value2=35;
//             console.log(x,value2);
//         }
//     }
// }
// nestedScopes()



// let arr=[1,[1,2,3],4,5,[6,95,71],80];


// // for (let i=0;i<arr.length;i++){

// //     if(arr[i].length==undefined){
// //         console.log(arr[i]);
    
// //     }
// //     else{
// //         for (let j=0;j<arr[i].length;j++){
// //         console.log(arr[j]);
// //         }
// //     }
// //     }


// for (let i=0;i<arr.length;i++){
//     if(typeof arr[i]=="number"){
//         console.log(arr[i]);
//     }
//     else{
//     for(let j=0;j<arr[i].length;j++)  {
        
//         console.log(arr[i]);
//     }
// }
// }


// // Method 3-> using isArray() method



// for (let i=0;i<arr.length;i++){
//     if(!(Array.isArray(arr[i]))){
//         console.log(arr[i]);
//     }
//     else{
//     for(let j=0;j<arr[i].length;j++) {
//         console.log(arr[i][j]);
//     }
// }
// }


// function check_nested_array(arr){
//     if(!Array.isArray(arr)) return false;
//     if(!Array.isArray(arr[0])) return false;

//     let colzise=arr[0].length;

//     for (let array of arr){
//         if(array.length!==colzise)
//             return false;
//     }
//     return true;
// }


// console.log(
//     check_nested_array([
//         [1,2,3],
//         [4,5,6],
//         [8,9,0],
//     ])
// );



function proSum(arr){
    let pro=1;
    for (let i=0;i<arr.length;i++){
        let sum=0;
        
        for(let j=0;j<arr[i].length;j++){
            sum=sum+arr[i][j];
        }
        pro=pro*sum;
    }
    return pro;
}

let array=[[1,2,3],[4,5,6],[7,8,9]]
console.log(proSum([[1,2,3],[4,5,6],[7,8,9]]));



//Write Function to calculate the sum of nsedted array


function sumArray(arr){
    let pro=0;
    for (let i=0;i<arr.length;i++){
        let sum=0;
        
        for(let j=0;j<arr[i].length;j++){
            sum=sum+arr[i][j];
        }
        pro=pro+sum;
    }
    return pro;
}
console.log(sumArray([[1,2,3],[4,5,6],[7,8,9]]));


// total subarray -> n*(n+1)/2


// 1 augest



// print all subarray
let a=[1,2,3,4];

for (let i=0;i<a.length;i++){
    for(let j=i;j<a.length;j++){
        let b=[];
        for (let k=i;k<=j;k++){
            b.push(a[k]);
           
        }
         console.log(b);
    }

}




// print sum of all subarray



let ar=[1,2,3,4,5];
for (let i=0;i<ar.length;i++){
    
    for (let j=i;j<ar.length;j++){
        let sum1=0;
       for (let k=i;k<=j;k++){
        sum1+=ar[k];
       }
    console.log(sum1);
    }
    
}