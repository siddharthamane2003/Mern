// let arr=[2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
// let map=new Map();

// for (let i=0;i<arr.length;i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1);
//     }
//     else{
//         map.set(arr[i],1);
//     }
// }
// let obj={};


// console.log("Method 1 printing");
// for (let key of map.keys()) console.log(key,map.get(key));


// console.log("Method 2 of Printing");
// for (let key of map.keys()) obj[`${key}`] = map.get(key);

// console.log(obj);

// console.log("Method 3 of Printing");
// for (let [key, value] of map) console.log({ key, value });


/* About Rest operator and destructuring
const [a, ...b] = [1,2, 4, 5];
console.log({a, b}); */

/* Question: Remove Duplicates from an array and print the array */
// arr = [1, 2, 3, 2, 3, 5, 1, 3, 2];
// console.log([...new Set(arr)]);

/* Find the frequency of all words in a paragraph (only spaces, A-Z & a-z letters will be there) */
// let paragraph =
//   "Hello how are you How was your day Did you eat hoW did you find that";

// let words = paragraph.trim().toLowerCase().split(" ");

// let wordsMap = new Map();

// for (let i = 0; i < words.length; i++) {
//   wordsMap.set(words[i], (wordsMap.get(words[i]) || 0) + 1);
  /* OR THIS
  if(wordsMap.has(words[i])){
    wordsMap.set(words[i], wordsMap.get(words[i]) + 1);
  } else {
    wordsMap.set(words[i], 1);
  }
 */
// }

// let wordsFreq = {};

// for (let [key, value] of wordsMap) wordsFreq[key] = value;

// console.log(wordsFreq);



/* ============== Anagrams ============== */

// listen
// silent (✅)

// Create a map of silent, then traverse in listen and 
// start decrementing the freq of each element if it exists in map */

// function Anagrams(a,b){
//   if(a.length!==b.length) return false;

//   let obj={};
//   for (let i=0;i<a.length;i++){
//       obj[a[i]]=(obj[a[i]] || 0)+1;
//   }

//   for (let i=0;i<b.length;i++){
//   if(!obj[b[i]]) return false;
//     obj[b[i]]=obj[b[i]]-1;
//   }

//   for (let value of Object.values(obj)) if (value) return false;

//   return true;

// }

// console.log(Anagrams("mad","dam"))


/* ============== Recursion =============== */
/* Bahane dhundne h ki recursive function ko kese reuse kr sake */

// Two things to look for a correct recursive code
// A. Base condition must always get hit
// B. Combining return value of recursive function and current function

// function fact(n){
//   if (n==0) return 1;   //base constion means that  numbrse snot couusre in ouser progeam taht is inlavid

//   return n*fact(n-1);   /// opation actual code 
// }
// console.log(fact(5)); // code uput in revsre corder  5 , 4 , 3 ,2 , 1 = 120 



// function prin1toN(N){
//   if(N==0) return;

//   // console.log(N) // rerevsre order 10 to 1
//   prin1toN(N-1);
  
//    console.log(N)  //kepp in mind  1 to 10 
// }
// prin1toN(10) // code output in sequance wise 




