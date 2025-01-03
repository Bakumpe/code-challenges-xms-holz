function loopKeyValues(){
    let object = {a: 1, b: 2, c: 3};
    for (let key in object) {
        console.log(key, object[key]);
    }
}
loopKeyValues();