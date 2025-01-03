/***
 * Write a program to check if two arrays are equal (contain the same
elements in the same order). Develop a function findMinMax that takes
an array of numbers and returns an object with the smallest and largest
numbers.
Example output: { min: 1, max: 10 }.

start program

1. create a function called findMaxMin
2. create an array of numbers
3. create a variable called max and set it to 0
4. create a variable called min and set it to 0
5. loop through the array of numbers
6. check if the current number is greater than the max
7. if it is, set the max to the current number
8. check if the current number is less than the min
9. if it is, set the min to the current number
10. print the max and min
11. end program

 */

function findMaxMin(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let max = 0;
    let min = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            
        }
        if (numbers[i] < min) {
            min = numbers[i];
            
        }
    }
    console.log({max, min});
}
findMaxMin(); 