function fibonacii(n){

    if(n==0 || n==1) return n;

    return fibonacii(n-1)+fibonacii(n-2);

}

const Result=fibonacii(6);

console.log(Result);

// Another Way to solve this promble is : 


// Print fibonacci Series : 

const Fib=(Num)=>{

    let FirstNumber=0;
    let SecondNumber=1;
    let NextNumber;
    while(FirstNumber<=Num){
    NextNumber=FirstNumber+SecondNumber;
    
    console.log(NextNumber);

    FirstNumber=SecondNumber;
    SecondNumber=NextNumber;

    NextNumber++;

    }

}

const Result1=Fib(10);

