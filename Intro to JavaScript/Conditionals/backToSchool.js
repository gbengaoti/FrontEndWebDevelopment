/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "a Professional degree";

// set the value of this based on a person's education
var salary;

// your code goes here
switch(education){
    case "no high school diploma":
        salary = "$25,636/year";
        break;
    case "a high school diploma":
        salary = "$35,256/year";
        break;
    case "an Associate's degree":
        salary = "$41,496/year";
        break;
    case "a Bachelor's degree":
        salary = "$59,124/year";
        break;
    case "a Master's degree":
        salary = "$69,732/year";
        break;
    case "a Professional degree":
        salary = "$89,960/year";
        break;
    case "a Doctoral degree":
        salary = "$84,396/year";
        break;
    default:
        salary = "undefined";
}
console.log("In 2015, a person with "+education+" earned an average of "+salary+".")