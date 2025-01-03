/***
 * Build a function that takes a string and checks if it’s a palindrome (the
same forwards and backward). Write a program that takes an object
and swaps its keys and values.
Example input: { a: 1, b: 2 }. Output: { 1: "a", 2: "b" }.

start program

1. Create a function called palindrome.
2. Inside the function, prompt the user to enter a string.
3. Create a variable called reversedStr and assign it the value of the string reversed.
4. Check if the string is equal to the reversed string.
5. If they are equal, log 'Palindrome' to the console.
6. If they
are not equal, log 'Not Palindrome' to the console.
7. Call the function.

1. Create a function called swapKeysWithValues.
2. Create an object with key-value pairs.
3. Create a new object.
4. Loop through the object.
5. Assign the key as the value and the value as the key in the new object.
6. Log the new object to the console.
7. Call the function.

end program
 */

function palindrome(){
    let str = prompt('Enter a string: ');
    let reversedStr = str.split('').reverse().join('');
    if(str === reversedStr){
        console.log('Palindrome');
    } else {
        console.log('Not Palindrome');
    }
}
palindrome(); // Output: Palindrome

function swapKeysWithValues(){
    let obj = {
        'a': 1,
        'b': 2,
        
    };

    let newObj = {};
    for(let key in obj){
        newObj[obj[key]] = key;
    }

    console.log(newObj);
}
swapKeysWithValues(); // Output: { '1': 'a', '2': 'b' }