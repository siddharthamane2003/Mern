// Home Work
/* Do each deletion question, and instead of deletion, do insertion */
const arr3 = [1,2,3,4,5];
let m=10;

for (let i=arr3.length-1;i>=0;i--){
   
   arr3[i+1]=arr3[i];
   
}
arr3[0]=m;
console.log(arr3)


/* Q: Rotate array right (clockwise) by 1 element */ 
//  5 element shift to first

let a=[1,2,3,4,5]
    let n=a.pop();
    a.unshift(n);

console.log(a);

/* Q: Rotate array left (anti - clockwise) by 1 element */
//shift 1 st elemernt to last

let c=[1,2,3,4,5]
let b=c.shift();
c.push(b);
console.log(c);


/* Q: Write a function to Rotate array right (clockwise) by k element */ 
function rotateClock(arr,k){
    for (let i=0;i<arr.length;i++){
        let b=arr.pop();
        arr.unshift(b);
        
        if((i+1)==k){
            console.log(arr);
        }
    }
}

rotateClock([1,2,3,4,5,6],3)

/* Q: Write a function to Rotate array left (anti - clockwise) by k element */ 
function rotateAnticlock(arr1,k1){
    for (let i=0;i<arr1.length;i++){
        let b=arr1.shift();
        arr1.push(b);
        
        if((i+1)==k1){
            console.log(arr1);
        }
    }
}

rotateAnticlock([1,2,3,4,5,6],5)