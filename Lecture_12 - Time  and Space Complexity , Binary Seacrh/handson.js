console.log("This is 12th Lecture..");
let num = 10;

// while(num > 0){
//     num *= 2;     
//     console.log(num)
// }

// let limit = 100;
// for (let k = 0; k < limit; k++){
//     if(k == 57){
//         console.log(k);
//         break;
//     }
// }

let numbers = [1,2,3,4,4,4,6,6,6,8];
let size = numbers.length;

let firstPos = -1;
let lastPos = -1;

for(let idx = 0; idx < size; idx++){
    if(numbers[idx] == 4){
        if(firstPos == -1){
            firstPos = idx;
        }
        lastPos = idx;
    }
}

if(firstPos !== -1){
    console.log({firstPos , lastPos});
}
//TC->O(N)

// Home Work
