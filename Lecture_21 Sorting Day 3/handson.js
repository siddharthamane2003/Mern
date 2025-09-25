//////////////////////// Partition Function (Quick Sort step) /////////////////////////

function partitionArray(nums) {
    let length = nums.length;
    let pivot = nums[length - 1];
    let pivotIndex = 0;

    for (let i = 0; i < length; i++) {
        if (nums[i] <= pivot) {
            [nums[i], nums[pivotIndex]] = [nums[pivotIndex], nums[i]];
            pivotIndex++;
        }
    }

    return nums;
}

let sampleArr = [3, 1, 6, 2, 8, 7, 4];
console.log(partitionArray(sampleArr));

//////////////////////////// sort() in JavaScript ////////////////////////////

let numbers = [3, 1, 6, 2, 8, 7, 4];
console.log(numbers.sort());            // default sort (lexicographic)
console.log(numbers.sort().reverse());  // reverse order

// Ascending order using comparator
numbers.sort((x, y) => x - y);
console.log(numbers);

// Descending order using comparator
numbers.sort((x, y) => y - x);
console.log(numbers);

//////////////////////////// String Sorting ////////////////////////////

console.log("apple".localeCompare("banana"));
console.log("banana".localeCompare("apple"));
console.log("apple".localeCompare("apple"));

let fruitList = ["apple", "banana", "cherry"];
fruitList.sort((a, b) => a.localeCompare(b));
console.log(fruitList);

console.log("a".localeCompare("A"));

//////////////////////////// Sorting Objects ////////////////////////////

let pupils = [
  { fullName: "Kiran", age: 34, rollNo: 10 },
  { fullName: "Ramesh", age: 6, rollNo: 7 },
  { fullName: "Suresh", age: 34, rollNo: 12 },
];

pupils.sort((a, b) => a.age - b.age);  
console.log(pupils);

pupils.sort((a, b) => {
    if (a.age === b.age) return a.rollNo - b.rollNo;
    return a.age - b.age;
});
console.log(pupils);

//////////////////////////// Sorting Nested Arrays ////////////////////////////

const pairs = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];

// Sort by first element, then second if equal
pairs.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
});
console.log(pairs);