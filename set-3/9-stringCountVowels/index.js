/*function vowels(){
    let str = prompt('Enter a string: ');
    console.log(str);

    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'a' ||str[i] ==="A" || str[i] === 'e'||str[i] === "E" || str[i] === 'i'||str[i] === "I" || str[i] === 'o'||str[i] === "O" || str[i] === 'u'||str[i] === "U"){
            count++;    
        }
    }
    console.log(`Total number of vowels found is ${count}`);
    
}
vowels();*/

function vowel(){
    let str = prompt('Enter a string: ');
    console.log(str);

    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;    
        }
    }
    console.log(`Total number of vowels found is ${count}`);
}
vowel();