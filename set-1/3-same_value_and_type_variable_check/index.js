/***
 * Write a program that checks if two variables have the same value and
type.

start program
  declare a variable a and assign it a value of 10
  declare a variable b and assign it a value of 10
  if a is equal to b
    display "a and b are of SAME value and type"
  else
    display "a and b are NOT OF THE SAME value and type"

end program
 */


function variableCheck() {
  let a = 10;
  let b = 10;
  if (a === b) {
    console.log("a and b are of SAME value and type");
  }else{
    console.log("a and b are NOT OF THE SAME value and type");
  }
}

variableCheck();