//Write a function called "isPrime" that takes an integer as input, and
//returns a boolean value that indicates if the input number is prime.
//確認這個數是不是質數，定義：從1開始到這個數為止，是否有其他數可以將其整除。
function isPrime(n){
    if(n == 1){
    return false;
    }
    //用for的作法
    // for(let starter = 2; starter < n;starter++) {
    //     if( n % starter == 0){
    //         return false;
    //     }
    // }
    // return true;
    
    //用while
    let starter = 2
    while(starter < n){
        if(n % starter == 0){
            return false;
        }
        starter ++;
    }
    return true;
    
}

console.log(isPrime(1)); // returns false
console.log(isPrime(5)); // returns true
console.log(isPrime(91)); // returns false
console.log(isPrime(1000000)); // returns false