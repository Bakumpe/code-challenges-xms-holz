/***
 * Write a program that filters out all numbers greater than 10 from an
array and returns the result.

start program

1. Create a function named greaterThan.
2. Initialize an array of numbers.
3. Initialize a variable num and assign a number to it.
4. Initialize an empty array greaterThan.
5. Create a for loop that iterates through the numbers array.
6. Check if the current number is greater than num.
7. If the number is greater than num, push it to the greaterThan array.
8. Display the greaterThan array.
9. End program.

 */

function greaterThan(){

    let numbers = [7, 8, 9, 10, 11, 12, 13, 14, 15,18];

    let num = 10;

    let greaterThan = [];
    
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] > num){
            greaterThan.push(numbers[i]);
        }
    }  
    console.log(`The numbers greater than 10 are: ${greaterThan}`);
    /*window.alert(`The numbers greater than 10 are: ${greaterThan}`);*/
}
greaterThan();