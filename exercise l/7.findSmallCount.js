//Write a function called "findSmallCount" that takes one array of integers and one integer as input, and returns an integer indicating how many elements in the array is smaller than the input integer.
function findSmallCount(arr,n){
    let counter = 0; //有多少個counter小於n
    for(let i = 0; i < arr.length ; i ++){
        if(arr[i] < n){
            counter++;
        }
    }
    return counter;
}

console.log(findSmallCount([1, 2, 3], 2)); // returns 1
console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0