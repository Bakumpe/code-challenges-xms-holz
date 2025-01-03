/****
 * Write a loop to log all key-value pairs of the object {a: 1, b: 2, c: 3}
 * 
 * start program
 * 
 * 1. create a function called loopKeyValues
 * 2. create an object with key-value pairs {a: 1, b: 2, c: 3}
 * 3. loop through the object using for-in loop
 * 4. log the key and value of the object
 * 5. call the function
 * 
 * end program
 */

function loopKeyValues(){
    let object = {a: 1, b: 2, c: 3};
    for (let key in object) {
        console.log(key, object[key]);
    }
}
loopKeyValues();