function findMax(){
    let num = [0, 1, 2, 3, 14, 5, 16];
    let max = num[0];

    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i];
        }
    }
    console.log(max);
}
findMax();