function numArrayExist(){
    let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let num = 6;
    let isExist = numArray.includes(num);

    if (isExist) {
        console.log('Found');
    } else {
    console.log('Not Found');
    }
}

numArrayExist();