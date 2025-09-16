function check(a){
    if(a=="") return false;
    
    let count=0;
   
    for (let i=0;i<a.length;i++){
        if(a[i]=='('){
            count++;
        }
        else {
            if(count>0){
                 count--;
            }
            else{
                return false;
            }
        }
    }
    
    if(count==0){
        return true;
    }
    else{
        return false;
    } 
}

console.log(check("(((()))()())"));
console.log(check("((())))"));

let ans=[]
function generateValidParenthesis(n,str="",i=0,o=0,c=0){
    
    if(o<c){
        return;
    }
    if(i==n){
        if(o==c){
            ans.push(str)
        }
        return ;
    }
    generateValidParenthesis(n,str+"(",i+1,o+1,c);
    generateValidParenthesis(n,str+")",i+1,o,c+1);

}
generateValidParenthesis(4)
console.log(ans);

//Time Complexity -> O(2^N)
//Space complixity -> O(N)


function abcPaternprint(s,i=0,j=0){
    let arr=s.split("");

    [arr[i],arr[j]]=[arr[j],arr[i]];
    str=arr.join("");

    return str;
}
console.log(abcPaternprint("abc"));