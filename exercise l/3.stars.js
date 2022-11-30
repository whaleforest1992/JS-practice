//Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
function stars(n){
    let result = "";//先假定result的結果為無
    for(let i = 0 ; i < n; i++){
        result += "*";
    }
    return result;
}
console.log(stars(4));
console.log(stars(100));