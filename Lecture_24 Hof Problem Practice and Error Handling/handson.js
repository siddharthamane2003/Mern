//reduse() function 
// retrun whole array in result into single value.
// intialAccumulatorValue -> it extar varible to intila the Accumulator
// orinagl array will not chage

let arr = [2, 5, 3, 10, 34];

let sumArray = arr.reduce((acc, value, index) => {
    acc += value;
    // console.log(acc)
    return acc;
}, 0);
console.log(sumArray)
//when we use the console.log(acc)
// o/p->
// 2
// NaN
// NaN
// NaN
// NaN
// undefined

// when we use the retrun -> 54 correct o/p

let counteven = arr.reduce((accumlator, index, value, a) => {
    accumlator += value % 2 == 0
    return accumlator;
}, 0)
console.log(counteven)
console.log(arr)


/* find the frequency of each element */
let fruits = ["apple", "guava", "Kiwi", "guava", "kiwi", "Apple", "Guava"];

// in object method 
// function frequencyString(fruits){
//     let obj={};
//     for (let i in fruits){
//         obj[fruits[i].toLowerCase()]=(obj[fruits[i].toLowerCase()]||0)+1
//     }

//     return obj;
// }
// console.log(frequencyString(fruits))


let frequencyString = fruits.reduce((acc, index, val, f) => {
    acc[fruits[val].toLowerCase()] = (acc[fruits[val].toLowerCase()] || 0) + 1
    return acc
}, {})
console.log(frequencyString)



//find() -> 
//return a value 
//retrun 1st element that satisfies the condtion

let firstKiwi = fruits.find((val, index, arr) => val.toLowerCase() === "kiwi")
console.log(firstKiwi)
//o/p->Kiwi


/* =============== Practice problems ================ */
/* Print the most suitable HOFs for below problems, and also write why you chose that HOF */

const users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: false },
    { name: "Charlie", age: 22, isActive: true },
    { name: "Diana", age: 28, isActive: false },
    { name: "Ethan", age: 35, isActive: true },
];

/* Q1: given an array of object, containing details of users, console the name of first user aged above 30 */
console.log(users.find(val => val.age > 30))
// that extact proprty of filter()-> it will retrun the fisrt value  that satisfies the constion




/* Q2: Print the name & age of each user */
//  beacuse we use forEach for the objet itarative 
// it will not breack till the last element
// and quition also same asking

let printUser = users.forEach((value, index, arr) => {
    return (value.name, value.age);
})
console.log(printUser)


/* Q3: function to create an array of names from above users 
o/p: ["Alice", "Bob", "Charlie", "
iana", "Ethan"]
*/

// let newArray=users.map((value)=>{
//     return value.name
// })

let newArray = users.map((value) => value.name)
console.log(newArray)

/* Q4: function to display all the active users from above users array */
// small Obsewrvation -> 
// if the condition will satsfies the it will retrun the boll value 
// then (value)=>value.isActive)
// correct or the (value)=>value.isActive) ===true correct
// fileter() -> it used for the if the condtion will satfies then retrin the resutl according to that
//

let activeUser = users.filter((value) => value.isActive);
console.log(activeUser)

/* Q5: function to find the sum of age for all users below 30 */
// first conditon that below 30 -> filster
// sum of age so we have to use the reduse()


let below30sum = users
    .filter(users => users.age < 30)   // pick users below 30
    .reduce((acc, users) => acc + users.age, 0); // add their ages

console.log(below30sum);




/* Q6: function to get the names of all active users  */
// filetr ()-> for the consdtion 
// map() -> convert itnot the array

let getNames = users
    .filter((value) => value.isActive)
    .map((v) => v.name)

console.log(getNames)



//Higther Order Function -> fcuntion that pass as argument and also retrun the funtion
// in above we add fcuntion pass as the argument to the calculator function


function calculator(a, b, oprator) {
    return oprator(a, b);
}

function add(a, b) {
    return a + b
}

function mul(a, b) {
    return a * b
}

function sub(a, b) {
    return a - b
}

let hof34 = calculator(30, 10, sub);
console.log(hof34);



/*
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again,
                it will find the result from a cache where result of
                previous function call with same args is stored
*/
// memoization-> we do not do aging work