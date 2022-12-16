//Write a function called "palindrome" that checks if the input string
//is a palindrome. palindrome：指倒正著念和反著念都相同的句子，前後對稱。
function palindrome(str){
    let i = 0; //從頭開始
    let j = str.length - 1;//從尾開始
    while(i < j){
        if(str[i] != str[j]){ //第i項 不等於 第j項
            console.log(false);
            return false;
        }
        i ++;
        j --;
    }
    console.log(true);
    return true;
}

palindrome("bearaeb"); // true
palindrome("Whatever revetahW"); // true
palindrome("Aloha, how are you today?"); // false