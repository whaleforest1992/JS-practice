//Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.
function position(str){
        for(i = 0 ; i < str.length ; i++){
        if(str[i] == str[i].toUpperCase()){
            return str[i] + " " + i; 
        }
    }
    return -1;
}
console.log(position("abcd"));// prints -1
console.log(position("AbcD"));// prints A 0
console.log(position("abCD"));// prints C 2
