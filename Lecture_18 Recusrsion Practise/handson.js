let output=[];
function printParathesis(n,str="",i=0,open=0,close=0){
    if (open<close) return;
   
    if(i==n){
        if(open==close) {
            output.push(str);
        }
        return;
    }

    printParathesis(n,str+'(',i+1,open+1,close);
    printParathesis(n,str+')',i+1,open,close+1);
}

printParathesis(6);
console.log(output);


function swapping(str,i=0,j=0){
    let arr=str.split("");

    [arr[i],arr[j]]=[arr[j],arr[i]];

    return arr.join("");
}
swapping("abc");

let ar=[];
function permutationPattern(s,ind=0){
    
        if(ind==s.length-1){
                ar.push(s);
                return;
        }
        for (let i=ind;i<s.length;i++){
            let store=swapping(s,i,ind);
            permutationPattern(store,ind+1);
    }
}
permutationPattern("abc");
console.log(ar);