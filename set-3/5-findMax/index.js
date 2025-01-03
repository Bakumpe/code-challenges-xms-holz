/***
 * Write a function findMax that returns the largest number from an array
of numbers.

start program

1. Create a function findMax that takes no parameters.
2. Create a variable num and assign an array of numbers to it.
3. Create a variable max and assign the first element of the array to it.
4. Create a for loop that iterates through the array.

    1. If the current element is greater than the max, assign the current element to max.

5. Print the max.

end program
 */

function findMax(){
    let num = [0, 1, 2, 3, 14, 5, 16];
    let max = num[0];

    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    console.log(max);
}
findMax();