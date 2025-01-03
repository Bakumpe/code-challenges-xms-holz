function add(){
    let num1 = prompt("Enter first number: ");
    let num2 = prompt("Enter second number: ");
    
    num1 = Number(num1);
    num2 = Number(num2);

    let sum = 0;
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers");
        return;
    }else{
        sum = num1 + num2;
    }
    
    console.log("The sum of the two numbers is: " + sum);
}
add();