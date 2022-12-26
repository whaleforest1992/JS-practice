//Write a function called "factorPrime" that takes an integer as input,
//and returns the prime factorization of the input.
//(prime factorization ：質因數分解)
//一個數如果可以被2整除，除到無法再除後，用3試試，以此類推，直到那個數為止。
function factorPrime(n){
    let answer = n + " = ";
    let p = 2; //從2開始除(最小質因數)
    while(p <= n ){
        if( n % p == 0){ //n除以p之後餘數等於0
            answer += p + " x "; //那這個p就是其中一個質因數，要把它放進answer裡
            n /= p; //把 n除上p後的數再放進這個while loop中
        }else{
            p++;
        }
    }
    answer = answer.substring(0 , answer.length -3);
    //.substring(int beginIndex, int endIndex) 用來擷取兩個索引位置之間的字串。
    console.log(answer);
}

factorPrime(1992);