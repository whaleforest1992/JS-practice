//Write a function called "flatten" that flattens an array.
function flatten(arr){
    let result = [];
    helper(arr);
    console.log(result);
    return result;

    function helper(arr1){
        for(let i = 0 ; i < arr1.length ; i ++){
            if(Array.isArray(arr1[i])){ //如果arr1[i]還是的array則繼續執行 help 
                helper(arr1[i]);
            }else{
                result.push(arr1[i]);//如果arr1[i]不是array則放進result中
            }
        }
    }
}

flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]);
// returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]
