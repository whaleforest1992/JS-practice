//Write a function called "inversePyramid" that draws pyramid 
//upside down.
//和pyramid 打印*的方式一樣，只是順序不同
function drawRow(space,star){
    let result = "";
    for(i = 0 ; i < space ; i ++){
        result += " ";//增加空格
    }
    for(j = 0 ; j < star; j++ ){
        result += "*";
    }
    console.log(result);
}

function inversepyramid(n){
    let i = 0;//空格 =0,1,2,3...
    let j = 2*n - 1;//星星 =2n-1,2n-3,2n-5...[這裡的2n-1，要記得加乘號 => 2*n-1]
    for(k = 1; k <= n ; k++){
        drawRow(i,j);
        i++;
        j-=2;
    }
}
inversepyramid(1);
console.log("-----------------");
inversepyramid(5);
console.log("-----------------");
inversepyramid(10);