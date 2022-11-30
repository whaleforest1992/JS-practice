//Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.
function isUpperCase(str){
    if(str.length == 0){
        return false;
    }
    return str[0] == str[0].toUpperCase()
}

console.log(isUpperCase("ABER")); //要記得defined為string
console.log(isUpperCase("aGDFE"));
console.log(""[0]);
//因為""[0]是undefined，所以沒辦法使用toUpperCase()，會發生TypeError
//為避免發生這件事，要先判斷str內是否為string，所以要在上面加上判斷式
console.log(isUpperCase("")); 