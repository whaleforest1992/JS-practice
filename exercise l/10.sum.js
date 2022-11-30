//Write a function called "sum" that takes one array of numbers, 
//and return the sum of all elements in the input array.

function sum(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result +=arr[i];
    }
    return result;
}

consol.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
consol.log(sum([])); // return 0
consol.log(sum([-10, -20, -30])); // return -60