//Write a function called "findMin" which takes an array as input,
//and returns the minimum element in the input array.
function findMin(arr){
    let min = arr[0];//先預設最小值就是第一個數
    for(i = 0 ; i <= arr.length; i ++){
        if(arr[i] < min){//如果第i項小於min
            min = arr[i]; //則將min改為第i項
        }
    }
    console.log(min);//不能放在return min下面一行，因為在執行return後這個function就結束了
    return min;

}
findMin([1, 2, 5, 6, 99, 4, 5]);
findMin([]);
findMin([1, 6, 0, 33, 44, 88, -10]);
