//Write a function called "stars" which prints out layers of stars 
//in the following pattern

function stars(n){
        for(let i = 0 ; i <= n ; i++){
            //prints out a layer of stars
            let line = "";//這一層一開始是沒有東西的
            for(let j = 0 ; j < i ; j ++){
                line += "*";
            }
            console.log(line);//星星數是由 i決定，層數是由 n決定。
    }//好奇怪這裡不能用return line，再用console.log(stars(8));
}

stars(8);