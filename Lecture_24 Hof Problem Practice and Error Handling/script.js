console.log("This is 24th Lecture")


//  4->  reduse() function
//  - return a single value -> it will do each ele. oparation and return into single value
//  - intialAccumulatorValue -> it is value to intilzie the accumaltor
//  - original array will not change

let arr = [2, 5, 3, 10, 34];

let sum = arr.reduce((accumlator, val, index, array) => {
    accumlator += val;
    return accumlator;
}, 0);

console.log(sum);

//Find the count of even numbers

let CountEven = arr.reduce((accumlator, val, index, array) => {
    accumlator += val % 2 == 0;

    return accumlator;
}
    , 0)
console.log(CountEven);

//find the freq. of each element
let fruits = ["apple", "guava", "kiwi", "Guava", "Apple", "kiwi", "Guava"];

function freQof(fruits) {
    let obj = {};

    for (let i in fruits) {
        obj[fruits[i].toLowerCase()] = (obj[fruits[i].toLowerCase()] || 0) + 1;
    }
    return obj;
}
console.log(freQof(fruits));


let ReduceFreq = fruits.reduce((fre, val, ind, A) => {
    fre[val.toLowerCase()] = (fre[fruits[ind].toLowerCase()] || 0) + 1;

    return fre;

}, {})

console.log(ReduceFreq);


//5 -> find ()
// - return value
// - return first element that mathces the condition

let findKiwi = fruits.find((v, index, arr) => v.toLowerCase() === "kiwi");
console.log(findKiwi);

/* Print the most suitable HOFs for below problems, and also write why you chose that HOF */

/* Q1: given an array of object, containing details of people, console the name of first user aged above 30 */

const people = [
    { name: "Siddharth", age: 22, isActive: true },
    { name: "Amit", age: 35, isActive: false },
    { name: "Neha", age: 28, isActive: true },
    { name: "Rajesh", age: 42, isActive: false },
    { name: "Meena", age: 31, isActive: true }
];

/// why the filter() -> beacuse the in question tells that first use that above 
// that extact proprty of filter()-> it will retrun the fisrt value  that satisfies the constion

let greter30 = people.find(value => value.age > 30)
console.log(greter30.name);

//Q2 : print the name and age of each user
//  beacuse we use forEach for the objet itarative 
// it will not breack till the last element
// and quition also same asking

people.forEach((values) => {
    console.log(values.name + " : " + values.age)
}
)


/* Q3: function to create an array of names from above people 
o/p: ["Alice", "Bob", "Charlie", "Diana", "Ethan"]
*/
// map () -> it will retrun the array
// trnsfrom the oginal array 
let arrPrint = people.map((ele) => ele.name);
console.log(arrPrint)


//Q4 :function to display all the active usres from the above usres array
//// fileter() -> it used for the if the condtion will satfies then retrin the resutl according to that

let activeUser = people.filter((element) => {

    if (element.isActive)
        return element
});
console.log(activeUser)


/* Q5: function to find the sum of age for all people below 30 */
// first conditon that below 30 -> filster
// sum of age so we have to use the reduse()


let below30sum = people
    .filter(people => people.age < 30)   // pick people below 30
    .reduce((acc, people) => acc + people.age, 0); // add their ages

console.log(below30sum);



/* Q6: function to get the names of all active people  */
// filetr ()-> for the consdtion 
// map() -> convert itnot the array

let getNames = people
    .filter((value) => value.isActive)
    .map((v) => v.name)

console.log(getNames)


//Higther Order Function -> passing a function as an arguement & returning a function */

// in above we add fcuntion pass as the argument to the calculator function


function calculator(a, b, oprator) {
    return oprator(a, b);
}
function multilpy(a, b) {
    return a * b;
}
function addition(a, b) {
    return a + b;
}

function substarct(a, b) {
    return a - b;
}
let sum34 = calculator(3, 4, addition);
console.log(sum34)



/* ========================Error handling=========================================*/
//order of exterion that cath then finall will extcte
// why we use the finaly
// Simple Reasons:
// Cleanup tasks
// Example: closing files, stopping timers, clearing memory.
// Even if an error happens, you don’t want resources to stay open.
// Always execute important code
// Example: logging actions, resetting variables, saving state.
// You want this code to run whether the try was successful or an error occurred.



try { ///all code will inside try block
    console.log(varibel)
    let varibel = 90;
}
catch (error) { // error handling 
    console.log(error.message);
    console.log(error)
    console.log(error.stack)
}
finally { // every time will extte
    console.log("Every time it finally will run..")
}


/* 
once --> restricts a function to be called more than once
memoization --> if a function is called with same args as before, it will not calculate the result again, 
                it will find the result from a cache where result of 
                previous function call with same args is stored
*/