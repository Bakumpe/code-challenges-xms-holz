/***
 * Check if the number 5 exists in the array [1, 2, 3, 4, 5] using the
includes() method.

start program

    create a function called existance
        create a variable called num and assign it to an array of numbers [1, 2, 3, 4, 5]
        create a variable called check and assign it to the number 5
        check if the number 5 exists in the array
            if it exists
                print "5 exists in the array"
            else
                print "5 does not exist in the array"
    call the function existance

end program
 */

function existance(){
    let num = [1, 2, 3, 4, 5];

    let check = 5;
    
    if(num.includes(check)){
        console.log("5 exists in the array");
    }else{
        console.log(`${check} does not exist in the array`);
    }
}

existance(); // 5 exists in the array