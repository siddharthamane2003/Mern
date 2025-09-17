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


//[ '(())', '()()' ]
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


//[ 'abc', 'acb', 'bac', 'bca', 'cba', 'cab' ]
//Time Complexity ->~O(N!)

function abcPattrenPrint(s,i=0,j=0){
    let arr=s.split("");

    [arr[i],arr[j]]=[arr[j],arr[i]];
    return arr.join("");
}

let strPermutation=[];
function permutation(s,ind=0){
        if(ind==s.length-1){
            strPermutation.push(s);
            return;
        }
        
    for (let i=ind;i<s.length;i++){
        let swappedstr=abcPattrenPrint(s,ind,i);

        permutation(swappedstr,ind+1);
    }
}
 
permutation("abc");
console.log(strPermutation);