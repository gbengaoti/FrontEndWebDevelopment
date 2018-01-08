/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num) {
    var solution="";
    for (var i=0; i<num; i++){
        if (i === num-1){
            solution += "ha!";
        }else{
            solution += "ha";
        }
    }
    return solution;
}

console.log(laugh(10));
