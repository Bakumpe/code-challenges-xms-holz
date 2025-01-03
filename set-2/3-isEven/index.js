function isEven() {
    let num = prompt("Enter a number: ");

    num = Number(num);

    if (num % 2 === 0) {
        console.log("True");
    } else {
        console.log("False");
    }

}
isEven(); // true