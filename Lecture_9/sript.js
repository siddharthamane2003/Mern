// console.log("Hello Bro..");

//single codes -> ''
let str='a';
console.log(typeof str); //string

//backtike ->  ` `
str=`a`;
console.log(typeof str); //string

//double codes
str="a";
console.log(typeof str); //string

str=['a','b','c']; 
console.log(typeof str); // object -> beacuase the array so that is object
console.log(typeof str[0]);


//case when we have must use double codes
str="Hi I'm Vaibhav";
console.log(str);

//case when must use single codes
str='Hi you must take "Javascipt" clasess';
console.log(str);

str=`hi I'm Vaibhav and you must take "Javascript clasess"`  // most of use in industry becasue it will all type of data will acess , store
console.log(str);

//some more function of back tiks -> we can insert any varibles inside backtikes
let person="Pratik";
str=`Hi I'm ${person} and you must takr "JavaScript clasess"`
console.log(str);

str=" We'r going to see some methods of string W "

//inlclueds() fcuntion -> returns if the given whole string/element or not  -> retrun boll values
console.log(str.includes('going'));

//replace function ()-> replace only the first occurance of 'W' with 'X'
console.log(str.replace("W","X"));
console.log({str}) // reaplace () doest not chages the original string

console.log(str.replaceAll("W","X"));  //reppaceALL() doest chages the orignial string
console.log(str);

//trim() -> remove all leading and trailing spaces -> last and first delete all spaces
console.log(str.trim())
console.log({str})



//substring() -> give substring  /// dosent chages the original string
console.log(str.substring(3,9)); //gives substring string staring from 3 and ending at index 8 (9-1)
console.log(str.substring(3))  // gives substring starting from the index 3 till end
console.log(str.substring("3")) // gives substring starting from the index 3 till end
console.log(str.substring(-3))  //all string retrun -3 -> start from 0 // 
console.log(str.substring(-3,-10)); // gives empty -> (0,0)   //return empty -> start from 0 and revrse so empty // -10 is out of bound
// the string will bound means-> the range of string -> 0 to the last index -> out of index -> retrun empty

console.log(str.substring(-3,10000)) //ramge(0,n) 0 to end print

//slice() ->almost same as substring , but chages (-) works differntly 
console.log(str.slice(3));  // (3,n)n-> last index
console.log(str.slice(3,5)) // gives elements from index  3 to 4
console.log(str.slice(-3)) // gives last 3 elemets ->3 element of last " W " 
console.log(str.slice());    //all string stored in array
console.log(str.slice(-100)) //gives all elemets  in case the numnber  is grter is grter than trhe length of string
console.log(str.slice(-9,0)) // empty starting is -9 and goes to reverase so -> empty string
console.log(str.slice(-9,-3)); // "String"


//split()-> splits the string based on given charater
console.log(str.split(','))

const line="Heloo weclome MERN stack course";
console.log(line.split(" "))

//toUpperCase()
console.log("hello".toUpperCase());

// Extra -> Wrapper Object // all methos of string , number , boll ,object
const string="Vaibhav";
const num=67;
const boll=true;
const obj1={
    name:"Vaibhav"
};
console.log(string.__proto__);
console.log(num.__proto__);
console.log(boll.__proto__);
console.log(obj1.__proto__);
console.log(Number("123"));

// spred and rest
//rest optrator -> always stu in last -> watch
//object -> watch
//spared oprator -> watch 
// deconstror -> watch
//HW-> use spread oprator with objects


//rest oprtor -> Rest operator (...) collects multiple values into a single array or object.
function addstudent(stu,...stuname){
    
    console.log({stuname}); //print the array
    for(let student of stuname){
        stu.push(student);
    }
    console.log({stu});
}
const stu=["rahul","riya","prem"];
addstudent(stu,"abhi")
addstudent(stu,"mangesh");


//  Destructuring = splitting an array or object into variables.
const [hi, ...bye] = ["Hi", "Bye", "Byee", "Byeeee"];  // rest ->...bye collect all data into one array
console.log({hi,bye});  // hi and bye is splits into the variable


//Spread (...) = expands/unpacks elements of an array or object into another array, object, or function arguments.
const arr1 = [1, 3, 5, 6];
console.log({arr1});
console.log("spreaded array: ", [0, ...arr1, 67, 678, 68]);
