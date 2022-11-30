//Write a function called "findAllSmall" that takes one array of 
//integers and another integer as input, and returns an array of 
//integers that contains all elements that are smaller than the 
//input integer.

function findAllSmall(arr,n){
    let answer = []; //一開始的array是空的
    for(let i = 0; i < arr.length ; i ++){
        if(arr[i] < n){
            answer.push(arr[i]);//把 arr的第 i項 push到 answer的 array中。 
        }
    }
    return answer;
}

console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]