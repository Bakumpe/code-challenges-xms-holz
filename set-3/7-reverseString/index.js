/***
 * Write a function that reverses a string, e.g., "hello" becomes "olleh".
 * 
 * start program
 * 1. Create a function named reverse.
 * 2. Initialize a variable str and assign a string value "hello".
 * 3. Initialize a variable strArr and assign a value of str.split('').
 * 4. Initialize a variable reversedArr and assign a value of strArr.reverse().
 * 5. Initialize a variable reversedStr and assign a value of reversedArr.join('').
 * 6. Print reversedStr.
 * 7. End program.
 * 
 */

function reverse(){
    let str = "hello";
    let strArr = str.split('');
    let reversedArr = strArr.reverse();
    let reversedStr = reversedArr.join('');

    console.log(reversedStr);
}
reverse(); // olleh