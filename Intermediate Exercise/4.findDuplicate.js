//Write a function called "findDuplicate" that an array of integers 
//as inputs, and check if there's any duplicate values in the array.
function findDuplicate(arr){
    for(let i = 0 ; i < arr.length; i ++){ //假設兩個值，代表在arr中的第幾個
        for(let j = 0 ; j < arr.length ; j++){
            if( i != j && arr[i] == arr[j]){//如果兩個值不相等，卻在arr中有一樣的數，那就是重複了
                console.log(true);
                return true;
            }
        }
    }
    console.log(false);
    return false;
}
findDuplicate([1, 3, 5, 7, 9, 3]); // returns true
findDuplicate([]); // returns false
findDuplicate([3, 4, 5, 6, 7, 10000, 0, 7]); // returns true 
