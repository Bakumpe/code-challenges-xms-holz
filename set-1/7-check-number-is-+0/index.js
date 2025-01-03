function checkNumber(){
    let number = prompt("Enter a number: ");
    if(number > 0){
        console.log("Positive");
    }else if(number < 0){
        console.log("Negative");
    }else{
        console.log("Zero");
    }
}
checkNumber();