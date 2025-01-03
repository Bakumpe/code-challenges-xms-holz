/****
 * Write a while loop to print the first 5 multiples of 3.
 * 
 * start program
 * 
 * 1. Create a function named whileLoop
 * 2. Initialize a variable count to 0
 * 3. Create a while loop that runs as long as count is less than 5
 * 4. Inside the while loop, print the value of 3 * count
 * 5. Increment count by 1
 * 
 * end program
 */

function whileLoop(){
    let count = 0;

    while(count < 5){
        console.log(3 * count);
        count++;
    }
}
whileLoop();