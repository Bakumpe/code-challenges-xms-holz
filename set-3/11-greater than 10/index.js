function greaterThan(){

    let numbers = [7, 8, 9, 10, 11, 12, 13, 14, 15,18];

    let num = 10;

    let greaterThan = [];
    
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] > num){
            greaterThan.push(numbers[i]);
        }
    }  
    console.log(`The numbers greater than 10 are: ${greaterThan}`);
    /*window.alert(`The numbers greater than 10 are: ${greaterThan}`);*/
}
greaterThan();