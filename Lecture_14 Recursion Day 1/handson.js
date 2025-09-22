 
let numbers = [2, 3, 4, 1, 0, 1, 2, 3, 4, 5, 10];
let numberFreqMap = new Map();

for (let i = 0; i < numbers.length; i++) {
  if (numberFreqMap.has(numbers[i])) {
    numberFreqMap.set(numbers[i], numberFreqMap.get(numbers[i]) + 1);
  } else {
    numberFreqMap.set(numbers[i], 1);
  }
}

let numberFreqObj = {};

 
for (let key of numberFreqMap.keys()) console.log(key, numberFreqMap.get(key));

 
for (let key of numberFreqMap.keys()) numberFreqObj[`${key}`] = numberFreqMap.get(key);

console.log(numberFreqObj);

 
for (let [key, value] of numberFreqMap) console.log({ key, value });

 
const [firstElement, ...remainingElements] = [1, 2, 4, 5];
console.log({ firstElement, remainingElements });

 
let numsWithDuplicates = [1, 2, 3, 2, 3, 5, 1, 3, 2];
console.log([...new Set(numsWithDuplicates)]);

 
let paragraph =
  "Hello how are you How was your day Did you eat hoW did you find that";

let wordList = paragraph.trim().toLowerCase().split(" ");

let wordFreqMap = new Map();

for (let i = 0; i < wordList.length; i++) {
  wordFreqMap.set(wordList[i], (wordFreqMap.get(wordList[i]) || 0) + 1);
}

let wordFreqObj = {};
for (let [word, freq] of wordFreqMap) wordFreqObj[word] = freq;

console.log(wordFreqObj);

 
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let charCount = {};
  for (let i = 0; i < str1.length; i++) {
    charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!charCount[str2[i]]) return false;
    charCount[str2[i]] = charCount[str2[i]] - 1;
  }

  for (let count of Object.values(charCount)) if (count) return false;

  return true;
}

console.log(areAnagrams("mad", "dam"));

 

// Factorial using recursion
function factorial(num) {
  if (num == 0) return 1; // base case
  return num * factorial(num - 1);
}
console.log(factorial(5)); // 120

// Print numbers from 1 to N
function print1toN(limit) {
  if (limit == 0) return;
  print1toN(limit - 1);
  console.log(limit);
}
print1toN(10);
