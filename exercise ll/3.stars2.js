//Write a function called "stars2" which prints out layers of stars 
//in the following pattern
function stars2(n){
    
    for(let i = 0; i <= n ; i ++){
        let line = "";
        for(let j = 0; j < i ; j ++){
            line +="*";
        }
        console.log(line);
    }//以上都和stars的做法一樣
    for(let i = n-1; i > 0; i --){//區別是要做遞減的圖層
        let line = "";
        for(let j = 0; j < i ; j ++){
            line +="*";
        }
        console.log(line);
    }
}



stars2(5);
