/***
 * Write a program that multiplies a variable by 5 using the *= operator.
 * 
 * Example
 *  - If num = 5, then the output should be 25.
 * - If num = 2, then the output should be 10.
 * 
 * Note: The variable should be taken as input from the user.
 * 
 * write the function 
 * start program
 * prompt the user to enter a number
 * multiply the number by 5
 * assign the result to the variable num
 * display the result
 * 
 * end the program
 */

function multiplyBy5() {
    let num = prompt(Number("Enter a number: "));
    num *= 5;
    
    console.log(num);
}
multiplyBy5();


/***Another Example
/*function multiplyByFive(n) {
    
    const button = document.getElementById("button");

    button.addEventListener("click", function() {
        let num = document.getElementById("num").value;
        const result = Number(num) * 5;

        document.getElementById("output").innerHTML = (`The result is ${result}`);

        document.getElementById("num").value = "";
    }); 
}
multiplyByFive();*/

