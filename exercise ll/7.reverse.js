//Write a function called "reverse" that takes a string as input,
//and returns the reverse string.
function reverse(str){
    let result = "";
    for(let i =str.length -1 ; i >= 0 ;i--){
        result += str[i];
    }
    return result; //return要回傳你想要的結果，所以是放result，而不是reverse(str).
}

console.log(reverse("aser"));//記得有""才會被認為是string.

