//Write a function called "findSmallerTotal" that takes one array of 
//integers and one integer as input, and returns the sum of all 
//elements in the array that are smaller than the input integer. 
function findSmallerTotal(arr,n){
    let sum = 0;//一開始的總合為 0
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] < n){
            sum +=arr[i]; //利用 += 使array中的數值相加。
        }
    }
    return sum;
}


console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0
