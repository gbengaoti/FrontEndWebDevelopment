/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var solution="";
var total=1;
var num = 12;
for (var num = 12;num>=1;num--){
    if (num === 1){
        solution = solution + "1" + "=" + total;
        console.log(total);
    }else{
    solution = solution + num+"*";
    total *= num;
    }
}
