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