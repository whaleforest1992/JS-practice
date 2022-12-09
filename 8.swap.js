//Write a function called "swap" that takes a string as input, 
//and returns a new string with lowercase changed to uppercase,
// uppercase changed to lowercase.
function swap(str){
    let result = "";
    for(let i = 0; i< str.length; i ++){//i只能小於str.length
        if(str[i] == str[i].toUpperCase()){//要改變每一個字元，所以是作用在str[i]上
            result += str[i].toLowerCase();
        }else{
            result += str[i].toUpperCase();
        }
    }
    return result;
}

console.log(swap("LFP Edfae"));
