//Write a function called "mySort" that takes an array of integers 
//as input, and returns the sorted version of the input array.
//將arr內的數由小到大排好
//可以使用exercise II 9.findMin的概念先找到最小值
function findMin(arr){
    let min = arr[0];
    for(i = 0 ; i <= arr.length; i ++){
        if(arr[i] < min){
            min = arr[i]; 
        }
    }
    return min;
}

function mySort (arr){

}


mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]