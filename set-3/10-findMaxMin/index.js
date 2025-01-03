function findMaxMin(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let max = 0;
    let min = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            
        }
        if (numbers[i] < min) {
            min = numbers[i];
            
        }
    }
    console.log({max, min});
}
findMaxMin(); 