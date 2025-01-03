/***
 * Write a program that counts how many times the letter "a" appears in
the string "JavaScript is amazing!".

start program

1. Create a function called appearance
2. Declare a variable called sentance and assign it the value "JavaScript is amazing"
3. Declare a variable called letter and assign it the value "a"
4. Declare a variable called count and assign it the value 0
5. Create a for loop that will iterate through the sentance
6. Check if the current letter in the sentance is equal to the letter
7. If it is, increment the count by 1
8. If the count is greater than 0, log to the console the letter and the count
9. If the count is 0, log to the console that the letter is not in the sentance

10. End program

 */

function appearance(){
    let sentance = "JavaScript is amazing";
    let letter = "a";
    let count = 0;
    for (let i = 0; i < sentance.length; i++){
        if (sentance[i] === letter){
            count++;
        }else if(count > 0){
            console.log(`The letter "${letter}" appears ${count} times in the sentance`);    
        }else if(i === sentance.length - 1){
            console.log("The letter is not in the sentance");
        }
    }
}
appearance();