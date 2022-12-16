//Write a function called "confirmEnding" that takes 2 strings as 
//input, and returns a boolean value that indicates if the first 
//input ends with the second input. str1的後面是否會和str2相等
function confirmEnding(str1,str2){
    let k = str1.length -1; //str1從後面開始要和str2的後面做比對
    for(let i = str2.length -1; i >= 0; i--){
        if(str2[i] != str1[k]){
            return false;
        }else{
            k--;
        }
    }
    return true;
}
//如果是從頭開始比呢？ confirmStarting
function confirmStarting(str3,str4){
    let a = 0 ; //str3[0]：str3的第0項
    for (let b = 0 ; b < str4.length ; b++){ //b = 0 表示從頭開始
        if(str4[b] != str3[a]){
            return false;
        }else{
            a++;
        }
    }
    return true;
}//尚未完成，還有問題

// console.log(confirmEnding("Bastian", "n")); // true
// console.log(confirmEnding("Connor", "n")); // false
// console.log(confirmEnding("Open sesame", "same")); // true

console.log(confirmStarting("Bastian", "B")); // true
console.log(confirmStarting("Connor", "")); // false(尚未完成，還有問題)
console.log(confirmStarting("Open sesame", "Open")); // true