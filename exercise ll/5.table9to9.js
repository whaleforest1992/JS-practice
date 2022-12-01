//Write a function called "table9to9" that prints out the
//multiplication table
function table9to9(){
    for(let i = 1; i<=9; i++){
        for(let j = 1; j <= 9 ; j++){
            console.log(i + "*" + j + "=" + i*j);
        }
    }
}

table9to9();
