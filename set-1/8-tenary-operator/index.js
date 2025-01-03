/***
 * Use a ternary operator to check if a number is odd or even.
 * 
 * start program
 * prompt user to enter a number
 * check if the number is even or odd
 * print the result
 * 
 * end program
 */


function tenaryOperator() {
    const num = prompt("Enter the first number: ");

    if (num % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}
tenaryOperator(); 