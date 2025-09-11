console.log("Lecture 15th")
//tc->O(N)
function sumNNo(N){
    if(N<=0) return 0;

    return N+sumNNo(N-1);
}
console.log((sumNNo(10)));

//Gcd->Greteste common Dicsion ->  the gretest numbers which will divide the both number 
//t.c->
function gcd(a,b){
    
    while (a>0){
        let temp=a; 
        a=b%a;
        b=temp;
    }

   console.log(b);
    
}
gcd(8,32)



function recursiveGcd(x,y){
    if(x==0) return y;

    
    return recursiveGcd(y%x,x);
}
console.log(recursiveGcd(15,25))


//gcd(a,b,c)=gcd(gcd(a,b),c)

//Gcd Of Array
let arr=[27,12,18,24,30];
let getArr=0;

for (let i=0;i<arr.length;i++){
    getArr=recursiveGcd(getArr,arr[i]); // gcd will take gcd(a,b,c)=gcd(gcd(a,b),c) array[i]
}
console.log(getArr);


//fibonacci Series
//tc->O(2 raise N)
//f(n)=f(n-1) +f(n-2)

function fibonacci(N){
    if(N==0) return 0;
    if (N==1) return 1;

    return fibonacci(N-1)+fibonacci(N-2);
}
console.log(fibonacci(7))



//binary expnasion

function binaryExpnsio(a,b){
        let pow=a**b;
        console.log(pow);
}
binaryExpnsio(2,10);


//rescusive approch

function exponant(p,q){
    if(p==0) return 1;
    if(q==1) return p;

    let temp=exponant(p,Math.floor(q/2));

    return temp*temp*p**(q%2);

}
console.log(exponant(5,15));






