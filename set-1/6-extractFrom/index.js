/***
 * Extract the word "fun" from the string "Coding is fun" using the
slice() method.

start
The position to begin the extraction. 
First character is at index 0.


end program


 */

function extractFrom(obj, path) {
    let string = "Coding is Fun";
    let extract = string.slice(10);

    console.log(extract);
}
extractFrom();