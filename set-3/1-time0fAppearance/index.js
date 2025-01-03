function appearance(){
    let sentance = "JavaScript is amazing";
    let letter = "a";
    let count = 0;
    for (let i = 0; i < sentance.length; i++){
        if (sentance[i] === letter){
            count++;
        }else if(count > 0){
            console.log(`The letter "${letter}" appears ${count} times in the sentance`);    
        }else if(i === sentance.length - 1){
            console.log("The letter is not in the sentance");
        }
    }
}
appearance();