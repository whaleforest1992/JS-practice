//Write a function called "findNthMin", which takes an array of 
//integers and another integer n, and returns the nth smallest number
//in the given array. 回傳array中第n小的數字。
 //我要知道 1.誰比 n小  2.n排在arr中哪裡？
//for i from 0 to arr.length-1;(pseudocode偽代碼)
//for j from 0 to arr.length-1;(只是用來表示自己的coding邏輯)
function findNthMin(arr ,n){
    for(let i = 0 ; i < arr.length; i++){
        let counter = 0;
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[j] < arr[i]){
                counter++;//counter 表示有幾個比i小的數,i是第counter+1個數
            }   
        }
        if(counter == n-1){//所以當counter = n-1時;可以得到array中的第n個數。
            return arr[i];
        }
    }
}
console.log(findNthMin([1, 2, 3, 4, 5], 1));// returns 1
console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5

//回傳array中第n大的數字。
function findNthMax(arr,n){
    for(a = 0; a < arr.length; a++){
        let counter = 0 ;
        for(b = 0 ; b < arr.length; b++){
            if(arr[b] > arr[a]){
                counter ++;
            }
        }
        if(counter == n-1){
            return arr[a];
        }
    }
}
console.log(findNthMax([1, 2, 3, 4, 5], 1));// returns 5
console.log(findNthMax([1, 3, 5, 7, 9], 2)); // returns 7