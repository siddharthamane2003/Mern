function hello() {
  console.log("My name is siddharth");
}
hello();

// A function stored in a variable is called a function expression.
// You call the function using that variable.
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 7)); // 12

//the Arrow function treted as the variable and if we are trying
//to access the before intilaztion (Hositing) it will give the Referance Error

// console.log(store);
// const store=((value)=>{
//     return value**2;
// });



//Mathod 1
const pow = (val) => val * 2; //only one statment use these
console.log(pow(3));//6



//Method 2:
const store = ((value) => { // more that one statment
  return value ** 2;
});
console.log(store(8)); //64


/* write an arrow function to check if a number is divisible by 3 or not */
//Single statement
const isDivisibleBy3 = (value1) => !(value1 % 3);
console.log(isDivisibleBy3(8)); //false
console.log(isDivisibleBy3(90)); //true


/* Note: arrow functions do not have their own `this` keyword, they uses parent's `this` */
//this keyword is not acesss in arrow fnction it will give the undefined
//This keyword is acces in normal function


let accio = {
  name: "Raj",
  RollNo: 90,
  Gender: "Mail",
  cal: function sum(a, b) {
    console.log(a + b);
    console.log(this.name);
  }
}
accio.cal(10, 70);
//80
//Raj



let acciojob = {
  name: "Riya",
  RollNo: 3,
  Gender: "Femail",
  calcu: (status) => {
    console.log(this.RollNo + "Roll No" + status);
    console.log(this.name);
  }
};

acciojob.calcu("Pass");
// o/p:
// undefinedRoll NoPass
// undefined



/* =========== Anonymous Functions =========== */
//the function which has no name
const no_name = function (a, b) {
  return a * b;
}
console.log(no_name(90, 70));


/* =========== Higher Order Functions (HOFs) =========== */
//The Function Which takes the function as argument or the retrun as argument

//1. ForEach()
// - apples the call back function to each value
// - intrate the each element and break , contiune not afftes on these
// - doest not chage the original array
// - retrun undefined
// - it can be used to itarte throuh the array and do some oparation on it
// - in that argument it will take 3 parameter -> value , index , array

let arr = [3, 2, 4, 5, 67, 1, 7];
console.log(
  arr.forEach((value, index, array) => {
    value += 10;
    arr[index] = value;
    console.log(value, index, arr);
  })
);
console.log({ arr });


//print name and age of users array using forEach
let users = [
  { name: "Ramesh", age: 20 },
  { name: "Suresh", age: 10 },
  { name: "Rani", age: 40 },
];

console.log(
  users.forEach((value) => {
    console.log(value.name + " : " + value.age)
  })
)

//2. map()
// - transform the array
// - return array
// - does not chage the original array
// - it also have the index , value and array

let newArray = [10, 70, 40, 39, 2];

let divide = newArray.map((val, ind, arr) => {
  return val % 3;
});
console.log({ divide })

/* transform the name of each user to uppercase 
new array should be like this:

[
  { name: "RAMESH", age: 20 },
  { name: "SURESH", age: 10 },
  { name: "RANI", age: 40 },
];
*/

users = [
  { name: "Ramesh", age: 20 },
  { name: "Suresh", age: 10 },
  { name: "Rani", age: 40 },
];
let transform = users.map((val) => {
  return {
    name: val.name.toUpperCase(),
    age: val.age
  }
});
console.log(transform)



//3. filter()
// - kepps elments that passes the constions
// - retrun the array
// - does not chage the original array
// nums.filter((value , index , array)=>condition)

let filter = [10, 40, 3, 7, 2, 4, 5];
let oddNums = filter.filter((value, index, arra) => value % 2);
console.log(oddNums);

let names = ["Pranjal", "Bhavesh", "Uday", "Siddharth", "Neha"];

let length5 = names.filter((val, index, arr) => val.length > 5);
console.log(length5);


/* Practice Question */
/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],

  display: function () {
    // loop over players and display their id and scores
    for (let i of this.players) {
      console.log(i.id, i.scores);
    }
  },

  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */

    let newPlayer = { id: id, scores: [] };
    this.players.push(newPlayer);
    return this.players;
  },

  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    for (let pl of this.players) {
      if (pl.id == id) {
        pl.scores.push(score);
        return;
      }
    }
  },

  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/
    for (let p of this.players) {
      let sum = 0;
      let count = 0;
      let avg = 0;
      if (p.id == id) {
        for (let s of p.scores) {
          sum = sum + s;
          count++;
        }
        avg = sum / count;
        return avg.toFixed(3)
      }
    }
  },
  teamAverage: function () {
    /* calculate the average of scores of all players combined */
    let avrge = 0;
    let count = 0
    let sum = 0;
    for (let j of this.players) {

      for (let k of j.scores) {
        sum = sum + k;
      }
      count+=j.scores.length
    }
    avrge = sum / count;
    return avrge;
  }

};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67
console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57