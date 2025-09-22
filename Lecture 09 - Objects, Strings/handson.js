///Split()
let String="Hello World";

// String=String.split(" ") // separte word by words space  
// String=String.split(""); // splits by charaters by charter

String=String.split("World") // [ 'Hello ', '' ] -> world -> return->""
console.log(String);



//rest oprtaor-> it will collect all the element in signle array
//rest use in the functions
function restOprator(name, ...newArray){
    console.log({newArray}); // Array 
    for (let i of newArray){  // intarte the newArray 
        name.push(i);     // Add elment of newArray to the name array
    }
    console.log({name}); // Array 
}

let name = ["Vijay","Mohan","Rahul","Siddharth","Amol"];
restOprator(name ,"XYZ","ABC","PQR");


//Deconstring
let [abc,...xyz]=["A","B","C"]
console.log({abc,xyz})


//Home work
/* HW: use spread operator with OBJECTS */
let object = {
    roll_no: 90,
    avg: 45,
    data: "Gangesh"
}

// Spread operator unpacks properties of 'object' into a new object
console.log("Spreaded Object:", { we: 2, no: 9, ...object });
