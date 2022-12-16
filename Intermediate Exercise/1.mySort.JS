//Write a function called "mySort" that takes an array of integers 
//as input, and returns the sorted version of the input array.
//將arr內的數由小到大排好
//可以使用exercise II 9.findMin的概念先找到最小值，然後將其取出，剩下的arr以此類推。
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
    let result = [];
    while(arr.length > 0){
        let min =findMin(arr); //讓min等於findMin找到的最小值
        result.push(min); //將其push進新的[]中
        arr.splice(arr.indexOf(min),1) //indexOf() 方法會回傳給定元素於陣列中第一個被找到之索引，若不存在於陣列中則回傳 -1。
        //splice() 方法可以藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
        //arr.splice(n,x,"str")表示從索引 n 的位置開始，刪除 x 個元素並插入「str」
    }
    return result;
}
console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]

//將arr內的數由小到大排好
function findMax(arr){
    let max = arr[0];
    for(j = 0; j <= arr.length ; j++){
        if(arr[j] > max){
            max = arr[j];
        }
    }
    return max;
}
function mySort1 (arr){
    let result = [];
    while(arr.length > 0){
        let max =findMax(arr); 
        result.push(max); 
        arr.splice(arr.indexOf(max),1) 
    }
    return result;
}
console.log(mySort1([17, 0, -3, 2, 1, 0.5])); 