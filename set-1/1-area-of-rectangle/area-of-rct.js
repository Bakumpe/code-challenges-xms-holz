/***
 * Title: Area of Rectangle
 * 
 * Write a program that calculates the area of a rectangle given length
    and width.
    
    start program

    declare a variable for length and width
    create a function to take input from the user
    solution for calculating the area is:
 *  area = length * width
    output the result to the user

    end program
 * 
 */


function areaOfRectangle() {
    
    const calculate = document.getElementById("submit");

    calculate.addEventListener("click", () => {
        const length = document.getElementById("length").value;
        const width = document.getElementById("width").value;
        const result = length * width;

        document.getElementById("area").innerHTML = `${result} sq units`;
        
        
        document.getElementById("length").value = "";
        document.getElementById("width").value = "";
    });   
}

areaOfRectangle(); 