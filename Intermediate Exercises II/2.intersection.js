//Write a function called "intersection" that takes 2 arrays, 
//and returns an array of elements that are in the intersection 
//of 2 arrays.
function intersection(arr1,arr2){
    let result = []; //我們要的結果也是一個array
    for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2.length ; j++){
            if(arr1[i] == arr2[j]){ //如果arr1的第i項等於arr2的第j項，就是交集的值
                //但是還要確認放進去的值有沒有和已放進去的值重複
                let okay = true;
                for(let k = 0; k <result.length ; k++){
                    if(result[k] == arr1[i]){
                        //如果要放進來的arr[i]和已經在裡面的result[k]相等，就不要放進來
                        okay = false;
                    }
                }
                if(okay){//如果arr1[i]等於arr2[j]且不等於result[k]，就加進result中
                    result.push(arr1[i]);
                }
            }
        }
    }
    console.log(result);
}

intersection([1, 3, 3, 3, 4, 6, 10,100, 1234 , -34], [5, 11, 4, 3, 100, 144, 0 , -34]); // returns [3, 4]
