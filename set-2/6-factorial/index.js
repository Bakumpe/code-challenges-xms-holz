/***
 * Use a for loop to calculate the factorial of a number n
 * 
 * start program
 * 
 * 1. Create a function factorial(n) that takes a number n as an argument
 * 2. Declare a variable result and assign it a value of 1
 * 3. Use a for loop to iterate from 1 to n
 *     1. Multiply the result by the current value of i
 * 4. Return the result
 * 
 * end program
 */


function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120

