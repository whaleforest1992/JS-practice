//Write a function called "table" which takes an input n, and prints 
//out n x 1 to n x 9
function table(n){
    for(let i = 1; i <= 9; i++){
        console.log(n + "*" + i + "=" + n*i);
    }
}
table(4);