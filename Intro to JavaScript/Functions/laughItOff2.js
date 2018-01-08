/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
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

console.log(laugh(3))
