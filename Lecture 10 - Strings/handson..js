//Write Function each word  reversed in string 
// consider the matrx and revrse  
// Logic -> [i] -> the words acess and [j] -> charter acess 
// then intarte the loop in reerse

// function revsreWord(str){
//     let words=str.split(" ");

//     for (let i=0;i<words.length;i++){
//         // console.log(words[i])

//         for (let j=words[i].length-1;j>=0;j--){

//             console.log(words[i][j]); 

//         }
//     }   
// }
// revsreWord("This is Accio Job");


//Write The function to each words of last charter will capital in string
//the funstion substing will fist to 2nd last then uppdercase last leter that both will combine and store 
// retrun word as output

function lastChar(string) {
    let rev = string.split(" ");    
    
    for (let i = 0; i < rev.length; i++) {
        if (rev[i].length > 0) {    
            let lastIndex = rev[i].length - 1;
            let word = rev[i].substring(0, lastIndex) + rev[i][lastIndex].toUpperCase();
            console.log(word);
        }
    }
}

lastChar("this is accio job portal");