// Pain and Parper method solve every problem
console.log("Heloo");


// Object
// why we need -> 
// what is object ->
// the key always trat as string 
// if the key is integer so obj[1] -> 1 is key of object

// Propery / keys Always Unique
let name ="Riya";
let age=35;
let location="Vita";
console.log(name , age , location);

// Object Creartion
const studentObj={
    name:"Siddharth",// name is property / key and siddharth is value
    age:22,
    adsress:"Vita"
};

// Acess Object
console.log("Student name :",studentObj.name);
console.log("Student age :",studentObj.age);

console.log("Student Adress: ",studentObj["adsress"]);


// Alternative way
const stdudentName="name";
console.log("Student Name: ",studentObj[stdudentName]);

// Upadte value of an object
stdudentName.name="Rohan";
console.log("Stundet name",studentObj.name);

// Add any property to an Object
studentObj.age="90";
console.log("Student age:",studentObj.age)


//  Delete The propertity
let DeleteObject = {
  name: "Piyush",
  skills: ["C++", "JavaScript", "MERN"],
  age: 21
};

console.log("Before delete:", DeleteObject);

// delete property
delete DeleteObject.age;
delete DeleteObject.skills;

console.log("After delete:", DeleteObject);


console.log("Talsk1");

// Task 1
let person={
    nav:"Mangesh",
    umr:50,
    loc:"Banerr"
}

person.loc="Nagpur";    //Upadte
console.log("Updated city",person.loc)

person.hobby="Siging";  //Add the property

console.log("Age of Person",person["umr"]); //print

console.log(person.loc);
console.log(person.hobby);


// console.log(person.adress.name); Give Error  inside seach 
// If Property is not exist then give the undefined 
// all property on left of dot(.) must be  not be not defined


// Nested Object -> Object inside object
const employee={
    name : "Raju",
    complay: "Accio Job",
    salary:"10LPA",
    adress:{
        addres1:"Bumkar Chauk",
        adres2:"Wakad",
        houseNumber:"31",
        city:"Pune"
    }
};
console.log({employee})
console.log("City of:",employee.name, "is" , employee.adress.city);




// Array Of Object
let  stduent_Array=[
    studentObj,
    {
        name:"Pulkit",
        age:27,
        adress:"Nashik",
        satadrad:12
    }
];

let combine_Object=[stduent_Array,studentObj]
console.log(combine_Object);  // Array of Object Method 1 
console.log(stduent_Array); //  Array of  Object Method 2


//Running the Object
for (let i in stduent_Array){
        console.log(i,":",stduent_Array[i]);
}
// Acesss Keys and Values
console.log("Keys:",Object.keys(studentObj));  // Return Keys
console.log("Values:",Object.values(studentObj));  // Retrun Values


// Using Object.keys() method to get the array of keys
for (let  j of Object.keys(studentObj)){
    console.log(j,":",studentObj[j]);
}

// Task 2
//print the name , age , and house no whose aderess == "Pune"
let classroom = [
  {
    name: "Siddhart",
    age: 21,
    gender: "Male",
    address: {
      address1: "Sgree Ram Nar",
      address2: "Mayni Road",
      city: "Vita",
      house_no: 12
    }
  },
  {
    name: "Aarohi",
    age: 19,
    gender: "Female",
    address: {
      address1: "MG Colony",
      address2: "Station Road",
      city: "Pune",
      house_no: 45
    }
  },
  {
    name: "Rohan",
    age: 23,
    gender: "Male",
    address: {
      address1: "Ganesh Nagar",
      address2: "Main Chowk",
      city: "Sangli",
      house_no: 101
    }
  },
  {
    name: "Meera",
    age: 25,
    gender: "Female",
    address: {
      address1: "Lakshmi Colony",
      address2: "Near Bus Stand",
      city: "Satara",
      house_no: 77
    }
  }
];

console.log("Details of Stduent resing in Pune");

for (let i in classroom) {
    // i repesent student Object
    // Assume extra check system in Dump

    if (classroom[i] && classroom[i].address && classroom[i].address.city == "Pune") {
        console.log(
            classroom[i].name, 
            classroom[i].age, 
            classroom[i].address.house_no
        );
    }
}


// This Keyword
// each object has its own this keyword
// this keword only acess one object 
// this keyword is unsed in functions inside Object
// this keword scope is inside Object
let obj={
    car:"Marcedeas GLS",
    color:"White",
    milage:10,
    currentSpeed:20,
    running :function running(){
        console.log("This is car is running!! Current Spedd is :",this.currentSpeed);        
    },
    stopCar:function stopCar(){
        currentSpeed=0
        console.log("This is car is stopeed");
    }
}
obj.running();
obj.stopCar();


// function inside object
let obj1={
    car:"Marcedeas GLS",
    color:"White",
    milage:10,
    currentSpeed:20,
    running :function running(){
        console.log("This is car is running!!");        
    }
}
obj1.running();


// Task 3 -> print the skils ',' spaerated , add skils in skils array

let portfolio = {
  name: "Piyush",
  skills: ["C++", "JavaScript", "MERN"],

  showSkills: function showSkills () {
    let allSkills = "";
    for (let skill of this.skills) {
      allSkills += skill + ", ";
    }
    console.log(allSkills);
  },

  addSkills: function addSkills (skillName) {
    this.skills.push(skillName);
  }
};

// Show skills before adding
portfolio.showSkills();  

// Add a new skill
portfolio.addSkills("Python");

// Show skills again after adding
portfolio.showSkills();


// Use for in.. loop every in obejct And Array


//Another use of object creation
const newObj=new Object();
newObj.a="a";
newObj.b="b";
newObj.c="c";
console.log({newObj});
