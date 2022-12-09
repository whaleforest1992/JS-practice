//Write a function called "fib" that takes an integer $n$ as input,
//and returns the nth element of the Fibonacci Sequence.
function fid(n){
    if(n == 0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return (fid(n-1) + fid(n-2));
    }
    
}
console.log(fid(8));

//更好的做法
function fid1(n){
    let arr = [0,1];
    let i = 0;
    while(arr.length <= n ){
        arr.push(arr[i] + arr[i+1]);
        i++;
    }
    console.log(arr);
    console.log(arr[n]);
}

fid1(8);
