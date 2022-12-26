//Write a function called "pyramid" that takes an integer as input, 
//and prints a pyramid in the following pattern
//先設定畫*的function，是由空格和星星組成的
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
drawRow(3,1);
drawRow(2,3);
drawRow(1,5);
drawRow(0,7);//手動打印金字塔的邏輯

//現在設定金字塔的function
function pyramid(n){
    let i = n-1;//空格 =n-1,n-2,n-3...
    let j = 1;//星星 =1,3,5,7,9...
    for(k = 1; k <= n ; k++){//k表示row數
        drawRow(i,j);
        i--;
        j+=2;
    }
}
pyramid(1);
console.log("-----------------");
pyramid(5);
console.log("-----------------");
pyramid(10);