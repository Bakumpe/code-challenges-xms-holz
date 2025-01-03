function reverse(){
    let str = "hello";
    let strArr = str.split('');
    let reversedArr = strArr.reverse();
    let reversedStr = reversedArr.join('');

    console.log(reversedStr);
}
reverse(); // olleh