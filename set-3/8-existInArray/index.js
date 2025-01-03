/***
 * Write a function that takes a number and an array, checks if the
number exists in the array, and returns a message "Found" or "Not
Found".

start program
    declare a function named numArrayExist
        declare a variable named numArray and assign an array of numbers to it
        declare a variable named num and assign a number to it
        declare a variable named isExist and assign the result of checking if num exists in numArray
        check if isExist is true
            log "Found"
        otherwise
            log "Not Found"
    end function
end program
    *
 */

function numArrayExist(){
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let num = 6;
    let isExist = numArray.includes(num);

    if (isExist) {
        console.log('Found');
    } else {
    console.log('Not Found');
    }
}

numArrayExist();