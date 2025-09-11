//Binary Search

// function binarySeacrh(N){
//     let low=0;
//     let heigth=N;
//     while(low<=heigth){
//         let mid=Math.floor(low+(heigth-low)/2);

//         if(mid==N) return mid;

//         else if (mid>N) {

//              heigth=mid-1;;
//         }

//         else{
//            low=mid+1
//         }
//     }
//     return -1;
// }

// console.log(binarySeacrh(57))

//Binary Seach Array Also Index
// function binarySeacrhInarray(arr,N){
//     let low=0;
//     let heigth=arr.length-1;
//     while(low<=heigth){
//         let mid=Math.floor(low+(heigth-low)/2);

//         if(arr[mid]==N) return mid;

//         else if (arr[mid]>N) {

//              heigth=mid-1;;
//         }

//         else{
//            low=mid+1
//         }
//     }
// }
// console.log(binarySeacrhInarray([1,3,5,6,7,8,9],3))


/* Function to find the first index of target in a Sorted Array */ 

// function firstElment(arr,target){
//     let stor=-1;
//     let low=0;
//     let heigth=arr.length-1;
//     while(low<=heigth){
//         let mid=Math.floor(low+(heigth-low)/2);

//         if(arr[mid]==target){    
//             stor=mid;
//             heigth=mid-1;
//         }

//         else if (arr[mid]>target) {
//              heigth=mid-1;
//         }
//         else{
//             low=mid+1
//         }
//     }

//     return stor;
// }

// let arr = [1, 3, 6, 6, 6, 11, 11, 12];
// let target=6;

// console.log(firstElment(arr,target))



//lower Bound

// function lowrBound(arr,target){
//     let low=0;
//     let heigth=arr.length-1;
//     let index=arr.length;

//     while (low<=heigth){
//         let mid=Math.floor(low+(heigth-low)/2);

//         if(arr[mid]>=target){
//             index=mid;
//             heigth=mid-1;
//         }
//         else{
//             low=mid+1;
//         }
//     }
//     return index;
// }

// let arr = [1, 3, 6, 6, 6, 11, 11, 12];

// console.log(lowrBound(arr,11));

//upperBound

// function upperBound(arr,target){
//     let low=0;
//     let heigth=arr.length-1;
//     let index=arr.length;

//     while (low<=heigth){
//         let mid=Math.floor(low+(heigth-low)/2);

//         if(arr[mid]>target){ // if we have to fidn the fisrt or last occurance then muist use these "index=mid;  heigth=mid-1;"
//             index=mid;
//             heigth=mid-1;
//         }
//         else{
//             low=mid+1;
//         }
//     }
//     return index;
// }

// let arr = [1, 3, 6, 6, 6, 11, 11, 12];

// console.log(upperBound(arr,6));


///set

// let set=new Set([1,2,3,4,4,3,2,1]);

// //add the elmeetn .add

// set.add(12)
// set.add(45)
// set.add(90)
// set.add(8)


// //check values is preswent ot not
// console.log(set.has(4));
// console.log(set.has(5));

// console.log(set.size);

// //delete value in set also retrun true or false if presenmt por not

// console.log(set.delete(10),set) //false ->10 
// console.log(set.delete(4),set);

// console.log(set);



// let arr=[2,3,4,1,0,1,2,3,4,5,10];

// let set=new Set(arr); // use most 
// let arr1=[...set]; // convert the each elment into the array 
// console.log(arr1);

// let arr11 = Array.from(set); // convert into the aryy using the method
// console.log(arr11)

// let set2 = new Set([...arr]); //each elment will take and remove dupliacte
// let arr2 = [...set2]; // convret the inot the array each value

// console.log(arr2);


//Map

// let map=new Map([
//     ["name1","Siddharth"],
//     ["name2","Sidd"]
// ]);

// map.set("name3","S")
// map.set("name1","Rahul"); // add key-value

// console.log(map.has("name3"))  //present or not


// console.log(map.get("name1")); //get the value of specific key

// console.log(map.delete("name3")) // also retrun true ort false is present or not ;


// console.log(map);


// for (let i of map){  // for of... also apllicable to set
//     console.log(i[0],i[1]);
// }

// for (let i of map.keys()){  //geting keys
//     console.log(i);
// }

// let mapArra=[...map]; // map convert into the array
// console.log(mapArra);


//interscetion

// let arr4 = [1,2,4,5,6,3], arr5 = [2,5,6,3,1,3];

// let interscetion=[];

// let unpie=new Set(arr4); ///remove theduplacte elment 

// for (let i=0;i<arr5.length;i++){
//     if(unpie.has(arr5[i])){
//         interscetion.push(arr5[i])
//     }
// }

// interscetion=[...new Set(interscetion)]; remove theduplacte elment 
// console.log(interscetion);


/* Another way to execute above line
let intersectionSet = new Set (intersection);
intersection = [...intersectionSet];
 */

//union

// let ree=new Set([...arr4,...arr5]);
// console.log([...ree]);
