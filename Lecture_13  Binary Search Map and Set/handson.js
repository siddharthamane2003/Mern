//Binary Search

// function binarySearchSingle(num){
//     let start = 0;
//     let end = num;
//     while(start <= end){
//         let mid = Math.floor(start + (end - start) / 2);

//         if(mid == num) return mid;

//         else if (mid > num) {
//             end = mid - 1;
//         }
//         else{
//             start = mid + 1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearchSingle(57))


//Binary Search in Array (Index)
// function binarySearchIndex(list, key){
//     let start = 0;
//     let end = list.length - 1;
//     while(start <= end){
//         let mid = Math.floor(start + (end - start) / 2);

//         if(list[mid] == key) return mid;

//         else if (list[mid] > key) {
//             end = mid - 1;
//         }
//         else{
//             start = mid + 1;
//         }
//     }
// }
// console.log(binarySearchIndex([1,3,5,6,7,8,9], 3))


/* Function to find the first index of target in a Sorted Array */ 

// function firstOccurrence(list, key){
//     let result = -1;
//     let start = 0;
//     let end = list.length - 1;
//     while(start <= end){
//         let mid = Math.floor(start + (end - start) / 2);

//         if(list[mid] == key){    
//             result = mid;
//             end = mid - 1;
//         }
//         else if (list[mid] > key) {
//             end = mid - 1;
//         }
//         else{
//             start = mid + 1;
//         }
//     }
//     return result;
// }

// let numbers = [1, 3, 6, 6, 6, 11, 11, 12];
// let searchVal = 6;

// console.log(firstOccurrence(numbers, searchVal))


//Lower Bound

// function lowerBound(list, key){
//     let start = 0;
//     let end = list.length - 1;
//     let idx = list.length;

//     while (start <= end){
//         let mid = Math.floor(start + (end - start) / 2);

//         if(list[mid] >= key){
//             idx = mid;
//             end = mid - 1;
//         }
//         else{
//             start = mid + 1;
//         }
//     }
//     return idx;
// }

// let values = [1, 3, 6, 6, 6, 11, 11, 12];

// console.log(lowerBound(values, 11));


//Upper Bound

// function upperBound(list, key){
//     let start = 0;
//     let end = list.length - 1;
//     let idx = list.length;

//     while (start <= end){
//         let mid = Math.floor(start + (end - start) / 2);

//         if(list[mid] > key){ 
//             idx = mid;
//             end = mid - 1;
//         }
//         else{
//             start = mid + 1;
//         }
//     }
//     return idx;
// }

// let arrNums = [1, 3, 6, 6, 6, 11, 11, 12];

// console.log(upperBound(arrNums, 6));


///Set Example

// let sampleSet = new Set([1,2,3,4,4,3,2,1]);

// sampleSet.add(12)
// sampleSet.add(45)
// sampleSet.add(90)
// sampleSet.add(8)

// console.log(sampleSet.has(4));
// console.log(sampleSet.has(5));

// console.log(sampleSet.size);

// console.log(sampleSet.delete(10), sampleSet) 
// console.log(sampleSet.delete(4), sampleSet);

// console.log(sampleSet);


// let numsArr = [2,3,4,1,0,1,2,3,4,5,10];

// let uniqueSet = new Set(numsArr); 
// let arrFromSet = [...uniqueSet]; 
// console.log(arrFromSet);

// let anotherArr = Array.from(uniqueSet); 
// console.log(anotherArr)

// let setConverted = new Set([...numsArr]); 
// let arrUnique = [...setConverted]; 

// console.log(arrUnique);


//Map Example

// let detailsMap = new Map([
//     ["user1","Siddharth"],
//     ["user2","Sidd"]
// ]);

// detailsMap.set("user3","S")
// detailsMap.set("user1","Rahul"); 

// console.log(detailsMap.has("user3"))  
// console.log(detailsMap.get("user1")); 
// console.log(detailsMap.delete("user3")) 

// console.log(detailsMap);

// for (let entry of detailsMap){  
//     console.log(entry[0], entry[1]);
// }

// for (let key of detailsMap.keys()){  
//     console.log(key);
// }

// let mapArray = [...detailsMap]; 
// console.log(mapArray);


//Intersection

// let a1 = [1,2,4,5,6,3], a2 = [2,5,6,3,1,3];

// let intersectionList = [];

// let uniqSet = new Set(a1);  

// for (let i=0; i<a2.length; i++){
//     if(uniqSet.has(a2[i])){
//         intersectionList.push(a2[i])
//     }
// }

// intersectionList = [...new Set(intersectionList)];
// console.log(intersectionList);


//Union

// let unionSet = new Set([...a1,...a2]);
// console.log([...unionSet]);
