//Arrow Function
//For Each Loop
//anonums fcuntion
//fucntion explresssion
//map ,filter
//this keyword


console.log("Advaced Functions: ")

/**************************Advacsed Functions*****************************************/

const arrow = (a) => {
    if (a % 3 == 0) return true;
    else return false;
};
console.log("Number is Divisble or not: ", arrow(10));


const isDivisible3 = (num) => !(num % 3);
console.log(isDivisible3(10));


const student = {
    name: "Siddharth",
    rollNo: 28,
    acsess: function result(status) {
        console.log(this.name, this.rollNo, status + " Status");
        console.log(this);
    },
    notacess: (resultStatus) => {
        console.log(this.name + " name " + resultStatus);
        console.log(this);
    }
}

student.acsess("passed");
student.notacess("Failed");



//multiplying the 2 each element
let arr = [2, 1, 6, 3, 9];

console.log(
    arr.forEach((value, index, array) => {
        value *= 2;
        array[index] = value;
        console.log(value, index, array);
    })
)
console.log(arr);



//print the age and name

let users = [
    { name: "Ramesh", age: 20 },
    { name: "Suresh", age: 26 },
    { name: "Rani", age: 40 }
];
console.log(
    users.forEach((val) => {
        console.log(val.name + " " + val.age);
    })
);





//map()
//transfrom into the new array
//return the array
//doest not chage the originar array

arr = [3, 2, 9, 0, 10];
let squaredarr = arr.map((value, index, array) => {
    return value * value;
})
console.log(squaredarr);


//transfrom the name of each to unppercase
users = [
    { name: "Ramesh", age: 20 },
    { name: "Suresh", age: 26 },
    { name: "Rani", age: 40 }
];

let unppercase = users.map((value) => {
    return {
        name: value.name.toUpperCase(),
        age: value.age
    };
})
console.log(unppercase);

//2. filter()

// let nums=[2,12,9,18,27];
// let oddNums=nums,filter((val,index))

let names = ["prajwal", "Bhavesh", "Uday", "Siddharth", "Neha"];
const chater5 = names.filter((val) => val.length > 5);
console.log(chater5);