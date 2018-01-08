/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";
var message;

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife"
} else if (room === "billiards room") {
    weapon = "pool stick"
} else if (room === "gallery") {
    weapon = "trophy"
} else {
    weapon = "poison"
}

if ((room === "gallery") & (suspect === "Ms. Van Cleve")){
    solved = true
    message = "Ms. Van Cleve did it in the gallery with the trophy!"
}else if((room === "dining room") & (suspect === "Mr. Parkes")){
    solved = true;
    message = "Mr. Parkes did it in the dining room with the knife!";
}else if((room === "billiards room") & (suspect === "Mrs. Sparr")){
    solved = true;
    message = "Mrs. Sparr did it in the billiards room with the pool stick!";
}else{
    solved = true;
    message = "Mr. Kalehoff did it in the ballroom with the poison!";
}

if (solved) {
	console.log(message);
}
