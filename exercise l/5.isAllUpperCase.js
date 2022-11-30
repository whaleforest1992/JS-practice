//Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
function isAllUpperCase(str){
    if (str.length == 0 ){
        return false;
    }

    let isAllUpperCase = true;//這題要反過來，先假設會得到true
    
    for(let i = 0 ; i<str.length ; i++){
        if(str[i] != str[i].toUpperCase()){
            isAllUpperCase = false;//如果for中發現有任何字元不是大寫，則將其改為false。
        }
    }
    return isAllUpperCase;
}
console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase(""));// returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false
console.log(isAllUpperCase("ABCDEdJKL"));