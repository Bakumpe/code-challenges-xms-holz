/***
 * Write a function greet that takes a name as an argument and returns
"Hello, [name]!".

start program

prompt user for their name
store the name in a variable
display a message to the user that says "Hello, [name]!"

end program
 */

function greet(){
    const name = prompt("Enter your name: ");
    alert(`Hello ${name}!`);
}

greet();