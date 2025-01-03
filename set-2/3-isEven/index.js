/***
 * Write a function isEven that checks if a given number is even.
 * 
 * start program
 * 
 * declare a function named "isEven" that takes no parameter
 *     prompt the user to enter a number and store it in a variable "num"
 *    convert the "num" to a number
 *   check if the "num" is divisible by 2
 *      if true, print "True"
 *     if false, print "False"
 * 
 * call the function "isEven"
 * 
 * end program
 */

function isEven() {
    let num = prompt("Enter a number: ");

    num = Number(num);

    if (num % 2 === 0) {
        console.log("True");
    } else {
        console.log("False");
    }

}
isEven(); // true