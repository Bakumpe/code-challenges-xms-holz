/****
 * Create a function sumArray that takes an array of numbers and returns
their sum.

start program

1. Create a function sumArray that takes an array of numbers as a parameter.
2. Create a variable sum and set it to 0.
3. Create a for loop that will iterate through the array.
4. Add each element of the array to the sum variable.
5. Print the sum variable.
6. End program.
 */

function sumArray() {
    let array = [1, 2, 3, 4, 5];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
sumArray();