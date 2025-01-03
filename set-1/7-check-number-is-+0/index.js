/**
 * Write a program that checks if a number is positive, negative, or zero.
 * 
 * start program
 * prompt user for input
 * check if number is greater than 0
 *     print "Positive"
 * check if number is less than 0
 *    print "Negative"
 * or if number is 0
 *   print "Zero"
 * end program
 */


function checkNumber(){
    let number = prompt("Enter a number: ");
    if(number > 0){
        console.log("Positive");
    }else if(number < 0){
        console.log("Negative");
    }else{
        console.log("Zero");
    }
}
checkNumber();