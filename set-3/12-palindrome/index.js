function palindrome(){
    let str = prompt('Enter a string: ');
    let reversedStr = str.split('').reverse().join('');
    if(str === reversedStr){
        console.log('Palindrome');
    } else {
        console.log('Not Palindrome');
    }
}
palindrome(); // Output: Palindrome

function swapKeysWithValues(){
    let obj = {
        'a': 1,
        'b': 2,
        
    };

    let newObj = {};
    for(let key in obj){
        newObj[obj[key]] = key;
    }

    console.log(newObj);
}
swapKeysWithValues(); // Output: { '1': 'a', '2': 'b' }