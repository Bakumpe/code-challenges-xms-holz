/**
 * Concatenate the strings "Hello" and "World" with a space between
them.

start program
    declare string1 as "Hello"
    declare string2 as "World"
    declare string3 as string1 + " " + string2
    output string3

end program
 */


function concatenate(){
    let string1 = "Hello";
    let string2 = "World";
    let string3 = string1 + " " + string2;
    console.log(string3);
}

concatenate();