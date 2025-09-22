console.log("This is Lecture 19th");

function stepSort(arr) {
    let n = arr.length;
   

    for (let i = 0; i < n; i++) {
        let swap=false;
        for (let j = 0; j+1 < n-i;j++) {    //j+1 -> for the on range //n-i-> each intarrttion  
           
            if (arr[j] > arr[j+1]) {        //j=0 -> 1st elment and  j+1 -> next elment , 
                swap=true;            
                [arr[j] ,arr[j+1]]=[arr[j+1],arr[j]]
                
            }
        }
        if(!swap){ //array alredy soretd then break
            break;
        }

    }

    return arr;
}

// Example

console.log(stepSort([4, 1, 3, 7, 5]));
