/***
 * Write a program that takes a string and capitalizes the first letter of
each word.
Example input: "hello world". Output: "Hello World".

start program

1. Create a function named capitalize
2. Declare a variable named words and assign it to the value of the prompt
3. Declare a variable named wordArray and assign it to the value of words.split(" ")
4. Declare a variable named capitalizedWords and assign it to an empty array
5. Create a for loop that iterates through the wordArray
6. Declare a variable named word and assign it to the value of wordArray[i]
7. Declare a variable named firstLetter and assign it to the value of word.charAt(0).toUpperCase()
8. Declare a variable named restOfWord and assign it to the value of word.slice(1)
9. Declare a variable named capitalizedWord and assign it to the value of firstLetter + restOfWord
10. Push capitalizedWord into the capitalizedWords array
11. Print the capitalizedWords array joined by a space
12. End program

 */

function capitalize() {
    let words = prompt("Enter words: ");
    let wordArray = words.split(" ");
    let capitalizedWords = [];
    
    for(let i = 0; i < wordArray.length; i++){
        let word = wordArray[i];
        let firstLetter = word.charAt(0).toUpperCase();
        let restOfWord = word.slice(1);
        let capitalizedWord = firstLetter + restOfWord;
        capitalizedWords.push(capitalizedWord);
    }
    console.log(capitalizedWords.join(" "));
}   
capitalize();