/***
 * Create a function multiplyNumbers that takes an array of numbers and
multiplies all the numbers together. Write a program that calculates
the frequency of each character in a string and returns the result as an
object.
Example input: "hello". Output: { h: 1, e: 1, l: 2, o: 1 }

start program

1. Create a function multiplyNumbers that takes an array of numbers and
multiplies all the numbers together.
2. Create a function frequency that calculates the frequency of each character in a string and returns the result as an object.
3. Create a variable str and assign a string value to it.
4. Create a variable freq and assign an empty object to it.
5. Create a for loop that iterates through the string.
6. Check if the character is already in the object.
7. If it is, increment the value of the character by 1.
8. If it is not, add the character to the object and assign the value of 1.
9. Print the object.
10. End program.

 */

function frequency(){
    let str = 'Hello';
    let freq = {};
    for(let i=0; i<str.length; i++){
        if(freq[str[i]]){
            freq[str[i]]++;
        }else{
            freq[str[i]] = 1;
        }
    }
    console.log(freq);
}
frequency();