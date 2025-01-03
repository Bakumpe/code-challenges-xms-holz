/***
 * Create a function that accepts a string and counts how many vowels (a,
e, i, o, u) it contains

start program

1. Accept a string from the user
2. Create a variable to store the count of vowels
3. Create an array of vowels
4. Loop through the string
5. Check if the current character is a vowel
6. If it is a vowel, increment the count
7. Display the count of vowels

end program
 */

/**Example  */
/*function vowels(){
    let str = prompt('Enter a string: ');
    console.log(str);

    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' ||str[i] ==="A" || str[i] === 'e'||str[i] === "E" || str[i] === 'i'||str[i] === "I" || str[i] === 'o'||str[i] === "O" || str[i] === 'u'||str[i] === "U"){
            count++;    
        }
    }
    console.log(`Total number of vowels found is ${count}`);
    
}
vowels();*/

function vowel(){
    let str = prompt('Enter a string: ');
    console.log(str);

    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;    
        }
    }
    console.log(`Total number of vowels found is ${count}`);
}
vowel();