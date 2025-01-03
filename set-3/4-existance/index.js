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