console.log("This is Lecture 10th");
// Strings Quetions
//give a varible name , sepraeted by space write fcuntions
//1 -> convert into variblename to camel case
//2> convert this varible name to snake case

// convert the Strig into the camel case
function convertCamel(word){
    
    // Method 1 ->
    // let split=word.split(" ");
  
    // console.log(split.join(""))

    //Method 2->

    let ccase="";
    for (let i=0;i<word.length;i++){
        if(word[i]==' '){   // convert into the uppercase()
            ccase+=word[i+1].toUpperCase();
            i++; // skip the spases
        }
        else ccase+=word[i];  // all remaing print
    }
    ccase=ccase.replaceAll(" ",""); // replace the all ' '-> ''  

    console.log(ccase);


}
convertCamel("student First Name");

// convert the string into the snake
function convertSnake(str){
    let split=str.split(" ");
  
    console.log(split.join("_"))
}


convertSnake("student First Name");


//Reverse String
function reverseString(string) {
    let re=[];
    for (let j=string.length-1;j>=0;j--){
        
        re.push(string[j]);  
    }
        let main= re.join("")
        console.log(main);
    }

reverseString("Hello Bro") 


//Check string is paledrome
function paledromeString(str){   // also use above method
    let reseult=[]
    for (let i=str.length-1;i>=0;i--){
        reseult.push(str[i]);
    }
    let optimize=reseult.join("");
    
    if(optimize===str){
        return true;
    }
    else{
        return false;
    }
}

console.log(paledromeString("nayan"));



//find the no. of words in a string
function countWords(char){
    //Mthaod  1
    let count=char.trim().split(" ").length;
    console.log(count);

    //Method 2
    // let count=1;
    // for (let i=0;i<char.length;i++){
    //     if(char[i]==' '){

    //         count++;
    //     }
        
    // }
    // console.log(count);
}
countWords("This is accio job course")



//find the longest words in a string 
function longestWord(str){
   let words=str.split(" ");  
   let sting="";

   for (let i=0;i<words.length;i++){
    if(words[i].length>sting.length){
        sting=words[i];
    }
   }
   console.log(sting);

}
longestWord("This is accio job course");


//function to find the first non-repataing charater -> index and lastindexOf
function nonRepeting(job){
    job=job.trim(); 

    for (let i of job){
        if(job.indexOf(i)==job.lastIndexOf(i)){
            return i;
        }
    }
    return false;
}


console.log(nonRepeting("aabbcdde"));
